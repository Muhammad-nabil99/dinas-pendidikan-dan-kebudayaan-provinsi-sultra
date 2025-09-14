import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VisiMisi = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-government-blue mb-4">
            Visi & Misi
          </h1>
          <p className="text-muted-foreground text-lg">
            Komitmen Kami untuk Pendidikan Berkualitas
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="shadow-elegant border-l-4 border-government-blue">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-government-blue">
                <span className="text-3xl">👁️</span>
                <span className="text-2xl font-bold">VISI</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-primary/10 p-6 rounded-lg">
                <p className="text-lg text-center font-medium leading-relaxed text-government-blue">
                  "[Template - Isi dengan visi Dinas Pendidikan Sulawesi
                  Tenggara yang menginspirasi dan jelas]"
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-l-4 border-education-green">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-government-blue">
                <span className="text-3xl">🎯</span>
                <span className="text-2xl font-bold">MISI</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="bg-education-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {index}
                    </div>
                    <p className="text-muted-foreground flex-1">
                      [Template - Misi {index}: Isi dengan poin misi yang
                      spesifik dan terukur]
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
                <span className="text-2xl font-bold">NILAI-NILAI</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Integritas",
                    desc: "Bekerja dengan jujur dan dapat dipercaya",
                  },
                  {
                    title: "Profesional",
                    desc: "Melaksanakan tugas dengan kompeten",
                  },
                  { title: "Inovasi", desc: "Mengembangkan solusi kreatif" },
                  {
                    title: "Kolaborasi",
                    desc: "Bekerja sama untuk hasil terbaik",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-gradient-primary/10 p-4 rounded-lg text-center"
                  >
                    <h4 className="font-semibold text-government-blue mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default VisiMisi;
