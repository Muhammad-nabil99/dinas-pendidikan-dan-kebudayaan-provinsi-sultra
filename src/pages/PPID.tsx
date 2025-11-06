import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import BgImage from "../assets/tracking.jpg";
import ProfilCard from "@/components/ppid/ProfilCard";
import MekanismeForm from "@/components/ppid/MekanismeForm";
import DipList from "@/components/ppid/DipList";

const PPID = () => {

  const getDefaultTab = () => {
    return "profil";
  };

  

  return (
    <main className="min-h-screen bg-background">
      <section
        className="relative py-20 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/">
              <button className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-4 py-2 rounded-md flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Kembali ke Beranda</span>
              </button>
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full mb-3 sm:mb-4">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              <span className="text-xs sm:text-sm font-medium">PPID</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              Pejabat Pengelola Informasi dan Dokumentasi
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
          <Tabs defaultValue={getDefaultTab()} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="profil" className="flex items-center gap-2">
                <span className="text-lg">👤</span>
                <span className="hidden sm:inline">Profil & Kontak</span>
                <span className="sm:hidden">Profil</span>
              </TabsTrigger>
              <TabsTrigger
                value="mekanisme"
                className="flex items-center gap-2"
              >
                <span className="text-lg">📄</span>
                <span className="hidden sm:inline">Mekanisme Layanan</span>
                <span className="sm:hidden">Mekanisme</span>
              </TabsTrigger>
              <TabsTrigger value="dip" className="flex items-center gap-2">
                <span className="text-lg">📚</span>
                <span className="hidden sm:inline">
                  Daftar Informasi Publik
                </span>
                <span className="sm:hidden">DIP</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profil">
              <ProfilCard />
            </TabsContent>

            <TabsContent value="mekanisme">
              <MekanismeForm />
            </TabsContent>

            <TabsContent value="dip">
              <DipList />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default PPID;
