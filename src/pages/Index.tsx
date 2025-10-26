import HeroSection from "@/components/sections/HeroSection";
import NewsSection from "@/components/sections/NewsSection";
import GallerySection from "@/components/sections/GallerySection";
import TrackingSection from "@/components/sections/TrackingSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import useGetPengumuman from "@/features/pengumuman/useGetPengumuman";
import PengumumanSection from "@/components/sections/PengumumanSection";

const Index = () => {
  const { pengumuman, isLoading } = useGetPengumuman();


  return (
    <main>
      <HeroSection />
      {pengumuman?.length > 0 && <PengumumanSection />}
      <NewsSection />
      <GallerySection />
      <TrackingSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
  
};

export default Index;
