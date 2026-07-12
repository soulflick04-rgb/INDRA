import { Navbar } from "@/components/layout/Navbar";
import { MuseumLoader } from "@/components/layout/MuseumLoader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { YearCounter } from "@/components/timeline/YearCounter";
import { ExhibitionSection } from "@/components/exhibitions/ExhibitionSection";
import { HorizontalArchive } from "@/components/archive/HorizontalArchive";
import { FutureImpact } from "@/components/future/FutureImpact";
import { FinalCTA } from "@/components/future/FinalCTA";
import { CreatorSection } from "@/components/creator/CreatorSection";
import { AmbientSound } from "@/components/audio/AmbientSound";
import { exhibitions } from "@/lib/data/exhibitions";

export default function Home() {
  return (
    <SmoothScroll>
      <AmbientSound />
      <MuseumLoader />
      <CustomCursor />
      <Navbar />
      
      <main className="relative flex flex-col min-h-screen">
        <HeroSection />
        
        <YearCounter />

        <div id="exhibitions">
          {exhibitions.map((exhibition, i) => (
            <ExhibitionSection key={exhibition.id} exhibition={exhibition} index={i} />
          ))}
        </div>

        <HorizontalArchive />
        
        <FutureImpact />

        <CreatorSection />
        
        <FinalCTA />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
