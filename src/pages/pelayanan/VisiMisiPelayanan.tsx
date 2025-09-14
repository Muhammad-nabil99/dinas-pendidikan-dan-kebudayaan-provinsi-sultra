import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VisiMisiPelayanan = () => {
  return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-government-blue mb-4">Visi Misi Pelayanan</h1>
            <p className="text-muted-foreground text-lg">Komitmen Pelayanan Prima untuk Masyarakat</p>
          </div>

          <div className="grid gap-6">
            <Card className="shadow-elegant border-l-4 border-government-blue">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-government-blue">
                  <span className="text-3xl">🎯</span>
                  <span className="text-2xl font-bold">VISI PELAYANAN</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-primary/10 p-6 rounded-lg">
                  <p className="text-lg text-center font-medium leading-relaxed text-government-blue">
                    "[Template - Visi pelayanan yang berorientasi pada kepuasan masyarakat dan peningkatan kualitas layanan pendidikan]"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-l-4 border-education-green">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-government-blue">
                  <span className="text-3xl">📋</span>
                  <span className="text-2xl font-bold">MISI PELAYANAN</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Memberikan pelayanan yang cepat, tepat, dan berkualitas",
                    "Mengutamakan kepuasan dan kepentingan masyarakat",
                    "Melaksanakan pelayanan dengan transparansi dan akuntabilitas",
                    "Meningkatkan kompetensi aparatur dalam pelayanan publik",
                    "Mengembangkan inovasi pelayanan berbasis teknologi"
                  ].map((misi, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="bg-education-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground flex-1">
                        [Template - {misi}]
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-l-4 border-accent-gold">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-government-blue">
                  <span className="text-3xl">⭐</span>
                  <span className="text-2xl font-bold">PRINSIP PELAYANAN</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: "🚀",
                      title: "Responsif",
                      desc: "Tanggap terhadap kebutuhan masyarakat"
                    },
                    {
                      icon: "🎯",
                      title: "Efektif",
                      desc: "Mencapai tujuan dengan tepat sasaran"
                    },
                    {
                      icon: "⚡",
                      title: "Efisien",
                      desc: "Mengoptimalkan waktu dan sumber daya"
                    },
                    {
                      icon: "🤝",
                      title: "Partisipatif",
                      desc: "Melibatkan masyarakat dalam pelayanan"
                    },
                    {
                      icon: "🔍",
                      title: "Transparan",
                      desc: "Terbuka dan dapat dipertanggungjawabkan"
                    },
                    {
                      icon: "⚖️",
                      title: "Adil",
                      desc: "Tidak diskriminatif dan objektif"
                    }
                  ].map((prinsip, index) => (
                    <div key={index} className="bg-gradient-primary/10 p-4 rounded-lg text-center">
                      <div className="text-3xl mb-2">{prinsip.icon}</div>
                      <h4 className="font-semibold text-government-blue mb-2">{prinsip.title}</h4>
                      <p className="text-sm text-muted-foreground">{prinsip.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-government-blue">
                  <span className="text-3xl">📈</span>
                  <span className="text-2xl font-bold">STANDAR KUALITAS</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-government-blue mb-2"> 30 Menit</div>
                    <p className="text-sm text-muted-foreground">Waktu Respons Layanan</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-education-green mb-2">99%</div>
                    <p className="text-sm text-muted-foreground">Target Kepuasan Layanan</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-accent-gold mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">Layanan Online</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
  );
};

export default VisiMisiPelayanan;