import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const StandarPelayanan = () => {
  return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-government-blue mb-4">Standar Pelayanan Publik</h1>
            <p className="text-muted-foreground text-lg">Komitmen Kualitas Pelayanan untuk Masyarakat</p>
          </div>

          <div className="grid gap-6">
            {/* Prinsip Pelayanan */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">⭐</span>
                  Prinsip Dasar Pelayanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: "🎯",
                      title: "Tepat Sasaran",
                      desc: "Pelayanan yang sesuai dengan kebutuhan dan tepat waktu"
                    },
                    {
                      icon: "🔍",
                      title: "Transparan",
                      desc: "Informasi yang jelas dan dapat diakses oleh semua pihak"
                    },
                    {
                      icon: "⚖️",
                      title: "Adil",
                      desc: "Tidak diskriminatif dan memberikan perlakuan yang sama"
                    },
                    {
                      icon: "🤝",
                      title: "Responsif",
                      desc: "Tanggap terhadap keluhan dan saran masyarakat"
                    },
                    {
                      icon: "📊",
                      title: "Akuntabel",
                      desc: "Dapat dipertanggungjawabkan secara hukum dan moral"
                    },
                    {
                      icon: "🚀",
                      title: "Inovatif",
                      desc: "Mengembangkan cara-cara baru untuk meningkatkan kualitas"
                    }
                  ].map((prinsip, index) => (
                    <div key={index} className="text-center p-4 bg-gradient-primary/5 rounded-lg">
                      <div className="text-3xl mb-3">{prinsip.icon}</div>
                      <h3 className="font-semibold text-government-blue mb-2">{prinsip.title}</h3>
                      <p className="text-sm text-muted-foreground">[Template - {prinsip.desc}]</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Standar Waktu Pelayanan */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">⏱️</span>
                  Standar Waktu Pelayanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      layanan: "Surat Rekomendasi",
                      waktu: "3 Hari Kerja",
                      kategori: "Cepat",
                      detail: "Penerbitan surat rekomendasi untuk berbagai keperluan"
                    },
                    {
                      layanan: "Legalisir Dokumen",
                      waktu: "1 Hari Kerja",
                      kategori: "Sangat Cepat",
                      detail: "Legalisir dokumen pendidikan dan sertifikat"
                    },
                    {
                      layanan: "Data dan Informasi",
                      waktu: "5 Hari Kerja",
                      kategori: "Normal",
                      detail: "Permintaan data statistik dan informasi pendidikan"
                    },
                    {
                      layanan: "Pengaduan Masyarakat",
                      waktu: "7 Hari Kerja",
                      kategori: "Normal",
                      detail: "Penanganan pengaduan dan keluhan masyarakat"
                    },
                    {
                      layanan: "Sertifikasi Lembaga",
                      waktu: "21 Hari Kerja",
                      kategori: "Standar",
                      detail: "Proses sertifikasi untuk lembaga pendidikan"
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-government-blue">{item.layanan}</h3>
                          <p className="text-sm text-muted-foreground">[Template - {item.detail}]</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-education-green">{item.waktu}</div>
                          <Badge 
                            variant={item.kategori === "Sangat Cepat" ? "default" : 
                                   item.kategori === "Cepat" ? "secondary" : "outline"}
                          >
                            {item.kategori}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Standar Biaya */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">💰</span>
                  Standar Biaya Pelayanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-government-blue mb-4">Layanan Gratis</h3>
                    <div className="space-y-2">
                      {[
                        "Konsultasi pendidikan",
                        "Informasi data pendidikan",
                        "Pengaduan masyarakat",
                        "Layanan online"
                      ].map((layanan, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-education-green">✓</span>
                          <span className="text-sm text-muted-foreground">[Template - {layanan}]</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-government-blue mb-4">Layanan Berbayar</h3>
                    <div className="space-y-2">
                      {[
                        { layanan: "Legalisir dokumen", biaya: "Rp 5.000/dokumen" },
                        { layanan: "Fotocopy berlegalisir", biaya: "Rp 2.000/lembar" },
                        { layanan: "Sertifikat kursus", biaya: "Sesuai PNBP" }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">[Template - {item.layanan}]</span>
                          <span className="text-sm font-medium text-government-blue">{item.biaya}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mekanisme Pengaduan */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📢</span>
                  Mekanisme Pengaduan dan Saran
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    {
                      step: "1",
                      title: "Sampaikan Pengaduan",
                      desc: "Melalui website, telepon, atau datang langsung"
                    },
                    {
                      step: "2", 
                      title: "Registrasi",
                      desc: "Pengaduan akan didaftarkan dan diberi nomor tiket"
                    },
                    {
                      step: "3",
                      title: "Proses",
                      desc: "Tim akan memproses dan menindaklanjuti pengaduan"
                    },
                    {
                      step: "4",
                      title: "Feedback",
                      desc: "Hasil penanganan akan disampaikan kepada pengadu"
                    }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-government-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-3">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-government-blue mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">[Template - {item.desc}]</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Indikator Kinerja */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">📈</span>
                    Indikator Kinerja Pelayanan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { indikator: "Kepuasan Masyarakat", target: "≥ 85%", capaian: "87.5%" },
                      { indikator: "Ketepatan Waktu", target: "≥ 90%", capaian: "92.3%" },
                      { indikator: "Penyelesaian Pengaduan", target: "≥ 95%", capaian: "96.8%" },
                      { indikator: "Respon Rate Online", target: "≥ 80%", capaian: "83.2%" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <div>
                          <h4 className="font-medium text-government-blue">{item.indikator}</h4>
                          <p className="text-sm text-muted-foreground">Target: {item.target}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-education-green">{item.capaian}</div>
                          <Badge variant="default">Tercapai</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">📞</span>
                    Kontak Pelayanan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-primary/5 rounded-lg">
                      <h4 className="font-semibold text-government-blue mb-2">Hotline Pelayanan</h4>
                      <p className="text-lg font-bold text-education-green">[Template - (0401) 123-4567]</p>
                      <p className="text-sm text-muted-foreground">24 Jam - 7 Hari Seminggu</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span>📧</span>
                        <span className="text-sm">[Template - pengaduan@disdik.sulteng.go.id]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>💬</span>
                        <span className="text-sm">[Template - WhatsApp: +62 xxx-xxxx-xxxx]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🌐</span>
                        <span className="text-sm">[Template - www.disdik.sulteng.go.id]</span>
                      </div>
                    </div>
                    <Button className="w-full bg-government-blue hover:bg-government-blue/90 mt-4">
                      Sampaikan Pengaduan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
  );
};

export default StandarPelayanan;