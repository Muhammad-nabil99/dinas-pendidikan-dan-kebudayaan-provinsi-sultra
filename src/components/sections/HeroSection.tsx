import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.png";
import heroImage3 from "@/assets/hero-3.png";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// The array of hero background images
const heroImage = [heroImage1, heroImage2, heroImage3];

// The array of texts to be displayed with a typing animation
const heroTexts = ["Selamat Datang", "Selamat Leu", "Selamat Ngka"];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Effect to change the background image every 2 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImage.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(imageInterval);
  }, []);

  // Effect to handle the typing and deleting animation of the text
  useEffect(() => {
    let timeout;
    const fullText = heroTexts[currentTextIndex];

    if (isTyping) {
      // Typing logic
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 80); // Adjust typing speed here
      } else {
        // Full text is displayed, switch to deleting after a delay
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500); // Delay before deleting
      }
    } else {
      // Deleting logic
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, 50); // Adjust deleting speed here
      } else {
        // Text is fully deleted, move to the next text and restart typing
        setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentTextIndex]);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroImage.map((image, index) => (
          <img
            loading="lazy"
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-60 md:pt-20 lg:pt-40">
        <div className="max-w-3xl text-center mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <img loading="lazy" src="./logo.png" alt="logo sultra" />
            </div>
            <div className="text-white/90">
              <p className="text-sm font-medium">Pemerintah Provinsi</p>
              <p className="text-lg font-bold">Sulawesi Tenggara</p>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Dinas Pendidikan dan Kebudayaan
            <span className="block text-gold">Sulawesi Tenggara</span>
          </h1>

          {/* Animated Text Section */}
          <div className="relative h-5 mb-6 flex items-center justify-center">
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              {displayedText}
              <span className="animate-pulse">|</span> {/* Blinking cursor */}
            </p>
          </div>

          <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-6">
            "Pendidikan Hebat, Masa Depan Kuat!"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/laporan-kegiatan"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md text-base font-medium transition duration-200 bg-white text-blue-900 hover:bg-white/90 shadow-md"
            >
              <span>Laporan Kegiatan</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="/profil/sejarah"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md text-base font-medium transition duration-200 border-2 border-white hover:text-white bg-white/10 text-white"
            >
              Profil Dinas
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gold mb-1">
                1,200+
              </div>
              <div className="text-white/80 text-xs sm:text-sm">
                Sekolah Binaan
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gold mb-1">
                150,000+
              </div>
              <div className="text-white/80 text-xs sm:text-sm">
                Siswa Aktif
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gold mb-1">
                12,000+
              </div>
              <div className="text-white/80 text-xs sm:text-sm">
                Tenaga Pendidik
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-40 w-20 h-20 bg-gold/20 rounded-full blur-lg"></div>
    </section>
  );
};

export default HeroSection;
