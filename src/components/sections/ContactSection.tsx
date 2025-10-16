  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Textarea } from "@/components/ui/textarea";
  import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
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
              Laporan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami siap melayani dan membantu kebutuhan pendidikan Anda
            </p>
          </div>

            {/* Left side omitted for brevity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
  <div>
    <h3 className="text-2xl font-semibold mb-6">Tupoksi Bidang</h3>
    <div className="space-y-4">

      <div className="border rounded-lg p-6 bg-gray-50">
        <h4 className="font-semibold mb-2">Bidang Perencanaan dan Penganggaran</h4>
        <p className="text-muted-foreground text-sm">
          Mengoordinasikan penyusunan rencana, program, kegiatan, dan anggaran dinas. 
          Menyusun perencanaan strategis, sinkronisasi kebijakan antar kabupaten/kota, 
          serta pendataan pendidikan dan kebudayaan.
        </p>
      </div>

      <div className="border rounded-lg p-6 bg-gray-50">
        <h4 className="font-semibold mb-2">Bidang Pembinaan Sekolah Menengah Atas</h4>
        <p className="text-muted-foreground text-sm">
          Merencanakan, mengoordinasikan, dan memfasilitasi kebutuhan kurikulum, 
          kelembagaan, sarana prasarana, kesiswaan, dan pendidikan karakter jenjang SMA. 
          Melaksanakan pembinaan mutu serta evaluasi kegiatan SMA.
        </p>
      </div>

      <div className="border rounded-lg p-6 bg-gray-50">
        <h4 className="font-semibold mb-2">Bidang Pembinaan SMK dan Pendidikan Khusus</h4>
        <p className="text-muted-foreground text-sm">
          Menangani kurikulum, kelembagaan, sarana prasarana, kesiswaan, 
          dan pendidikan karakter SMK serta pendidikan khusus. 
          Fokus pada pengembangan kompetensi siswa dan koordinasi ujian serta akreditasi.
        </p>
      </div>

      <div className="border rounded-lg p-6 bg-gray-50">
        <h4 className="font-semibold mb-2">Bidang Pembinaan Guru dan Ketenagaan (GTK)</h4>
        <p className="text-muted-foreground text-sm">
          Melakukan pembinaan dan pengelolaan guru serta tenaga kependidikan. 
          Menangani formasi, mutasi, pengembangan karir, sertifikasi, dan peningkatan profesionalisme GTK.
        </p>
      </div>

      <div className="border rounded-lg p-6 bg-gray-50">
        <h4 className="font-semibold mb-2">Bidang Kebudayaan</h4>
        <p className="text-muted-foreground text-sm">
          Menangani pelestarian, perlindungan, dan pengembangan kebudayaan, cagar budaya, 
          sejarah, tradisi, dan kesenian tingkat provinsi. 
          Mengintegrasikan nilai budaya ke dalam dunia pendidikan.
        </p>
      </div>

    </div>
  </div>
</div>

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
                        // value={'nabil'}
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
                        // value={'nabil@gmail.com'}
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
                        // value={'judul'}
                        placeholder="Judul pesan"
                        className="mt-2"
                        onChange={(e) => setJudul(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Pesan*</Label>
                      <Textarea
                        id="message"
                        // value={'pesan'}
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
