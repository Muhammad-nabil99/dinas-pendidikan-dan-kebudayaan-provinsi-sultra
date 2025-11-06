import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProfilCard = () => {
  return (
    <div className="grid gap-6">
      {/* Tentang PPID */}
      <Card className="shadow-elegant border-l-4 border-government-blue">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-government-blue">
            <span className="text-2xl">ℹ️</span>
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
                PPID adalah pejabat yang bertanggung jawab di bidang penyimpanan pendokumentasian, penyediaan, dan/atau
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
                "Mewujudkan pelayanan informasi publik yang transparan, akuntabel, dan berkualitas."
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
            <span className="text-2xl">👤</span>
            Struktur PPID
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center p-4 bg-government-blue/10 rounded-lg">
              <h4 className="font-semibold text-government-blue">
                PPID Utama
              </h4>
              <p className="text-sm text-muted-foreground">
                [Template - Nama Kepala Dinas]
              </p>
              <p className="text-xs text-muted-foreground">
                Kepala Dinas Pendidikan
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center p-3 bg-education-green/10 rounded-lg">
                <h5 className="font-medium text-education-green">
                  PPID Pembantu
                </h5>
                <p className="text-sm text-muted-foreground">
                  [Template - Nama Sekretaris]
                </p>
                <p className="text-xs text-muted-foreground">
                  Sekretaris Dinas
                </p>
              </div>
              <div className="text-center p-3 bg-accent-gold/10 rounded-lg">
                <h5 className="font-medium text-accent-gold">
                  PPID Pelaksana
                </h5>
                <p className="text-sm text-muted-foreground">
                  [Template - Nama Kepala Bagian]
                </p>
                <p className="text-xs text-muted-foreground">
                  Kabag Program
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Kontak PPID */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-government-blue">
            <span className="text-2xl">📞</span>
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
                  <span>📧</span>
                  <span>[Template - ppid@disdik.sulteng.go.id]</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span>[Template - +62 xxx-xxxx-xxxx]</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🌐</span>
                  <span>[Template - ppid.disdik.sulteng.go.id]</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
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
                <p className="text-xs text-muted-foreground mt-2">
                  *Layanan online 24 jam
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilCard;
