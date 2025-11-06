import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import BgImage from '../../assets/tracking.jpg';
import ProfilCard from "@/components/ppid/ProfilCard";

const PPIDProfil = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section
          className="relative py-20 text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${BgImage})`  }}
        >
          {/* Overlay warna biru dengan opacity */}
          <div className="absolute inset-0 bg-blue-900/70"></div>

        {/* Konten */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/ppid">
              <button className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-4 py-2 rounded-md flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Kembali ke PPID</span>
              </button>
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full mb-3 sm:mb-4">
              <span className="text-lg">👤</span>
              <span className="text-xs sm:text-sm font-medium ml-2">PPID</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              Profil & Kontak PPID
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
              Dinas Pendidikan Provinsi Sulawesi Tenggara
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <ProfilCard />
        </div>
      </div>
    </main>
  );
};

export default PPIDProfil;
