import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MottoPelayanan = () => {
  return (
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-government-blue mb-4">Motto Pelayanan</h1>
            <p className="text-muted-foreground text-lg">Semangat Melayani dengan Sepenuh Hati</p>
          </div>

          <div className="grid gap-6">
            <Card className="shadow-elegant border-2 border-government-blue">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-6xl mb-6">🏆</div>
                  <h2 className="text-3xl font-bold text-government-blue mb-4">
                    "[MOTTO UTAMA PELAYANAN]"
                  </h2>
                  <p className="text-lg text-muted-foreground italic">
                    Template - Isi dengan motto pelayanan yang inspiratif dan mudah diingat
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "💫",
                  title: "PRIMA",
                  subtitle: "Pelayanan Terbaik",
                  desc: "Memberikan pelayanan dengan standar kualitas tertinggi untuk kepuasan masyarakat"
                },
                {
                  icon: "❤️",
                  title: "PEDULI",
                  subtitle: "Melayani dengan Hati",
                  desc: "Memahami dan merespon kebutuhan masyarakat dengan empati dan kepedulian"
                },
                {
                  icon: "🚀",
                  title: "PROFESIONAL",
                  subtitle: "Kompeten & Terpercaya",
                  desc: "Melaksanakan tugas dengan keahlian tinggi dan dapat dipertanggungjawabkan"
                }
              ].map((item, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <CardTitle className="text-government-blue">{item.title}</CardTitle>
                    <p className="text-sm text-education-green font-medium">{item.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">[Template - {item.desc}]</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📝</span>
                  Komitmen Pelayanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-government-blue">Untuk Masyarakat:</h3>
                    <ul className="space-y-2">
                      {[
                        "Memberikan informasi yang akurat dan terkini",
                        "Melayani dengan ramah dan sopan",
                        "Menyelesaikan urusan dengan cepat dan tepat",
                        "Tidak memungut biaya di luar ketentuan"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-education-green mt-1">✓</span>
                          <span className="text-sm text-muted-foreground">[Template - {item}]</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-government-blue">Untuk Organisasi:</h3>
                    <ul className="space-y-2">
                      {[
                        "Meningkatkan kualitas pelayanan berkelanjutan",
                        "Mengembangkan inovasi pelayanan",
                        "Menjaga nama baik institusi",
                        "Membangun kepercayaan masyarakat"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-education-green mt-1">✓</span>
                          <span className="text-sm text-muted-foreground">[Template - {item}]</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant bg-gradient-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">💡</span>
                  Slogan Pelayanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="bg-government-blue text-white p-6 rounded-lg">
                    <p className="text-xl font-bold">"[Template - Slogan Pelayanan yang Mudah Diingat]"</p>
                  </div>
                  <p className="text-muted-foreground italic">
                    Slogan yang mencerminkan dedikasi kami dalam memberikan pelayanan terbaik
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
  );
};

export default MottoPelayanan;