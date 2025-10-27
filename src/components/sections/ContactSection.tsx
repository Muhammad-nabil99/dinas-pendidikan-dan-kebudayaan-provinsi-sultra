import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import usePostLayanan from "@/features/layanan/usePostLayanan";
import SuccessModal from "@/components/SuccessModal";
import CooldownModal from "../CooldownModal";

const MAX_DOKUMEN_SIZE_MB = 5;
const MAX_FOTO_SIZE_MB = 3;
const MAX_FOTO_COUNT = 3;

const ContactSection = () => {
  const [open, isOpen] = useState(false);
  const { postLayanan, isLoading } = usePostLayanan();

  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [bidang, setBidang] = useState("");
  const [email, setEmailPengirim] = useState("");
  const [nama, setNamaPengirim] = useState("");
  const [dokumen, setDokumen] = useState<File | null>(null);
  const [foto, setFoto] = useState<File[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!nama.trim()) newErrors.nama = "Nama wajib diisi.";
    if (!email.trim()) newErrors.email = "Email wajib diisi.";
    if (!bidang.trim()) newErrors.bidang = "Bidang wajib dipilih.";
    if (!judul.trim()) newErrors.judul = "Judul wajib diisi.";
    if (!deskripsi.trim()) newErrors.deskripsi = "Pesan wajib diisi.";

    // Validasi ukuran dokumen
    if (dokumen && dokumen.size > MAX_DOKUMEN_SIZE_MB * 1024 * 1024) {
      newErrors.dokumen = `Ukuran dokumen maksimal ${MAX_DOKUMEN_SIZE_MB} MB.`;
    }

    // Validasi foto
    if (foto.length > MAX_FOTO_COUNT) {
      newErrors.foto = `Maksimal ${MAX_FOTO_COUNT} foto yang bisa diunggah.`;
    } else {
      foto.forEach((file) => {
        if (file.size > MAX_FOTO_SIZE_MB * 1024 * 1024) {
          newErrors.foto = `Ukuran foto maksimal ${MAX_FOTO_SIZE_MB} MB per file.`;
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitLayanan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const getLaporan = localStorage.getItem("laporan");
      const laporan = getLaporan ? JSON.parse(getLaporan) : null;

      if (laporan) {
        const laporanTime = new Date(laporan.time);
        const now = new Date();

        const diffMs = now.getTime() - laporanTime.getTime();

        const diffMinutes = Math.floor(diffMs / (1000 * 60));

        console.log("diffMinutes", diffMinutes);

        if (laporan.email === email && diffMinutes < 60) {
          isOpen((value) => !value);
          return;
        }
      }

      await postLayanan({
        judul,
        deskripsi,
        bidang,
        email_pengirim: email,
        nama_pengirim: nama,
        dokumen,
        files: foto,
      });

      localStorage.setItem(
        "laporan",
        JSON.stringify({ judul, time: new Date(), email })
      );

      // reset form
      setJudul("");
      setDeskripsi("");
      setBidang("");
      setEmailPengirim("");
      setNamaPengirim("");
      setDokumen(null);
      setFoto([]);
      setErrors({});
      setShowSuccessModal(true);
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengirim laporan. Silakan coba lagi.");
    }
  };

  return (
    <section className="py-20" id="contact">
      <CooldownModal open={open} onClose={() => isOpen((value) => !value)} />
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Tupoksi */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Tupoksi Bidang</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-6 bg-gray-50">
                  <h4 className="font-semibold mb-2">
                    Bidang Perencanaan dan Penganggaran
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Mengoordinasikan penyusunan rencana, program, kegiatan, dan
                    anggaran dinas. Menyusun perencanaan strategis, sinkronisasi
                    kebijakan antar kabupaten/kota, serta pendataan pendidikan
                    dan kebudayaan.
                  </p>
                </div>

                <div className="border rounded-lg p-6 bg-gray-50">
                  <h4 className="font-semibold mb-2">
                    Bidang Pembinaan Sekolah Menengah Atas
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Merencanakan, mengoordinasikan, dan memfasilitasi kebutuhan
                    kurikulum, kelembagaan, sarana prasarana, kesiswaan, dan
                    pendidikan karakter jenjang SMA. Melaksanakan pembinaan mutu
                    serta evaluasi kegiatan SMA.
                  </p>
                </div>

                <div className="border rounded-lg p-6 bg-gray-50">
                  <h4 className="font-semibold mb-2">
                    Bidang Pembinaan SMK dan Pendidikan Khusus
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Menangani kurikulum, kelembagaan, sarana prasarana,
                    kesiswaan, dan pendidikan karakter SMK serta pendidikan
                    khusus. Fokus pada pengembangan kompetensi siswa dan
                    koordinasi ujian serta akreditasi.
                  </p>
                </div>

                <div className="border rounded-lg p-6 bg-gray-50">
                  <h4 className="font-semibold mb-2">
                    Bidang Pembinaan Guru dan Ketenagaan (GTK)
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Melakukan pembinaan dan pengelolaan guru serta tenaga
                    kependidikan. Menangani formasi, mutasi, pengembangan karir,
                    sertifikasi, dan peningkatan profesionalisme GTK.
                  </p>
                </div>

                <div className="border rounded-lg p-6 bg-gray-50">
                  <h4 className="font-semibold mb-2">Bidang Kebudayaan</h4>
                  <p className="text-muted-foreground text-sm">
                    Menangani pelestarian, perlindungan, dan pengembangan
                    kebudayaan, cagar budaya, sejarah, tradisi, dan kesenian
                    tingkat provinsi. Mengintegrasikan nilai budaya ke dalam
                    dunia pendidikan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          {/* Right: Form */}
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
                    <Label>Nama*</Label>
                    <Input
                      placeholder="Masukkan nama"
                      className="mt-2"
                      value={nama}
                      onChange={(e) => setNamaPengirim(e.target.value)}
                    />
                    {errors.nama && (
                      <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
                    )}
                  </div>

                  <div>
                    <Label>Email*</Label>
                    <Input
                      type="email"
                      placeholder="nama@email.com"
                      className="mt-2"
                      value={email}
                      onChange={(e) => setEmailPengirim(e.target.value)}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label>Bidang*</Label>
                    <select
                      value={bidang}
                      onChange={(e) => setBidang(e.target.value)}
                      className="mt-2 rounded-md border border-gray-300 p-2 w-full"
                    >
                      <option value="">Pilih Bidang</option>
                      <option value="bidang_sma">Bidang Pembinaan SMA</option>
                      <option value="bidang_smk">Bidang Pembinaan SMK</option>
                      <option value="bidang_pklk">
                        Bidang Pembinaan PK-LK
                      </option>
                      <option value="bidang_gtk">Bidang GTK</option>
                      <option value="bidang_perencanaan">
                        Bidang Perencanaan dan Penganggaran
                      </option>
                      <option value="bidang_kebudayaan">
                        Bidang Kebudayaan
                      </option>
                    </select>
                    {errors.bidang && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.bidang}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label>Judul*</Label>
                    <Input
                      placeholder="Judul pesan"
                      className="mt-2"
                      value={judul}
                      onChange={(e) => setJudul(e.target.value)}
                    />
                    {errors.judul && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.judul}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label>Pesan*</Label>
                    <Textarea
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      className="mt-2 resize-none"
                      value={deskripsi}
                      onChange={(e) => setDeskripsi(e.target.value)}
                    />
                    {errors.deskripsi && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.deskripsi}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label>Dokumen (opsional, maks. 5 MB)</Label>
                    <Input
                      type="file"
                      accept=".pdf,.docx"
                      className="mt-2"
                      onChange={(e) => setDokumen(e.target.files?.[0] || null)}
                    />
                    {errors.dokumen && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.dokumen}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label>Upload Foto (maks. 3 file, 3 MB/foto)</Label>
                    <Input
                      type="file"
                      accept="image/*"
                      multiple
                      className="mt-2"
                      onChange={(e) =>
                        setFoto(Array.from(e.target.files || []))
                      }
                    />
                    {errors.foto && (
                      <p className="text-red-500 text-sm mt-1">{errors.foto}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isLoading ? "Mengirim..." : "Kirim Pesan"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* ✅ Modal sukses */}
      <SuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </section>
  );
};

export default ContactSection;
