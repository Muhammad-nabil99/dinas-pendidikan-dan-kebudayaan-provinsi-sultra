import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PinjamRuang = () => {
  return (
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-government-blue mb-4">Pinjam Ruang & Agenda Kegiatan</h1>
            <p className="text-muted-foreground text-lg">Layanan Peminjaman Ruang dan Informasi Agenda</p>
          </div>

          <div className="grid gap-6">
            {/* Informasi Umum */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">🏢</span>
                    Ruang Tersedia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Aula Utama", kapasitas: "200 orang", fasilitas: "AC, Sound System, Proyektor" },
                      { name: "Ruang Rapat Besar", kapasitas: "50 orang", fasilitas: "AC, Proyektor, WiFi" },
                      { name: "Ruang Rapat Kecil", kapasitas: "20 orang", fasilitas: "AC, TV, WiFi" },
                      { name: "Ruang Seminar", kapasitas: "100 orang", fasilitas: "AC, Sound System" }
                    ].map((ruang, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-government-blue">{ruang.name}</h3>
                        <p className="text-sm text-muted-foreground">Kapasitas: {ruang.kapasitas}</p>
                        <p className="text-sm text-muted-foreground">Fasilitas: {ruang.fasilitas}</p>
                        <Badge variant="outline" className="mt-2">Tersedia</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">📋</span>
                    Syarat Peminjaman
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Mengajukan permohonan minimal H-7",
                      "Menyertakan surat permohonan resmi",
                      "Melampirkan proposal kegiatan",
                      "Menyertakan identitas penanggung jawab",
                      "Menandatangani surat pernyataan",
                      "Kegiatan tidak bertentangan dengan peraturan"
                    ].map((syarat, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-education-green mt-1">•</span>
                        <span className="text-sm text-muted-foreground">[Template - {syarat}]</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-government-blue hover:bg-government-blue/90">
                    Download Formulir Peminjaman
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Prosedur Peminjaman */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">⚙️</span>
                  Prosedur Peminjaman
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { step: "1", title: "Pengajuan", desc: "Ajukan permohonan dengan melengkapi dokumen" },
                    { step: "2", title: "Verifikasi", desc: "Tim akan memverifikasi kelengkapan dokumen" },
                    { step: "3", title: "Persetujuan", desc: "Menunggu persetujuan dari pimpinan" },
                    { step: "4", title: "Konfirmasi", desc: "Konfirmasi jadwal dan penandatanganan" }
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

            {/* Agenda Kegiatan */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📅</span>
                  Agenda Kegiatan Bulan Ini
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      tanggal: "15 September 2024", 
                      kegiatan: "Rapat Koordinasi Kepala Sekolah",
                      waktu: "09:00 - 12:00 WIB",
                      tempat: "Aula Utama",
                      status: "Terjadwal"
                    },
                    { 
                      tanggal: "20 September 2024", 
                      kegiatan: "Workshop Kurikulum Merdeka",
                      waktu: "08:00 - 16:00 WIB",
                      tempat: "Ruang Seminar",
                      status: "Terjadwal"
                    },
                    { 
                      tanggal: "25 September 2024", 
                      kegiatan: "Sosialisasi Program Pendidikan",
                      waktu: "13:00 - 15:00 WIB",
                      tempat: "Ruang Rapat Besar",
                      status: "Tersedia"
                    }
                  ].map((agenda, index) => (
                    <div key={index} className="p-4 border-l-4 border-government-blue bg-muted/30 rounded-r-lg">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-government-blue">[Template - {agenda.kegiatan}]</h3>
                          <div className="grid md:grid-cols-3 gap-2 mt-2 text-sm text-muted-foreground">
                            <span>📅 {agenda.tanggal}</span>
                            <span>⏰ {agenda.waktu}</span>
                            <span>📍 {agenda.tempat}</span>
                          </div>
                        </div>
                        <Badge 
                          variant={agenda.status === "Terjadwal" ? "default" : "secondary"}
                          className="ml-4"
                        >
                          {agenda.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Button variant="outline" className="border-government-blue text-government-blue hover:bg-government-blue hover:text-white">
                    Lihat Semua Agenda
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Kontak */}
            <Card className="shadow-elegant bg-gradient-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📞</span>
                  Informasi & Kontak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📧</div>
                    <h3 className="font-semibold text-government-blue mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">[Template - email@disdik.sulteng.go.id]</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">📱</div>
                    <h3 className="font-semibold text-government-blue mb-1">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">[Template - +62 xxx-xxxx-xxxx]</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">⏰</div>
                    <h3 className="font-semibold text-government-blue mb-1">Jam Layanan</h3>
                    <p className="text-sm text-muted-foreground">Senin - Jumat<br/>08:00 - 16:00 WIB</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
  );
};

export default PinjamRuang;