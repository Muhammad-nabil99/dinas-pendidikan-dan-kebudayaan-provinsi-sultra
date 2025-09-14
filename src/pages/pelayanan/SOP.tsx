import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SOP = () => {
  return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-government-blue mb-4">Standar Operasional Prosedur</h1>
            <p className="text-muted-foreground text-lg">Panduan Prosedur Pelayanan Dinas Pendidikan</p>
          </div>

          <div className="grid gap-6">
            {/* SOP Utama */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Penerbitan Surat Rekomendasi",
                  kategori: "Administrasi",
                  waktu: "3 Hari Kerja",
                  persyaratan: 5,
                  tahapan: 4
                },
                {
                  title: "Pengajuan Data Sekolah",
                  kategori: "Data & Informasi",
                  waktu: "5 Hari Kerja",
                  persyaratan: 7,
                  tahapan: 5
                },
                {
                  title: "Permohonan Bantuan Pendidikan",
                  kategori: "Bantuan",
                  waktu: "14 Hari Kerja",
                  persyaratan: 8,
                  tahapan: 6
                },
                {
                  title: "Pengajuan Mutasi Guru",
                  kategori: "Kepegawaian",
                  waktu: "10 Hari Kerja",
                  persyaratan: 10,
                  tahapan: 7
                },
                {
                  title: "Sertifikasi Lembaga Kursus",
                  kategori: "Sertifikasi",
                  waktu: "21 Hari Kerja",
                  persyaratan: 12,
                  tahapan: 8
                },
                {
                  title: "Pengaduan Masyarakat",
                  kategori: "Pengaduan",
                  waktu: "7 Hari Kerja",
                  persyaratan: 3,
                  tahapan: 5
                }
              ].map((sop, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{sop.kategori}</Badge>
                      <Badge variant="outline">{sop.waktu}</Badge>
                    </div>
                    <CardTitle className="text-lg text-government-blue">{sop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Persyaratan:</span>
                        <span className="font-medium">{sop.persyaratan} Dokumen</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tahapan:</span>
                        <span className="font-medium">{sop.tahapan} Langkah</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full mt-3">
                        Lihat Detail SOP
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detail SOP Pilihan */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📄</span>
                  Detail SOP: Penerbitan Surat Rekomendasi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-government-blue mb-3">Persyaratan:</h3>
                    <ul className="space-y-2">
                      {[
                        "Surat permohonan resmi",
                        "Fotocopy KTP pemohon",
                        "Dokumen pendukung sesuai keperluan",
                        "Pas foto 3x4 (2 lembar)",
                        "Meterai 10.000"
                      ].map((syarat, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-education-green mt-1">•</span>
                          <span className="text-sm text-muted-foreground">[Template - {syarat}]</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-government-blue mb-3">Tahapan Proses:</h3>
                    <div className="space-y-3">
                      {[
                        { tahap: "1", desc: "Penerimaan berkas oleh petugas", waktu: "30 menit" },
                        { tahap: "2", desc: "Verifikasi kelengkapan dokumen", waktu: "1 hari" },
                        { tahap: "3", desc: "Proses persetujuan pimpinan", waktu: "1 hari" },
                        { tahap: "4", desc: "Penerbitan surat rekomendasi", waktu: "1 hari" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="bg-government-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                            {item.tahap}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground">[Template - {item.desc}]</p>
                            <p className="text-xs text-education-green">Estimasi: {item.waktu}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Center */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">📥</span>
                  Download Dokumen SOP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { nama: "SOP Pelayanan Administrasi", ukuran: "2.5 MB", format: "PDF" },
                    { nama: "Formulir Permohonan", ukuran: "1.2 MB", format: "DOC" },
                    { nama: "SOP Kepegawaian", ukuran: "3.1 MB", format: "PDF" },
                    { nama: "Panduan Pengaduan", ukuran: "1.8 MB", format: "PDF" }
                  ].map((doc, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="text-center">
                        <div className="text-3xl mb-2">📄</div>
                        <h4 className="font-medium text-sm text-government-blue mb-2">{doc.nama}</h4>
                        <div className="flex justify-between text-xs text-muted-foreground mb-3">
                          <span>{doc.format}</span>
                          <span>{doc.ukuran}</span>
                        </div>
                        <Button size="sm" variant="outline" className="w-full">
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Informasi Tambahan */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">⏰</span>
                    Jam Operasional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Senin - Kamis</span>
                      <span className="font-medium">08:00 - 16:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Jumat</span>
                      <span className="font-medium">08:00 - 16:30 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Istirahat</span>
                      <span className="font-medium">12:00 - 13:00 WIB</span>
                    </div>
                    <hr className="my-2" />
                    <p className="text-sm text-muted-foreground italic">
                      *Layanan online tersedia 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">📍</span>
                    Lokasi Pelayanan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-government-blue">Kantor Utama</h4>
                      <p className="text-sm text-muted-foreground">[Template - Alamat lengkap kantor dinas]</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-government-blue">Kontak</h4>
                      <p className="text-sm text-muted-foreground">
                        Telp: [Template - Nomor telepon]<br/>
                        Email: [Template - Email resmi]
                      </p>
                    </div>
                    <Button variant="outline" className="w-full mt-3">
                      Lihat di Peta
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

export default SOP;