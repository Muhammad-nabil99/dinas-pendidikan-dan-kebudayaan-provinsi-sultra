import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import usePostLayanan from "@/features/layanan/usePostLayanan";
import SuccessModal from "@/components/SuccessModal";
import CooldownModal from "../CooldownModal";

const MAX_DOKUMEN_SIZE_MB = 5;
const MAX_FOTO_SIZE_MB = 3;
const MAX_FOTO_COUNT = 3;

const MekanismeForm = () => {
  const { postLayanan, isLoading } = usePostLayanan();

  const [nama, setNamaPengirim] = useState("");
  const [email, setEmailPengirim] = useState("");
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [dokumen, setDokumen] = useState<File | null>(null);
  const [foto, setFoto] = useState<File[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [open, isOpen] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!nama.trim()) newErrors.nama = "Nama wajib diisi.";
    if (!email.trim()) newErrors.email = "Email wajib diisi.";
    if (!judul.trim()) newErrors.judul = "Judul wajib diisi.";
    if (!deskripsi.trim()) newErrors.deskripsi = "Pesan wajib diisi.";

    if (dokumen && dokumen.size > MAX_DOKUMEN_SIZE_MB * 1024 * 1024) {
      newErrors.dokumen = `Ukuran dokumen maksimal ${MAX_DOKUMEN_SIZE_MB} MB.`;
    }

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
        const diffMinutes = Math.floor((now.getTime() - laporanTime.getTime()) / (1000 * 60));

        if (laporan.email === email && diffMinutes < 60) {
          isOpen((value) => !value);
          return;
        }
      }

      await postLayanan({
        judul,
        deskripsi,
        bidang: "bidang_umum", // ✅ otomatis dikirim sebagai bidang_umum
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

    const allowedDocTypes = ["application/pdf"];

    if (!allowedDocTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        dokumen: "Dokumen harus berformat PDF"
      }));
      e.target.value = "";
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
    <>
      <CooldownModal open={open} onClose={() => isOpen((value) => !value)} />
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-government-blue">
            <span className="text-2xl">📋</span>
            Permohonan Informasi Publik / Laporan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <form onSubmit={handleSubmitLayanan} className="space-y-4">
                <div>
                  <Label>Nama Lengkap</Label>
                  <Input
                    placeholder="Masukkan nama lengkap"
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
                    placeholder="email@example.com"
                    className="mt-2"
                    value={email}
                    onChange={(e) => setEmailPengirim(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* ✅ Hilangkan dropdown bidang dari UI */}

                <div>
                  <Label>Informasi Yang Diminta</Label>
                  <Input
                    placeholder="Informasi Yang Diminta"
                    className="mt-2"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                  />
                  {errors.judul && (
                    <p className="text-red-500 text-sm mt-1">{errors.judul}</p>
                  )}
                </div>

                <div>
                  <Label>Tujuan Pengunaan</Label>
                  <Textarea
                    placeholder="Jelaskan tujuan pengunaan informasi.."
                    rows={5}
                    className="mt-2 resize-none"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                  />
                  {errors.deskripsi && (
                    <p className="text-red-500 text-sm mt-1">{errors.deskripsi}</p>
                  )}
                </div>

                

              

                <Button
                  type="submit"
                  className="w-full bg-government-blue hover:bg-government-blue/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Mengirim..." : "Ajukan Permohonan"}
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
                    <span className="font-medium">1 Hari Kerja</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Informasi Kompleks:</span>
                    <span className="font-medium">2 Hari Kerja</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Perpanjangan Maksimal:</span>
                    <span className="font-medium">3 Hari Kerja</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <SuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
};

export default MekanismeForm;
