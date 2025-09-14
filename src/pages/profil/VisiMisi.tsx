import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const misi: string[] = [
  "Meningkatkan kualitas hidup masyarakat agar dapat berdaulat dan aman dalam bidang ekonomi, pangan, pendidikan, kesehatan, lingkungan, politik, serta iman dan taqwa",
  "Memajukan daya saing wilayah melalui penguatan ekonomi lokal dan peningkatan investasi.",
  "Mendorong birokrasi pemerintahan provinsi yang moderen, tata kelola pemerintahan desa yang baik",
  "Meningkatkan konektivitas dan kemitraan antar pemerintah, swasta dan masyarakat dalam rangka peningkatan daya saing daerah melalui pembangunan dan perbaikan infrastruktur dan aspek-aspek sosial ekonomi",
];

const VisiMisi = () => {
  return (
    <main className="container mx-auto px-4 py-8 pt-24">
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

          <Card className="shadow-elegant border-l-4 border-accent-gold">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-government-blue">
                <span className="text-2xl font-bold">TUJUAN</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                "Meningkatkan Akses dan Kualitas Layanan Pendidikan dan
                Kebudaayaan"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default VisiMisi;
