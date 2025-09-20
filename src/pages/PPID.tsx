import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, ArrowLeft, Clock, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const PPID = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section
          className="relative py-20 text-white bg-cover bg-center"
          style={{ backgroundImage: "url('./tracking.jpg')" }}
        >
          {/* Overlay warna biru dengan opacity */}
          <div className="absolute inset-0 bg-blue-900/70"></div>

          {/* Konten */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Link to="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Kembali ke Beranda</span>
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full mb-3 sm:mb-4">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                <span className="text-xs sm:text-sm font-medium">
                  PPID
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                Pejabat Pengelola Informasi dan Dokumentasi
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
                Dinas Pendidikan Provinsi Sulawesi Tenggara
              </p>
            </div>
          </div>
        </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
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
                      [Template - PPID adalah pejabat yang bertanggung jawab di
                      bidang penyimpanan, pendokumentasian, penyediaan, dan/atau
                      pelayanan informasi di badan publik.]
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
                      "[Template - Mewujudkan pelayanan informasi publik yang
                      transparan, akuntabel, dan berkualitas]"
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

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-education-green">
                  <span className="text-2xl">📢</span>
                  Informasi Berkala
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Informasi yang wajib disediakan dan diumumkan secara berkala
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Profil Dinas Pendidikan",
                    "Rencana Strategis (Renstra)",
                    "Laporan Kinerja (LAKIP)",
                    "Laporan Keuangan",
                    "Data Statistik Pendidikan",
                    "Program dan Kegiatan",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-education-green">•</span>
                      <span className="text-muted-foreground">
                        [Template - {item}]
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📝</span>
                  Informasi Serta Merta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Informasi yang dapat mengancam hajat hidup orang banyak
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Kebijakan pendidikan mendesak",
                    "Peringatan keamanan sekolah",
                    "Perubahan jadwal ujian nasional",
                    "Informasi bencana alam",
                    "Kebijakan COVID-19 pendidikan",
                    "Pengumuman darurat",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-government-blue">•</span>
                      <span className="text-muted-foreground">
                        [Template - {item}]
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent-gold">
                  <span className="text-2xl">🔍</span>
                  Informasi Setiap Saat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Informasi yang tersedia setiap saat diminta
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Daftar informasi publik",
                    "Hasil keputusan rapat",
                    "SOP pelayanan publik",
                    "Daftar penerima bantuan",
                    "Jadwal pelayanan",
                    "Kontak informasi",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent-gold">•</span>
                      <span className="text-muted-foreground">
                        [Template - {item}]
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Form Permohonan Informasi */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-government-blue">
                <span className="text-2xl">📋</span>
                Permohonan Informasi Publik
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-government-blue mb-2 block">
                          Nama Lengkap
                        </label>
                        <Input placeholder="Masukkan nama lengkap" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-government-blue mb-2 block">
                          NIK
                        </label>
                        <Input placeholder="Nomor Induk Kependudukan" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-government-blue mb-2 block">
                          Email
                        </label>
                        <Input type="email" placeholder="email@example.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-government-blue mb-2 block">
                          No. Telepon
                        </label>
                        <Input placeholder="08xxxxxxxxxx" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-government-blue mb-2 block">
                        Alamat
                      </label>
                      <Textarea placeholder="Alamat lengkap pemohon" rows={2} />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-government-blue mb-2 block">
                        Informasi yang Diminta
                      </label>
                      <Textarea
                        placeholder="Jelaskan secara detail informasi yang Anda butuhkan..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-government-blue mb-2 block">
                        Tujuan Penggunaan
                      </label>
                      <Textarea
                        placeholder="Jelaskan tujuan penggunaan informasi tersebut..."
                        rows={2}
                      />
                    </div>

                    <Button className="w-full bg-government-blue hover:bg-government-blue/90">
                      Ajukan Permohonan
                    </Button>
                  </form>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-gradient-primary/5 rounded-lg">
                    <h4 className="font-semibold text-government-blue mb-2">
                      Persyaratan Permohonan
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Identitas diri yang jelas (KTP/Paspor)</li>
                      <li>• Alamat yang dapat dihubungi</li>
                      <li>• Kontak yang aktif (email/telepon)</li>
                      <li>• Deskripsi informasi yang jelas</li>
                      <li>• Tujuan penggunaan informasi</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-education-green/10 rounded-lg">
                    <h4 className="font-semibold text-education-green mb-2">
                      Waktu Pelayanan
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Informasi Sederhana:</span>
                        <span className="font-medium">10 Hari Kerja</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Informasi Kompleks:</span>
                        <span className="font-medium">17 Hari Kerja</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Perpanjangan Maksimal:</span>
                        <span className="font-medium">7 Hari Kerja</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-accent-gold/10 rounded-lg">
                    <h4 className="font-semibold text-accent-gold mb-2">
                      Biaya Pelayanan
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>
                        • Permohonan informasi:{" "}
                        <span className="font-medium text-education-green">
                          GRATIS
                        </span>
                      </p>
                      <p>• Biaya fotokopi: Rp 500/lembar</p>
                      <p>• Biaya cetak: sesuai tarif</p>
                      <p>• Pengiriman: sesuai ongkos kirim</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Daftar Informasi Publik */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-government-blue">
                <span className="text-2xl">📚</span>
                Daftar Informasi Publik (DIP)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    kategori: "Organisasi dan Kepegawaian",
                    jumlah: "25 Dokumen",
                    update: "Januari 2024",
                    akses: "Terbuka",
                  },
                  {
                    kategori: "Program dan Kegiatan",
                    jumlah: "38 Dokumen",
                    update: "Februari 2024",
                    akses: "Terbuka",
                  },
                  {
                    kategori: "Kinerja dan Capaian",
                    jumlah: "15 Dokumen",
                    update: "Maret 2024",
                    akses: "Terbuka",
                  },
                  {
                    kategori: "Keuangan dan Anggaran",
                    jumlah: "20 Dokumen",
                    update: "Maret 2024",
                    akses: "Terbuka",
                  },
                  {
                    kategori: "Pengadaan Barang dan Jasa",
                    jumlah: "12 Dokumen",
                    update: "April 2024",
                    akses: "Terbuka",
                  },
                ].map((dip, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h4 className="font-semibold text-government-blue">
                          {dip.kategori}
                        </h4>
                        <div className="grid md:grid-cols-3 gap-2 mt-2 text-sm text-muted-foreground">
                          <span>📄 {dip.jumlah}</span>
                          <span>📅 Update: {dip.update}</span>
                          <span>🔓 Status: {dip.akses}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Lihat Detail
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <Button className="bg-government-blue hover:bg-government-blue/90">
                  Download DIP Lengkap
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Kontak PPID */}
          <div className="grid md:grid-cols-2 gap-6">
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
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default PPID;
