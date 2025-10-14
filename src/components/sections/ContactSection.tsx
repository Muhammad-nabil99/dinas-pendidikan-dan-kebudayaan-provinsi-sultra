import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import usePostLayanan from "@/features/layanan/usePostLayanan";

const ContactSection = () => {
  const { postLayanan, isLoading } = usePostLayanan();

  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [bidang, setBidang] = useState("");
  const [email, setEmailPengirim] = useState("");
  const [nama, setNamaPengirim] = useState("");
  const [dokumen, setDokumen] = useState<File | null>(null);

  const handleSubmitLayanan = async (e: React.FormEvent) => {
    e.preventDefault();

    // Optional validation
    // if (!judul || !deskripsi || !bidang || !email || !nama) {
    //   alert("Mohon isi semua kolom yang wajib diisi.");
    //   return;
    // }

    try {
      await postLayanan({
        judul,
        deskripsi,
        bidang,
        email,
        nama,
        dokumen,
      });
      alert("Pesan berhasil dikirim!");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengirim pesan.");
    }
  };

  return (
    <section className="py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-education-green/10 rounded-full mb-4">
            <Mail className="w-4 h-4 text-education-green mr-2" />
            <span className="text-sm font-medium text-education-green">
              Hubungi Kami
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontak & Informasi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami siap melayani dan membantu kebutuhan pendidikan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side omitted for brevity */}

          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl">Kirim Pesan</CardTitle>
                <p className="text-muted-foreground">
                  Sampaikan pertanyaan, saran, atau pengaduan Anda
                </p>
              </CardHeader>

              <CardContent className="px-0 pb-0">
                <form className="space-y-6" onSubmit={handleSubmitLayanan}>
                  <div>
                    <Label htmlFor="firstName">Nama*</Label>
                    <Input
                      id="firstName"
                      value={'nabil'}
                      placeholder="Masukkan nama"
                      className="mt-2"
                      onChange={(e) => setNamaPengirim(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email*</Label>
                    <Input
                      id="email"
                      type="email"
                      value={'nabil@gmail.com'}
                      placeholder="nama@email.com"
                      className="mt-2"
                      onChange={(e) => setEmailPengirim(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <Label htmlFor="bidang">Bidang*</Label>
                    <select
                      id="bidang"
                      value={bidang}
                      onChange={(e) => setBidang(e.target.value)}
                      className="mt-2 rounded-md border border-gray-300 p-2"
                    >
                      <option value="">Pilih Bidang</option>
                      <option selected value="bidang_sma">Bidang Pembinaan SMA</option>
                      <option value="bidang_smk">Bidang Pembinaan SMK</option>
                      <option value="bidang_pklk">Bidang Pembinaan PK-LK</option>
                      <option value="bidang_gtk">Bidang GTK</option>
                      <option value="bidang_perencanaan">
                        Bidang Perencanaan dan Penganggaran
                      </option>
                      <option value="bidang_kebudayaan">Bidang Kebudayaan</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Judul*</Label>
                    <Input
                      id="subject"
                      value={'judul'}
                      placeholder="Judul pesan"
                      className="mt-2"
                      onChange={(e) => setJudul(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Pesan*</Label>
                    <Textarea
                      id="message"
                      value={'pesan'}
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      className="mt-2 resize-none"
                      onChange={(e) => setDeskripsi(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="dokumen">Dokumen (opsional)</Label>
                    <Input
                      id="dokumen"
                      type="file"
                      accept=".pdf,.docx"
                      className="mt-2"
                      onChange={(e) =>
                        setDokumen(e.target.files ? e.target.files[0] : null)
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-primary hover:bg-gradient-primary/90"
                  >
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
