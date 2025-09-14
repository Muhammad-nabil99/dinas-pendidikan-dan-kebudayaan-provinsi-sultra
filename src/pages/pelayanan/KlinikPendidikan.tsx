import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const KlinikPendidikan = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-government-blue mb-4">
            Klinik Pendidikan
          </h1>
          <p className="text-muted-foreground text-lg">
            Layanan Konsultasi dan Bimbingan Pendidikan
          </p>
        </div>

        <div className="grid gap-6">
          {/* Layanan Utama */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "👨‍🏫",
                title: "Konsultasi Kurikulum",
                desc: "Bimbingan pengembangan dan implementasi kurikulum",
                layanan: [
                  "Analisis kurikulum",
                  "Pelatihan guru",
                  "Evaluasi pembelajaran",
                ],
              },
              {
                icon: "📊",
                title: "Asesmen Pendidikan",
                desc: "Evaluasi dan penilaian kualitas pendidikan",
                layanan: [
                  "Asesmen sekolah",
                  "Analisis hasil belajar",
                  "Pemetaan mutu",
                ],
              },
              {
                icon: "🎯",
                title: "Pengembangan Sekolah",
                desc: "Konsultasi peningkatan kualitas satuan pendidikan",
                layanan: [
                  "Rencana strategis",
                  "Akreditasi sekolah",
                  "Manajemen sekolah",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="shadow-elegant hover:shadow-lg transition-shadow"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <CardTitle className="text-government-blue">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    [Template - {service.desc}]
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.layanan.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <span className="text-education-green">•</span>
                        <span className="text-sm text-muted-foreground">
                          [Template - {item}]
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Konsultasi Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Program Unggulan */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-government-blue">
                <span className="text-2xl">⭐</span>
                Program Unggulan Klinik Pendidikan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    nama: "Sekolah Penggerak Mentoring",
                    deskripsi:
                      "Program pendampingan implementasi sekolah penggerak",
                    durasi: "6 Bulan",
                    peserta: "250 Sekolah",
                    status: "Berlangsung",
                  },
                  {
                    nama: "Guru Inovator Workshop",
                    deskripsi: "Pelatihan pengembangan inovasi pembelajaran",
                    durasi: "3 Bulan",
                    peserta: "500 Guru",
                    status: "Berlangsung",
                  },
                  {
                    nama: "Digital Literacy Coaching",
                    deskripsi: "Bimbingan literasi digital untuk pendidik",
                    durasi: "2 Bulan",
                    peserta: "1000 Pendidik",
                    status: "Pendaftaran",
                  },
                  {
                    nama: "School Leadership Academy",
                    deskripsi:
                      "Program pengembangan kepemimpinan kepala sekolah",
                    durasi: "4 Bulan",
                    peserta: "150 Kepsek",
                    status: "Perencanaan",
                  },
                ].map((program, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-government-blue">
                        [Template - {program.nama}]
                      </h3>
                      <Badge
                        variant={
                          program.status === "Berlangsung"
                            ? "default"
                            : program.status === "Pendaftaran"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {program.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      [Template - {program.deskripsi}]
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Durasi: </span>
                        <span className="font-medium">{program.durasi}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Peserta: </span>
                        <span className="font-medium">{program.peserta}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tim Ahli */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-government-blue">
                <span className="text-2xl">👥</span>
                Tim Ahli Klinik Pendidikan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    nama: "Dr. Ahmad Wijaya, M.Pd",
                    bidang: "Kurikulum & Pembelajaran",
                    pengalaman: "15 Tahun",
                    spesialisasi: "Kurikulum Merdeka",
                  },
                  {
                    nama: "Prof. Siti Nurhaliza, Ph.D",
                    bidang: "Asesmen Pendidikan",
                    pengalaman: "20 Tahun",
                    spesialisasi: "Evaluasi Pembelajaran",
                  },
                  {
                    nama: "Dr. Budi Santoso, M.M",
                    bidang: "Manajemen Pendidikan",
                    pengalaman: "18 Tahun",
                    spesialisasi: "Kepemimpinan Sekolah",
                  },
                  {
                    nama: "Dr. Maria Indira, M.Pd",
                    bidang: "Teknologi Pendidikan",
                    pengalaman: "12 Tahun",
                    spesialisasi: "Digital Learning",
                  },
                ].map((ahli, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-primary/5 rounded-lg"
                  >
                    <div className="w-16 h-16 bg-government-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                      {ahli.nama.charAt(0)}
                    </div>
                    <h3 className="font-semibold text-government-blue mb-1">
                      [Template - {ahli.nama}]
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {ahli.bidang}
                    </p>
                    <p className="text-xs text-education-green">
                      Pengalaman: {ahli.pengalaman}
                    </p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {ahli.spesialisasi}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Jadwal Konsultasi */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📅</span>
                  Jadwal Konsultasi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-government-blue mb-2">
                      Konsultasi Rutin
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Senin - Kamis</span>
                        <span>08:00 - 15:00 WIB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Jumat</span>
                        <span>08:00 - 11:00 WIB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sabtu</span>
                        <span>08:00 - 12:00 WIB</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-education-green/10 rounded-lg">
                    <h4 className="font-semibold text-education-green mb-2">
                      Konsultasi Online
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      24/7 melalui platform digital
                    </p>
                    <Button
                      size="sm"
                      className="mt-2 bg-education-green hover:bg-education-green/90"
                    >
                      Akses Platform
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📝</span>
                  Cara Mendaftar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      step: "1",
                      desc: "Isi formulir pendaftaran online atau offline",
                    },
                    {
                      step: "2",
                      desc: "Pilih jenis konsultasi dan jadwal yang tersedia",
                    },
                    {
                      step: "3",
                      desc: "Upload dokumen pendukung (jika diperlukan)",
                    },
                    { step: "4", desc: "Konfirmasi jadwal melalui email/SMS" },
                    { step: "5", desc: "Hadiri sesi konsultasi sesuai jadwal" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-government-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        [Template - {item.desc}]
                      </span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-government-blue hover:bg-government-blue/90">
                  Daftar Konsultasi
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Statistik & Testimoni */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📊</span>
                  Statistik Layanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      label: "Total Konsultasi",
                      nilai: "2,450",
                      periode: "2024",
                    },
                    {
                      label: "Sekolah Terlayani",
                      nilai: "587",
                      periode: "Aktif",
                    },
                    {
                      label: "Kepuasan Klien",
                      nilai: "96.5%",
                      periode: "Rating",
                    },
                    {
                      label: "Follow-up Rate",
                      nilai: "94.2%",
                      periode: "Success",
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-3 bg-muted/30 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-government-blue">
                        [{stat.nilai}]
                      </div>
                      <p className="text-sm font-medium">{stat.label}</p>
                      <p className="text-xs text-muted-foreground">
                        {stat.periode}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">💬</span>
                  Testimoni
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      nama: "Kepala SMAN 1 Kendari",
                      testimoni:
                        "Konsultasi sangat membantu dalam implementasi kurikulum merdeka di sekolah kami.",
                    },
                    {
                      nama: "Guru SDN 10 Konawe",
                      testimoni:
                        "Program pelatihan yang diberikan sangat praktis dan langsung bisa diterapkan.",
                    },
                  ].map((testi, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gradient-primary/5 rounded-lg"
                    >
                      <p className="text-sm text-muted-foreground italic mb-2">
                        "[Template - {testi.testimoni}]"
                      </p>
                      <p className="text-xs font-medium text-government-blue">
                        - {testi.nama}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Kontak */}
          <Card className="shadow-elegant bg-gradient-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-government-blue">
                <span className="text-2xl">📞</span>
                Hubungi Klinik Pendidikan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">📧</div>
                  <h3 className="font-semibold text-government-blue mb-1">
                    Email
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    [Template - klinik@disdik.sulteng.go.id]
                  </p>
                </div>
                <div>
                  <div className="text-2xl mb-2">📱</div>
                  <h3 className="font-semibold text-government-blue mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    [Template - +62 xxx-xxxx-xxxx]
                  </p>
                </div>
                <div>
                  <div className="text-2xl mb-2">🌐</div>
                  <h3 className="font-semibold text-government-blue mb-1">
                    Website
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    [Template - klinik.disdik.sulteng.go.id]
                  </p>
                </div>
                <div>
                  <div className="text-2xl mb-2">📍</div>
                  <h3 className="font-semibold text-government-blue mb-1">
                    Lokasi
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    [Template - Gedung Dinas Lt. 3]
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

export default KlinikPendidikan;
