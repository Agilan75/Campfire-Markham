import Hero from '@/components/Hero'
import FaqSection from "@/components/FaqSection";
import FooterScene from "@/components/FooterScene";

export default function Home() {
  return (
    <div className="dark:bg-black">
      <Hero/>
      <FaqSection />
      <FooterScene />
    </div>
  );
}
