import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.png";
import heroImage3 from "@/assets/hero-3.png";
import { Link } from "react-router-dom";

const heroImage = [heroImage1, heroImage2, heroImage3];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden "
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <img
          src={heroImage1}
          alt="Dinas Pendidikan Sulawesi Tenggara"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-government-blue/90 via-government-blue/70 to-transparent"></div>
      </div>
      {/* Content */}
      {/* <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"> */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-60 md:pt-20 lg:pt-40">
        <div className="max-w-3xl text-center mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <img src="../../../public/logo.png" alt="logo sultra" />
            </div>
            <div className="text-white/90">
              <p className="text-sm font-medium">Pemerintah Provinsi</p>
              <p className="text-lg font-bold">Sulawesi Tenggara</p>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Dinas Pendidikan
            <span className="block text-gold">Sulawesi Tenggara</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Selamat Datang
          </p>
          <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            #WargaSultra
          </p>
          <p className="text-lg md:text-2xl text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
            "Pendidikan Hebat, Masa Depan Kuat!"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-government-blue hover:bg-white/90 shadow-medium"
            >
              <span>Layanan Publik</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/profil/sejarah">
              <Button
                variant="outline"
                size="lg"
                className="border-white hover:text-white bg-white/10 text-white border-2"
              >
                Profil Dinas
              </Button>
            </Link>
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
