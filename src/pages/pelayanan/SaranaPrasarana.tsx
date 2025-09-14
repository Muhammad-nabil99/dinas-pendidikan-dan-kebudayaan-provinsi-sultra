import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SaranaPrasarana = () => {
  return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-government-blue mb-4">Sarana Prasarana</h1>
            <p className="text-muted-foreground text-lg">Data dan Kondisi Sarana Prasarana Pendidikan</p>
          </div>

          <div className="grid gap-6">
            {/* Statistik Umum */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: "Total Sekolah", nilai: "1,245", icon: "🏫", warna: "bg-government-blue" },
                { label: "Ruang Kelas", nilai: "8,756", icon: "🏛️", warna: "bg-education-green" },
                { label: "Laboratorium", nilai: "342", icon: "🔬", warna: "bg-accent-gold" },
                { label: "Perpustakaan", nilai: "987", icon: "📚", warna: "bg-purple-500" }
              ].map((stat, index) => (
                <Card key={index} className="shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold text-government-blue">[{stat.nilai}]</p>
                      </div>
                      <div className={`text-3xl p-3 rounded-lg ${stat.warna} text-white`}>
                        {stat.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Kondisi Sarana Prasarana */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📊</span>
                  Kondisi Sarana Prasarana
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { kategori: "Gedung Sekolah", baik: 85, sedang: 12, rusak: 3 },
                    { kategori: "Ruang Kelas", baik: 78, sedang: 18, rusak: 4 },
                    { kategori: "Sanitasi", baik: 72, sedang: 23, rusak: 5 }
                  ].map((kondisi, index) => (
                    <div key={index} className="space-y-4">
                      <h3 className="font-semibold text-government-blue">{kondisi.kategori}</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-muted-foreground">Baik</span>
                            <span className="text-sm font-medium text-education-green">{kondisi.baik}%</span>
                          </div>
                          <Progress value={kondisi.baik} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-muted-foreground">Sedang</span>
                            <span className="text-sm font-medium text-accent-gold">{kondisi.sedang}%</span>
                          </div>
                          <Progress value={kondisi.sedang} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-muted-foreground">Rusak</span>
                            <span className="text-sm font-medium text-red-500">{kondisi.rusak}%</span>
                          </div>
                          <Progress value={kondisi.rusak} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detail per Jenjang */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">🎓</span>
                    Pendidikan Dasar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { jenis: "SD/MI", jumlah: "856 sekolah", kondisi: "Baik: 82%" },
                      { jenis: "SMP/MTs", jumlah: "245 sekolah", kondisi: "Baik: 79%" },
                      { jenis: "SLB", jumlah: "12 sekolah", kondisi: "Baik: 75%" }
                    ].map((item, index) => (
                      <div key={index} className="p-4 bg-muted/30 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-government-blue">{item.jenis}</h4>
                            <p className="text-sm text-muted-foreground">[Template - {item.jumlah}]</p>
                          </div>
                          <Badge variant="secondary">{item.kondisi}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">🏫</span>
                    Pendidikan Menengah
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { jenis: "SMA/MA", jumlah: "89 sekolah", kondisi: "Baik: 88%" },
                      { jenis: "SMK", jumlah: "67 sekolah", kondisi: "Baik: 85%" },
                      { jenis: "Paket C", jumlah: "23 lembaga", kondisi: "Baik: 70%" }
                    ].map((item, index) => (
                      <div key={index} className="p-4 bg-muted/30 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-government-blue">{item.jenis}</h4>
                            <p className="text-sm text-muted-foreground">[Template - {item.jumlah}]</p>
                          </div>
                          <Badge variant="secondary">{item.kondisi}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fasilitas Penunjang */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">🔧</span>
                  Fasilitas Penunjang
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    {
                      icon: "🔬",
                      nama: "Laboratorium",
                      detail: [
                        "Lab. IPA: 156 unit",
                        "Lab. Komputer: 89 unit",
                        "Lab. Bahasa: 34 unit"
                      ]
                    },
                    {
                      icon: "📚",
                      nama: "Perpustakaan",
                      detail: [
                        "Perpustakaan: 987 unit",
                        "Koleksi Buku: 2.3M",
                        "Digital: 156 sekolah"
                      ]
                    },
                    {
                      icon: "⚽",
                      nama: "Olahraga",
                      detail: [
                        "Lapangan: 445 unit",
                        "GOR: 23 unit",
                        "Kolam Renang: 8 unit"
                      ]
                    },
                    {
                      icon: "🍽️",
                      nama: "Kantin",
                      detail: [
                        "Kantin Sehat: 678 unit",
                        "Dapur: 234 unit",
                        "Koperasi: 345 unit"
                      ]
                    }
                  ].map((fasilitas, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl mb-3">{fasilitas.icon}</div>
                      <h3 className="font-semibold text-government-blue mb-3">{fasilitas.nama}</h3>
                      <div className="space-y-1">
                        {fasilitas.detail.map((item, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            [Template - {item}]
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Program Perbaikan */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">🚧</span>
                  Program Perbaikan & Pembangunan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-government-blue mb-4">Program Tahun Ini</h3>
                    <div className="space-y-3">
                      {[
                        { program: "Rehabilitasi Gedung Sekolah", target: "150 unit", progress: 75 },
                        { program: "Pembangunan RKB Baru", target: "45 unit", progress: 60 },
                        { program: "Pembangunan Toilet", target: "200 unit", progress: 85 },
                        { program: "Perbaikan Atap", target: "300 unit", progress: 90 }
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">[Template - {item.program}]</span>
                            <span className="text-sm text-muted-foreground">{item.progress}%</span>
                          </div>
                          <Progress value={item.progress} className="h-2" />
                          <p className="text-xs text-muted-foreground">Target: {item.target}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-government-blue mb-4">Rencana Mendatang</h3>
                    <div className="space-y-3">
                      {[
                        "Digitalisasi perpustakaan seluruh sekolah",
                        "Pembangunan laboratorium komputer modern",
                        "Peningkatan fasilitas olahraga",
                        "Program sekolah ramah lingkungan"
                      ].map((rencana, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-education-green mt-1">•</span>
                          <span className="text-sm text-muted-foreground">[Template - {rencana}]</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
  );
};

export default SaranaPrasarana;