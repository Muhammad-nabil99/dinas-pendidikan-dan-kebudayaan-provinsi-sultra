import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Clock, Search, Filter } from "lucide-react";

const misi: string[] = [
  "Meningkatkan kualitas hidup masyarakat agar dapat berdaulat dan aman dalam bidang ekonomi, pangan, pendidikan, kesehatan, lingkungan, politik, serta iman dan taqwa",
  "Memajukan daya saing wilayah melalui penguatan ekonomi lokal dan peningkatan investasi.",
  "Mendorong birokrasi pemerintahan provinsi yang moderen, tata kelola pemerintahan desa yang baik",
  "Meningkatkan konektivitas dan kemitraan antar pemerintah, swasta dan masyarakat dalam rangka peningkatan daya saing daerah melalui pembangunan dan perbaikan infrastruktur dan aspek-aspek sosial ekonomi",
];

const VisiMisi = () => {
  return (
    <main>
  {/* Hero Section */}
  <section
    className="relative py-20 text-white bg-cover bg-center"
    style={{ backgroundImage: "url('/src/assets/tracking.jpg')" }}
  >
    {/* Overlay warna biru dengan opacity */}
    <div className="absolute inset-0 bg-blue-900/70"></div>

    {/* Konten */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center mb-6">
        <Link to="/">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Kembali ke Beranda</span>
          </Button>
        </Link>
      </div>

      <div className="text-center">
        <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full mb-3 sm:mb-4">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
          <span className="text-xs sm:text-sm font-medium">Profil</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
          Visi & Misi
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
          Komitmen Kami untuk Pendidikan Berkualitas
        </p>
      </div>
    </div>
  </section>

  {/* Konten Utama */}
  <section className="container mx-auto px-4 py-12">
    <div className="max-w-4xl mx-auto grid gap-6">
      {/* Visi */}
      <Card className="shadow-elegant border-l-4 border-government-blue">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-government-blue">
            <span className="text-2xl font-bold">VISI</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-primary/10 p-6 rounded-lg">
            <p className="text-lg text-center font-medium leading-relaxed text-government-blue">
              "Terwujudnya Sulawesi Tenggara yang Aman, Maju, Sejahtera dan
              Bermartabat"
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Misi */}
      <Card className="shadow-elegant border-l-4 border-education-green">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-government-blue">
            <span className="text-2xl font-bold">MISI</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {misi.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg"
              >
                <div className="bg-education-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-muted-foreground flex-1">{item}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tujuan */}
      <Card className="shadow-elegant border-l-4 border-accent-gold">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-government-blue">
            <span className="text-2xl font-bold">TUJUAN</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            "Meningkatkan Akses dan Kualitas Layanan Pendidikan dan Kebudayaan"
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
</main>

  );
};

export default VisiMisi;
