"use client";
import { useState, useEffect, useRef, useCallback, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  itemsPerView?: { mobile: number; tablet: number; desktop: number };
  gap?: number;
}

export default function Carousel({
  children,
  autoPlay = true,
  interval = 4000,
  showDots = true,
  showArrows = true,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 24,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(itemsPerView.desktop);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = children.length;
  const maxIndex = Math.max(0, total - perView);

  // Responsive
  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w < 640) setPerView(itemsPerView.mobile);
      else if (w < 1024) setPerView(itemsPerView.tablet);
      else setPerView(itemsPerView.desktop);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || isHovered || isDragging) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, interval);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoPlay, interval, isHovered, isDragging, maxIndex]);

  const goTo = useCallback((i: number) => {
    setCurrent(Math.max(0, Math.min(i, maxIndex)));
  }, [maxIndex]);

  const prev = () => goTo(current <= 0 ? maxIndex : current - 1);
  const next = () => goTo(current >= maxIndex ? 0 : current + 1);

  // Touch/drag
  const handleDragStart = (x: number) => { setIsDragging(true); setDragStart(x); setDragOffset(0); };
  const handleDragMove = (x: number) => { if (isDragging) setDragOffset(x - dragStart); };
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 60) {
      if (dragOffset < 0) next(); else prev();
    }
    setDragOffset(0);
  };

  const itemWidth = `calc((100% - ${gap * (perView - 1)}px) / ${perView})`;
  const translateX = `calc(-${current} * (${itemWidth} + ${gap}px) + ${isDragging ? dragOffset : 0}px)`;

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap,
          transform: `translateX(${translateX})`,
          transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        {children.map((child, i) => (
          <div
            key={i}
            style={{
              minWidth: itemWidth,
              maxWidth: itemWidth,
              flex: "0 0 auto",
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Arrows */}
      {showArrows && total > perView && (
        <>
          <button
            onClick={prev}
            style={{
              position: "absolute",
              left: -4,
              top: "50%",
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--bg-primary)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              boxShadow: "var(--shadow-md)",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.3s",
              opacity: isHovered ? 1 : 0,
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            style={{
              position: "absolute",
              right: -4,
              top: "50%",
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--bg-primary)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              boxShadow: "var(--shadow-md)",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.3s",
              opacity: isHovered ? 1 : 0,
            }}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && total > perView && (
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: current === i ? 28 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                background: current === i ? "var(--accent)" : "var(--border)",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
