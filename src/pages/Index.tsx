import HeroSection from "@/components/sections/HeroSection";
import NewsSection from "@/components/sections/NewsSection";
import GallerySection from "@/components/sections/GallerySection";
import TrackingSection from "@/components/sections/TrackingSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import useGetPengumuman from "@/features/pengumuman/useGetPengumuman";
import PengumumanSection from "@/components/sections/PengumumanSection";
import useGetBerita from "@/features/news/useGetBerita";
import useGetGaleri from "@/features/galeri/useGetGaleri";

const Index = () => {
  const { pengumuman, isLoading: isLoadingPengumuman } = useGetPengumuman();
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
