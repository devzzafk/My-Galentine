import PixelCharacters from "@/components/PixelCharacters";
import HeroSection from "@/components/HeroSection";
import AmmuSection from "@/components/AmmuSection";
import ReasonsSection from "@/components/ReasonsSection";
import CatchHeartsGame from "@/components/CatchHeartsGame";
import HugCounter from "@/components/HugCounter";
import LoveLetterSection from "@/components/LoveLetterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <PixelCharacters />
      <HeroSection />
      <AmmuSection />
      <ReasonsSection />
      <CatchHeartsGame />
      <HugCounter />
      <LoveLetterSection />
      <Footer />
    </div>
  );
};

export default Index;
