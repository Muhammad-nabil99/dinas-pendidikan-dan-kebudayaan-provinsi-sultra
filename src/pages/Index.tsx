import HeroSection from "@/components/sections/HeroSection";
import NewsSection from "@/components/sections/NewsSection";
import GallerySection from "@/components/sections/GallerySection";
import TrackingSection from "@/components/sections/TrackingSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import useGetPengumuman from "@/features/pengumuman/useGetPengumuman";
import PengumumanSection from "@/components/sections/PengumumanSection";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useEffect, useState } from "react";

const Index = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // wait for page + assets to load
  //   const handleLoad = () => {
  //     setTimeout(() => setLoading(false), 1000); // add delay for nicer UX
  //   };

  //   if (document.readyState === "complete") {
  //     handleLoad();
  //   } else {
  //     window.addEventListener("load", handleLoad);
  //   }

  //   return () => window.removeEventListener("load", handleLoad);
  // }, []);
  const { pengumuman, isLoading: isLoadingPengumuman } = useGetPengumuman();

  // if (loading) {
  //   return <LoadingSpinner loading={loading} />; // full-screen loader
  // }
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
