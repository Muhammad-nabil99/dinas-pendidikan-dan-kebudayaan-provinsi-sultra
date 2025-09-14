import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sejarah = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-government-blue mb-4">
            Sejarah Dinas Pendidikan
          </h1>
          <p className="text-muted-foreground text-lg">
            Perjalanan Panjang Membangun Pendidikan Sulawesi Tenggara
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-government-blue">
                <span className="text-2xl">📚</span>
                Awal Pembentukan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Dinas Pendidikan Provinsi Sulawesi Tenggara dibentuk berdasarkan
                Peraturan Daerah... [Template - Isi dengan sejarah pembentukan
                dinas]
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold text-government-blue">
                  Tahun Pembentukan: [Tahun]
                </p>
                <p className="text-sm text-muted-foreground">
                  Dasar Hukum: [Peraturan Daerah]
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-government-blue">
                <span className="text-2xl">🏛️</span>
                Perkembangan Organisasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-government-blue pl-4">
                  <h3 className="font-semibold text-lg">
                    Era Awal (Tahun - Tahun)
                  </h3>
                  <p className="text-muted-foreground">
                    [Template - Isi dengan perkembangan organisasi di era awal]
                  </p>
                </div>
                <div className="border-l-4 border-education-green pl-4">
                  <h3 className="font-semibold text-lg">
                    Era Pengembangan (Tahun - Tahun)
                  </h3>
                  <p className="text-muted-foreground">
                    [Template - Isi dengan perkembangan di era pengembangan]
                  </p>
                </div>
                <div className="border-l-4 border-accent-gold pl-4">
                  <h3 className="font-semibold text-lg">
                    Era Modern (Tahun - Sekarang)
                  </h3>
                  <p className="text-muted-foreground">
                    [Template - Isi dengan perkembangan era modern]
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-government-blue">
                <span className="text-2xl">🎯</span>
                Pencapaian Bersejarah
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-government-blue mb-2">
                    Prestasi Pendidikan
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    [Template - Isi dengan prestasi pendidikan]
                  </p>
                </div>
                <div className="bg-gradient-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-government-blue mb-2">
                    Inovasi Program
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    [Template - Isi dengan inovasi program]
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Sejarah;
