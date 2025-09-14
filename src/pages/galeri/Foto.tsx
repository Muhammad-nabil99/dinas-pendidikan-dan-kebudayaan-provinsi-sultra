import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Foto = () => {
  return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-government-blue mb-4">Galeri Foto</h1>
            <p className="text-muted-foreground text-lg">Dokumentasi Kegiatan Dinas Pendidikan Sulawesi Tenggara</p>
          </div>

          <div className="grid gap-6">
            {/* Filter & Kategori */}
            <Card className="shadow-elegant">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="default" size="sm">Semua Foto</Button>
                  <Button variant="outline" size="sm">Kegiatan Resmi</Button>
                  <Button variant="outline" size="sm">Pendidikan</Button>
                  <Button variant="outline" size="sm">Pelatihan</Button>
                  <Button variant="outline" size="sm">Kunjungan</Button>
                  <Button variant="outline" size="sm">Upacara</Button>
                  <Button variant="outline" size="sm">Workshop</Button>
                </div>
              </CardContent>
            </Card>

            {/* Album Foto Terbaru */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  judul: "Rapat Koordinasi Kepala Sekolah",
                  tanggal: "15 September 2024",
                  lokasi: "Aula Dinas Pendidikan",
                  jumlahFoto: 25,
                  kategori: "Kegiatan Resmi"
                },
                {
                  judul: "Workshop Kurikulum Merdeka",
                  tanggal: "10 September 2024", 
                  lokasi: "Hotel Santika Kendari",
                  jumlahFoto: 40,
                  kategori: "Pelatihan"
                },
                {
                  judul: "Kunjungan Menteri Pendidikan",
                  tanggal: "5 September 2024",
                  lokasi: "SMAN 1 Kendari",
                  jumlahFoto: 35,
                  kategori: "Kunjungan"
                },
                {
                  judul: "Upacara HUT RI ke-79",
                  tanggal: "17 Agustus 2024",
                  lokasi: "Lapangan Kantor Gubernur",
                  jumlahFoto: 20,
                  kategori: "Upacara"
                },
                {
                  judul: "Sosialisasi Program Sekolah Penggerak",
                  tanggal: "12 Agustus 2024",
                  lokasi: "Gedung Serba Guna",
                  jumlahFoto: 30,
                  kategori: "Pendidikan"
                },
                {
                  judul: "Pelatihan Guru Digital",
                  tanggal: "8 Agustus 2024",
                  lokasi: "Lab Komputer Dinas",
                  jumlahFoto: 18,
                  kategori: "Pelatihan"
                }
              ].map((album, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="relative">
                    {/* Placeholder untuk foto utama */}
                    <div className="w-full h-48 bg-gradient-primary/20 rounded-t-lg flex items-center justify-center">
                      <div className="text-6xl text-government-blue/30">📸</div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-government-blue">{album.kategori}</Badge>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="secondary">{album.jumlahFoto} Foto</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-government-blue group-hover:text-education-green transition-colors">
                      [Template - {album.judul}]
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span>📅</span>
                        <span>{album.tanggal}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span>{album.lokasi}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-3 group-hover:bg-government-blue group-hover:text-white transition-colors">
                      Lihat Album
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Foto Pilihan */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">⭐</span>
                  Foto Pilihan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <div className="w-full h-32 bg-gradient-primary/20 rounded-lg flex items-center justify-center group-hover:bg-gradient-primary/30 transition-colors">
                        <div className="text-3xl text-government-blue/50">📸</div>
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <Button size="sm" variant="secondary">
                          Lihat
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Statistik Galeri */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: "Total Album", nilai: "156", icon: "📁", warna: "bg-government-blue" },
                { label: "Total Foto", nilai: "2,847", icon: "📸", warna: "bg-education-green" },
                { label: "Album Tahun Ini", nilai: "48", icon: "📅", warna: "bg-accent-gold" },
                { label: "Unduhan", nilai: "5,432", icon: "⬇️", warna: "bg-purple-500" }
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

            {/* Album Berdasarkan Tahun */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📅</span>
                  Album Berdasarkan Tahun
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { tahun: "2024", album: 48, foto: 856 },
                    { tahun: "2023", album: 52, foto: 934 },
                    { tahun: "2022", album: 35, foto: 672 },
                    { tahun: "2021", album: 21, foto: 385 }
                  ].map((data, index) => (
                    <div key={index} className="p-4 bg-gradient-primary/5 rounded-lg text-center cursor-pointer hover:bg-gradient-primary/10 transition-colors">
                      <h3 className="text-2xl font-bold text-government-blue mb-2">{data.tahun}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>{data.album} Album</p>
                        <p>{data.foto} Foto</p>
                      </div>
                      <Button size="sm" variant="outline" className="mt-2">
                        Jelajahi
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cara Download & Penggunaan */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">⬇️</span>
                    Cara Download Foto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Klik album atau foto yang diinginkan",
                      "Pilih resolusi foto (HD/Standard)",
                      "Klik tombol 'Download'",
                      "Tunggu proses download selesai"
                    ].map((langkah, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-government-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-sm text-muted-foreground">[Template - {langkah}]</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">📋</span>
                    Ketentuan Penggunaan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <span className="text-education-green">•</span>
                      <span>Foto dapat digunakan untuk kepentingan non-komersial</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-education-green">•</span>
                      <span>Wajib mencantumkan kredit "Dinas Pendidikan Sulteng"</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-education-green">•</span>
                      <span>Tidak diperkenankan mengedit atau memodifikasi</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-education-green">•</span>
                      <span>Penggunaan komersial harus seizin dinas</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full mt-4">
                    Baca Ketentuan Lengkap
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Upload & Kontribusi */}
            <Card className="shadow-elegant bg-gradient-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📤</span>
                  Kontribusi Foto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Punya foto kegiatan Dinas Pendidikan? Bagikan dengan kami!
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg">
                      <div className="text-2xl mb-2">📧</div>
                      <h4 className="font-semibold text-government-blue mb-1">Email</h4>
                      <p className="text-sm text-muted-foreground">[Template - foto@disdik.sulteng.go.id]</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <div className="text-2xl mb-2">💬</div>
                      <h4 className="font-semibold text-government-blue mb-1">WhatsApp</h4>
                      <p className="text-sm text-muted-foreground">[Template - +62 xxx-xxxx-xxxx]</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <div className="text-2xl mb-2">📱</div>
                      <h4 className="font-semibold text-government-blue mb-1">Upload Online</h4>
                      <p className="text-sm text-muted-foreground">[Template - Form Upload]</p>
                    </div>
                  </div>
                  <Button className="bg-government-blue hover:bg-government-blue/90">
                    Kirim Foto Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
  );
};

export default Foto;