import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Prestasi = () => {
  return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-government-blue mb-4">Prestasi Kinerja Layanan</h1>
            <p className="text-muted-foreground text-lg">Capaian dan Pencapaian Dinas Pendidikan Sulawesi Tenggara</p>
          </div>

          <div className="grid gap-6">
            {/* Highlights Prestasi */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏆",
                  title: "Juara 1 Nasional",
                  subtitle: "Inovasi Pelayanan Publik",
                  tahun: "2024",
                  kategori: "Penghargaan"
                },
                {
                  icon: "⭐",
                  title: "Akreditasi A",
                  subtitle: "Pelayanan Prima",
                  tahun: "2024",
                  kategori: "Sertifikasi"
                },
                {
                  icon: "📊",
                  title: "97.5%",
                  subtitle: "Indeks Kepuasan Masyarakat",
                  tahun: "2024",
                  kategori: "Survei"
                }
              ].map((highlight, index) => (
                <Card key={index} className="shadow-elegant border-l-4 border-government-blue">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{highlight.icon}</div>
                    <h3 className="text-xl font-bold text-government-blue mb-1">{highlight.title}</h3>
                    <p className="text-muted-foreground mb-2">{highlight.subtitle}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">{highlight.kategori}</Badge>
                      <Badge className="bg-education-green">{highlight.tahun}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Indikator Kinerja Utama */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📈</span>
                  Indikator Kinerja Utama (IKU) 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      indikator: "Angka Partisipasi Sekolah",
                      target: "95%",
                      capaian: "97.2%",
                      progress: 97
                    },
                    {
                      indikator: "Angka Putus Sekolah",
                      target: "< 2%",
                      capaian: "1.3%",
                      progress: 100
                    },
                    {
                      indikator: "Guru Bersertifikat",
                      target: "85%",
                      capaian: "88.7%",
                      progress: 89
                    },
                    {
                      indikator: "Sekolah Berakreditasi",
                      target: "90%",
                      capaian: "92.1%",
                      progress: 92
                    },
                    {
                      indikator: "Kepuasan Layanan",
                      target: "85%",
                      capaian: "97.5%",
                      progress: 98
                    },
                    {
                      indikator: "Waktu Pelayanan",
                      target: "7 Hari",
                      capaian: "4.2 Hari",
                      progress: 95
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-gradient-primary/5 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-government-blue">{item.indikator}</h4>
                        <Badge 
                          className={item.progress >= 95 ? "bg-education-green" : 
                                   item.progress >= 80 ? "bg-accent-gold" : "bg-red-500"}
                        >
                          {item.progress >= 95 ? "Sangat Baik" : 
                           item.progress >= 80 ? "Baik" : "Perlu Perbaikan"}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Target</p>
                          <p className="font-bold text-government-blue">{item.target}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Capaian</p>
                          <p className="font-bold text-education-green">[Template - {item.capaian}]</p>
                        </div>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Penghargaan & Sertifikasi */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">🏅</span>
                  Penghargaan & Sertifikasi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      tahun: "2024",
                      penghargaan: "Juara 1 Kompetisi Inovasi Pelayanan Publik Nasional",
                      pemberi: "Kementerian PANRB",
                      kategori: "Nasional"
                    },
                    {
                      tahun: "2024",
                      penghargaan: "Sertifikat ISO 9001:2015 - Sistem Manajemen Mutu",
                      pemberi: "Badan Sertifikasi Internasional",
                      kategori: "Internasional"
                    },
                    {
                      tahun: "2023",
                      penghargaan: "Top 99 Inovasi Pelayanan Publik Indonesia",
                      pemberi: "Kementerian PANRB",
                      kategori: "Nasional"
                    },
                    {
                      tahun: "2023",
                      penghargaan: "Satya Lencana Pendidikan",
                      pemberi: "Presiden Republik Indonesia",
                      kategori: "Nasional"
                    },
                    {
                      tahun: "2022",
                      penghargaan: "Juara 2 Lomba Inovasi Daerah",
                      pemberi: "Provinsi Sulawesi Tenggara",
                      kategori: "Provinsi"
                    }
                  ].map((award, index) => (
                    <div key={index} className="p-4 border-l-4 border-education-green bg-muted/30 rounded-r-lg">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{award.tahun}</Badge>
                            <Badge 
                              className={
                                award.kategori === "Internasional" ? "bg-purple-500" :
                                award.kategori === "Nasional" ? "bg-education-green" :
                                "bg-accent-gold"
                              }
                            >
                              {award.kategori}
                            </Badge>
                          </div>
                          <h4 className="font-semibold text-government-blue mb-1">
                            [Template - {award.penghargaan}]
                          </h4>
                          <p className="text-sm text-muted-foreground">Pemberi: {award.pemberi}</p>
                        </div>
                        <div className="text-3xl">🏆</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Inovasi Pelayanan */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">💡</span>
                  Inovasi Pelayanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      nama: "SIAP DISDIK",
                      deskripsi: "Sistem Informasi Administrasi Pendidikan Digital",
                      dampak: "Efisiensi waktu 70%, paperless 90%",
                      status: "Aktif"
                    },
                    {
                      nama: "E-SERTIFIKAT",
                      deskripsi: "Sistem Sertifikat Digital Anti Pemalsuan",
                      dampak: "Verifikasi instan, keamanan 99.9%",
                      status: "Aktif"
                    },
                    {
                      nama: "MOBILE PENGADUAN",
                      deskripsi: "Aplikasi Mobile untuk Pengaduan Masyarakat",
                      dampak: "Respon 2x lebih cepat",
                      status: "Aktif"
                    },
                    {
                      nama: "DATA ANALYTICS DASHBOARD",
                      deskripsi: "Dashboard Real-time Data Pendidikan",
                      dampak: "Pengambilan keputusan berbasis data",
                      status: "Beta"
                    }
                  ].map((inovasi, index) => (
                    <div key={index} className="p-4 bg-gradient-primary/5 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-government-blue">{inovasi.nama}</h4>
                        <Badge 
                          variant={inovasi.status === "Aktif" ? "default" : "secondary"}
                        >
                          {inovasi.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        [Template - {inovasi.deskripsi}]
                      </p>
                      <div className="bg-white p-2 rounded border-l-2 border-education-green">
                        <p className="text-xs text-education-green font-medium">
                          💡 {inovasi.dampak}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tren Kinerja */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">📊</span>
                    Tren Kinerja 5 Tahun
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { tahun: "2020", skor: 75 },
                      { tahun: "2021", skor: 80 },
                      { tahun: "2022", skor: 85 },
                      { tahun: "2023", skor: 92 },
                      { tahun: "2024", skor: 97 }
                    ].map((data, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 text-sm font-medium text-government-blue">{data.tahun}</div>
                        <Progress value={data.skor} className="flex-1 h-3" />
                        <div className="w-12 text-sm font-bold text-education-green">{data.skor}%</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-gradient-primary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      📈 Peningkatan rata-rata: <span className="font-bold text-education-green">5.5% per tahun</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">🎯</span>
                    Target Masa Depan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      "Mencapai 100% digitalisasi pelayanan pada 2025",
                      "Meraih sertifikasi ISO 27001 untuk keamanan informasi",
                      "Implementasi AI untuk prediksi kebutuhan pendidikan",
                      "Zero paper policy untuk semua layanan",
                      "Integrasi dengan 100% sekolah di Sulawesi Tenggara"
                    ].map((target, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-government-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-sm text-muted-foreground flex-1">
                          [Template - {target}]
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
  );
};

export default Prestasi;