import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Pengaduan = () => {
  return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-government-blue mb-4">Pengaduan Masyarakat</h1>
            <p className="text-muted-foreground text-lg">Saluran Aspirasi dan Pengaduan untuk Pelayanan yang Lebih Baik</p>
          </div>

          <div className="grid gap-6">
            {/* Form Pengaduan */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">✍️</span>
                    Form Pengaduan Online
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-government-blue mb-2 block">Nama Lengkap</label>
                        <Input placeholder="Masukkan nama lengkap" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-government-blue mb-2 block">Email</label>
                        <Input type="email" placeholder="email@example.com" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-government-blue mb-2 block">No. Telepon</label>
                        <Input placeholder="08xxxxxxxxxx" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-government-blue mb-2 block">Kategori Pengaduan</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>Pilih Kategori</option>
                          <option>Pelayanan Administrasi</option>
                          <option>Sarana Prasarana</option>
                          <option>Tenaga Pendidik</option>
                          <option>Kurikulum</option>
                          <option>Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-government-blue mb-2 block">Subjek Pengaduan</label>
                      <Input placeholder="Judul/subjek pengaduan" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-government-blue mb-2 block">Detail Pengaduan</label>
                      <Textarea 
                        placeholder="Jelaskan detail pengaduan Anda dengan lengkap..."
                        rows={5}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-government-blue mb-2 block">Lampiran (Opsional)</label>
                      <Input type="file" multiple />
                      <p className="text-xs text-muted-foreground mt-1">Format: PDF, JPG, PNG (Max. 5MB)</p>
                    </div>

                    <Button className="w-full bg-government-blue hover:bg-government-blue/90">
                      Kirim Pengaduan
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {/* Panduan Pengaduan */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-government-blue">
                      <span className="text-2xl">📋</span>
                      Panduan Pengaduan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        "Isi form dengan data yang benar dan lengkap",
                        "Jelaskan pengaduan secara detail dan jelas",
                        "Sertakan bukti pendukung jika ada",
                        "Tunggu konfirmasi melalui email/SMS",
                        "Pantau status pengaduan secara berkala"
                      ].map((panduan, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="bg-government-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <span className="text-sm text-muted-foreground">[Template - {panduan}]</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Kontak Alternatif */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-government-blue">
                      <span className="text-2xl">📞</span>
                      Kontak Alternatif
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-gradient-primary/5 rounded-lg">
                        <h4 className="font-semibold text-government-blue mb-1">Hotline Pengaduan</h4>
                        <p className="text-lg font-bold text-education-green">[Template - (0401) 123-4567]</p>
                        <p className="text-xs text-muted-foreground">24 Jam</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-3 bg-muted/30 rounded-lg">
                          <div className="text-2xl mb-1">📧</div>
                          <p className="text-xs text-muted-foreground">[Template - Email]</p>
                        </div>
                        <div className="text-center p-3 bg-muted/30 rounded-lg">
                          <div className="text-2xl mb-1">💬</div>
                          <p className="text-xs text-muted-foreground">[Template - WhatsApp]</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tracking Pengaduan */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">🔍</span>
                  Lacak Status Pengaduan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <Input placeholder="Masukkan nomor tiket pengaduan" className="flex-1" />
                  <Button variant="outline" className="border-government-blue text-government-blue hover:bg-government-blue hover:text-white">
                    Cek Status
                  </Button>
                </div>
                
                {/* Contoh Status */}
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-government-blue mb-3">Contoh Status Pengaduan</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <p className="font-medium">Tiket #PGD2024001</p>
                        <p className="text-sm text-muted-foreground">Keluhan fasilitas sekolah</p>
                      </div>
                      <Badge className="bg-education-green">Selesai</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <p className="font-medium">Tiket #PGD2024002</p>
                        <p className="text-sm text-muted-foreground">Pengaduan pelayanan administrasi</p>
                      </div>
                      <Badge variant="secondary">Dalam Proses</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistik Pengaduan */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: "Total Pengaduan", nilai: "1,245", periode: "Tahun 2024", warna: "bg-government-blue" },
                { label: "Selesai", nilai: "1,156", periode: "92.8%", warna: "bg-education-green" },
                { label: "Dalam Proses", nilai: "67", periode: "5.4%", warna: "bg-accent-gold" },
                { label: "Rata-rata Respon", nilai: "2.3", periode: "Hari", warna: "bg-purple-500" }
              ].map((stat, index) => (
                <Card key={index} className="shadow-elegant">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className={`text-white p-3 rounded-lg ${stat.warna} mb-3`}>
                        <p className="text-2xl font-bold">[{stat.nilai}]</p>
                      </div>
                      <h3 className="font-semibold text-government-blue">{stat.label}</h3>
                      <p className="text-sm text-muted-foreground">{stat.periode}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Pengaduan */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">❓</span>
                  FAQ Pengaduan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      tanya: "Berapa lama waktu respon pengaduan?",
                      jawab: "Maksimal 1x24 jam untuk konfirmasi awal, dan 7 hari kerja untuk penyelesaian."
                    },
                    {
                      tanya: "Apakah bisa mengajukan pengaduan secara anonim?",
                      jawab: "Ya, namun kontak minimal diperlukan untuk tindak lanjut dan konfirmasi."
                    },
                    {
                      tanya: "Bagaimana jika pengaduan tidak ditanggapi?",
                      jawab: "Dapat menghubungi hotline atau mengadukan ke tingkat yang lebih tinggi."
                    },
                    {
                      tanya: "Apakah ada biaya untuk mengajukan pengaduan?",
                      jawab: "Tidak ada biaya. Semua layanan pengaduan gratis untuk masyarakat."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-government-blue mb-2">{faq.tanya}</h4>
                      <p className="text-sm text-muted-foreground">[Template - {faq.jawab}]</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
  );
};

export default Pengaduan;