import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, ArrowLeft } from "lucide-react";
import usePostLayanan from "@/features/layanan/usePostLayanan";
import SuccessModal from "@/components/SuccessModal";
import CooldownModal from "../CooldownModal";
import BgImage from "@/assets/tracking.jpg";

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

          // console.log("diffMinutes", diffMinutes);

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
      }
    };
    const handleDokumenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setDokumen(null);
      return;
    }

    const allowedDocTypes = [
      "application/pdf",
      // "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedDocTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        dokumen: "Dokumen harus berformat PDF"
      }));
      e.target.value = ""; // reset input
      setDokumen(null);
      return;
    }

    if (file.size > MAX_DOKUMEN_SIZE_MB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        dokumen: `Ukuran dokumen maksimal ${MAX_DOKUMEN_SIZE_MB} MB.`
      }));
      e.target.value = "";
      setDokumen(null);
      return;
    }


    setErrors((prev) => ({ ...prev, dokumen: "" }));
    setDokumen(file);
  };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];

    const allowedImageTypes = ["image/jpeg", "image/jpg", "image/png"];

    // Cek jumlah foto
    if (files.length > MAX_FOTO_COUNT) {
      setErrors((prev) => ({
        ...prev,
        foto: `Maksimal ${MAX_FOTO_COUNT} foto yang bisa diunggah.`
      }));
      e.target.value = "";
      return;
    }

    for (const file of files) {
      if (!allowedImageTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          foto: "Format foto harus JPG atau PNG."
        }));
        e.target.value = "";
        return;
      }

      if (file.size > MAX_FOTO_SIZE_MB * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          foto: `Ukuran foto maksimal ${MAX_FOTO_SIZE_MB} MB per file.`
        }));
        e.target.value = "";
        return;
      }
    }

    setErrors((prev) => ({ ...prev, foto: "" }));
    setFoto(files);
  };


    return (
      <div className="min-h-screen bg-background">
        <main>
          {/* Header Section */}
          <section
            className="relative py-20 text-white bg-cover bg-center"
            style={{ backgroundImage: `url(${BgImage})` }}
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

              <div className="text-center mb-10">
                <div className="inline-flex items-center px-3 py-1 bg-white/20 border border-white/30 rounded-full mb-3">
                  <Mail className="w-3 h-3 mr-2" />
                  <span className="text-xs font-medium">Layanan Digital</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Aspirasi & Pengaduan
                </h2>

                <p className="text-base max-w-2xl mx-auto opacity-90">
                  Sampaikan pesan Anda ke Unit Kerja yang tepat agar dapat segera kami tindak lanjuti.
                </p>
              </div>
            </div>
          </section>
        </main>

        <section className="py-16" id="contact">
          <CooldownModal open={open} onClose={() => isOpen((value) => !value)} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Tupoksi */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Panduan Pengiriman Pesan</h3>
                  <p className="text-muted-foreground mb-6">
                    Agar pesan Anda cepat ditanggapi, mohon tujukan ke unit yang tepat sesuai kategori berikut:
                  </p>
                  
                  <div className="space-y-4">
                    
                    {/* Kategori 1: Bidang di Dinas Provinsi */}
                    <div className="border rounded-lg p-6 bg-blue-50 border-blue-100">
                      <h4 className="font-semibold mb-2 text-blue-800">
                        1. Bidang & Sekretariat Dinas
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Pilih opsi ini untuk urusan kebijakan tingkat provinsi, kurikulum, 
                        mutasi guru antar kabupaten, sertifikasi (GTK), serta sarana prasarana 
                        sekolah (SMA/SMK/SLB) yang menjadi kewenangan provinsi.
                      </p>
                      <ul className="list-disc list-inside text-xs text-muted-foreground mt-2 pl-2">
                        <li>Termasuk: Perencanaan, GTK, SMA, SMK, PKLK, Kebudayaan.</li>
                      </ul>
                    </div>

                    {/* Kategori 2: UPTD (Unit Teknis) */}
                    <div className="border rounded-lg p-6 bg-orange-50 border-orange-100">
                      <h4 className="font-semibold mb-2 text-orange-800">
                        2. UPTD (Unit Pelaksana Teknis)
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Pilih opsi ini untuk layanan teknis spesifik:
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                        <li><strong>BTIKP:</strong> Layanan TIK, Website, dan Data Pendidikan.</li>
                        <li><strong>Museum/Taman Budaya:</strong> Kunjungan museum, event seni & budaya.</li>
                        <li><strong>PSBK:</strong> Penanganan siswa berkebutuhan khusus/inklusi.</li>
                      </ul>
                    </div>

                    {/* Kategori 3: KCD (Cabang Dinas) */}
                    <div className="border rounded-lg p-6 bg-green-50 border-green-100">
                      <h4 className="font-semibold mb-2 text-green-800">
                        3. Kantor Cabang Dinas (KCD)
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Pilih KCD sesuai <strong>wilayah/kabupaten</strong> tempat sekolah Anda berada.
                        KCD bertugas sebagai perpanjangan tangan Dinas Pendidikan Provinsi untuk 
                        urusan administrasi, pengawasan, dan pembinaan di tingkat kabupaten/kota.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
              
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
                        <Label>Nama</Label>
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
                        <Label>Email</Label>
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
                        <Label>Bidang / Unit Kerja</Label>
                        <select
                          value={bidang}
                          onChange={(e) => setBidang(e.target.value)}
                          className="mt-2 rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Pilih Bidang/Unit</option>
                          
                          {/* Bidang Utama */}
                          <option value="bidang_perencanaan">Bidang Perencanaan</option>
                          <option value="bidang_gtk">Bidang GTK</option>
                          <option value="bidang_sma">Bidang Pembinaan SMA</option>
                          <option value="bidang_smk_pklk">Bidang SMK - PKLK</option>
                          <option value="bidang_kebudayaan">Bidang Kebudayaan</option>
                          <option value="humas">Humas</option>
                          <option value="kepegawaian_keuangan">Kepegawaian dan Keuangan</option>

                          {/* UPTD */}
                          <option value="uptd_btikp">UPTD BTIKP</option>
                          <option value="uptd_museum_budaya">UPTD Museum dan Taman Budaya</option>
                          <option value="uptd_psbk">UPTD Penanganan Siswa Berkebutuhan Khusus</option>

                          {/* KCD (Kantor Cabang Dinas) */}
                          <option value="kcd_konawe_konut">KCD Konawe & Konawe Utara</option>
                          <option value="kcd_kolaka_koltim">KCD Kolaka & Kolaka Timur</option>
                          <option value="kcd_kolaka_utara">KCD Kolaka Utara</option>
                          <option value="kcd_bombana">KCD Bombana</option>
                          <option value="kcd_konkep">KCD Konawe Kepulauan</option>
                          <option value="kcd_muna">KCD Muna</option>
                          <option value="kcd_mubar_buteng">KCD Muna Barat & Buton Tengah</option>
                          <option value="kcd_baubau_busel">KCD Baubau & Buton Selatan</option>
                          <option value="kcd_buton">KCD Buton</option>
                          <option value="kcd_wakatobi">KCD Wakatobi</option>
                          <option value="kcd_butur">KCD Buton Utara</option>
                          <option value="kcd_konsel">KCD Konawe Selatan</option>
                        </select>

                        {errors.bidang && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.bidang}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label>Judul</Label>
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
                        <Label>Pesan</Label>
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
                        <Label>Upload Foto (Opsional, PNG/JPG maks. 3 file, 3 MB/file)</Label>
                        <Input
                          type="file"
                          accept="image/*"
                          multiple
                          className="mt-2"
                          onChange={handleFotoChange}
                        />
                        {errors.foto && (
                          <p className="text-red-500 text-sm mt-1">{errors.foto}</p>
                        )}
                      </div>

                      <div>
                        <Label>Dokumen (Opsional, PDF maks. 5 MB)</Label>
                        <Input
                          type="file"
                          accept=".pdf,.docx"
                          className="mt-2"
                          onChange={handleDokumenChange}
                        />
                        {errors.dokumen && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.dokumen}
                          </p>
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
      </div>
    );
  };

  export default ContactSection;
