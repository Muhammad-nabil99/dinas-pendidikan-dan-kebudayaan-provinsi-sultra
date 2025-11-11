import {
  ArrowLeft,
  User,
  Info,
  Users,
  Phone,
  Mail,
  Smartphone,
  Globe,
  MapPin,
  Building,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BgImage from "../../assets/tracking.jpg";

const PPIDProfil = () => {
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
              <User className="w-6 h-6" />
              <span className="text-xs sm:text-sm font-medium ml-2">PPID</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              Profil PPID
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
          <div className="grid gap-6">
            {/* Tentang PPID */}
            <Card className="shadow-elegant border-l-4 border-government-blue">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <Info className="w-6 h-6" />
                  Tentang PPID
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-government-blue mb-3">
                      Pengertian
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      PPID adalah pejabat yang bertanggung jawab di bidang
                      penyimpanan pendokumentasian, penyediaan, dan/atau
                      pelayanan informasi di badan publik.
                    </p>
                    <h3 className="font-semibold text-government-blue mb-3">
                      Dasar Hukum
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>
                        • UU No. 14 Tahun 2008 tentang Keterbukaan Informasi
                        Publik
                      </li>
                      <li>
                        • Peraturan Komisi Informasi tentang Standar Layanan
                        Informasi Publik
                      </li>
                      <li>
                        • Peraturan Gubernur tentang PPID Provinsi Sulawesi
                        Tenggara
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-government-blue mb-3">
                      Visi PPID
                    </h3>
                    <p className="text-muted-foreground mb-4 italic">
                      "Mewujudkan pelayanan informasi publik yang transparan,
                      akuntabel, dan berkualitas."
                    </p>
                    <h3 className="font-semibold text-government-blue mb-3">
                      Misi PPID
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>
                        • Memberikan pelayanan informasi yang cepat dan akurat
                      </li>
                      <li>
                        • Mengelola dokumentasi informasi secara sistematis
                      </li>
                      <li>
                        • Meningkatkan transparansi penyelenggaraan pemerintahan
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Struktur PPID */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <Users className="w-6 h-6" />
                  UPTD PPID
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-government-blue/10 rounded-lg">
                    <h2 className="font-semibold text-government-blue">
                      PEJABAT STRUKTURAL & FUNGSIONAL
                    </h2>
                    <div className="my-6 m-auto md:w-10/12 lg:w-1/4 w-1/2  flex items-center justify-center bg-slate-300 h-44 rounded-md">
                      <img
                        src="/avatar.png"
                        alt="Avatar"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h4 className="font-semibold text-government-blue">
                      KEPALA UPTD BTIKP
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      H. Jasfol Sambo, SE.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="text-center p-3 rounded-lg">
                      <div className="my-6 m-auto md:w-10/12 lg:w-1/2  flex items-center justify-center bg-slate-300 h-44 rounded-md">
                        <img
                          src="/avatar.png"
                          alt="Avatar"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Hasruddin Jumain, S.Ip.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Seksi P2TIP
                      </p>
                    </div>
                    <div className="text-center p-3 bg-accent-gold/10 rounded-lg">
                      <div className="my-6 m-auto md:w-10/12 lg:w-1/2 flex items-center justify-center bg-slate-300 h-44 rounded-md">
                        <img
                          src="/avatar.png"
                          alt="Avatar"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Supriyatno, S.Sos.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Seksi P2MP
                      </p>
                    </div>
                  </div>
                  <div className="text-center p-3 bg-accent-gold/10 rounded-lg">
                    <div className="my-6 m-auto md:w-1/2 lg:w-1/4  flex items-center justify-center bg-slate-300 h-44 rounded-md">
                      <img
                        src="/avatar.png"
                        alt="Avatar"
                        className="max-h-full w-40 object-contain"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Wa Ita, S.Pd.
                    </p>
                    <p className="text-xs text-muted-foreground">Kasubag TU</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Kontak PPID */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <Phone className="w-6 h-6" />
                  Kontak PPID
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-gradient-primary/5 rounded-lg">
                    <h4 className="font-semibold text-government-blue mb-2">
                      Informasi Kontak
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>[Template - ppid@disdik.sulteng.go.id]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        <span>[Template - +62 xxx-xxxx-xxxx]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>[Template - ppid.disdik.sulteng.go.id]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>[Template - Alamat lengkap kantor]</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-education-green/10 rounded-lg">
                    <h4 className="font-semibold text-education-green mb-2">
                      Jam Pelayanan
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Senin - Kamis</span>
                        <span>08:00 - 15:30 WIB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Jumat</span>
                        <span>08:00 - 16:00 WIB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PPIDProfil;
