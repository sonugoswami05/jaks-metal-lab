import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Equipment from "@/components/sections/Equipment";
import Certifications from "@/components/sections/Certifications";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      <Equipment />
      <Certifications />
      <WhyUs />
      <CTA />
      <Contact />
    </main>
  );
}
