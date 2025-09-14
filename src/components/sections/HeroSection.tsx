import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Dinas Pendidikan Sulawesi Tenggara"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-government-blue/90 via-government-blue/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12  backdrop-blur-sm rounded-lg flex items-center justify-center">
              {/* <GraduationCap className="w-6 h-6 text-white" /> */}
              <img src="../../../public/logo.png" alt="logo sultra" />
            </div>
            <div className="text-white/90">
              <p className="text-sm font-medium">Pemerintah Provinsi</p>
              <p className="text-lg font-bold">Sulawesi Tenggara</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Dinas Pendidikan
            <span className="block text-gold">Sulawesi Tenggara</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Membangun pendidikan berkualitas untuk masa depan yang gemilang.
            Melayani masyarakat dengan dedikasi dan inovasi dalam mengembangkan
            sistem pendidikan di Sulawesi Tenggara.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-government-blue hover:bg-white/90 shadow-medium"
            >
              <span>Layanan Publik</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white   hover:text-white  bg-white/10 text-white border-2"
            >
              Profil Dinas
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-1">1,200+</div>
              <div className="text-white/80 text-sm">Sekolah Binaan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-1">150,000+</div>
              <div className="text-white/80 text-sm">Siswa Aktif</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-gold mb-1">12,000+</div>
              <div className="text-white/80 text-sm">Tenaga Pendidik</div>
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
