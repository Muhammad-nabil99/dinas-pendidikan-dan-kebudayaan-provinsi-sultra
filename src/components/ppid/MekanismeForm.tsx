import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const MekanismeForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: "",
    nik: "",
    email: "",
    telepon: "",
    alamat: "",
    informasiDiminta: "",
    tujuanPenggunaan: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement API call to submit permohonan informasi
      // const response = await postPermohonanInformasi(formData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Berhasil!",
        description: "Permohonan informasi telah diajukan. Anda akan menerima konfirmasi melalui email.",
      });

      // Reset form
      setFormData({
        namaLengkap: "",
        nik: "",
        email: "",
        telepon: "",
        alamat: "",
        informasiDiminta: "",
        tujuanPenggunaan: "",
      });
    } catch (error) {
      toast({
        title: "Gagal!",
        description: "Terjadi kesalahan saat mengajukan permohonan. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-government-blue mb-2 block">
                    Nama Lengkap
                  </label>
                  <Input
                    placeholder="Masukkan nama lengkap"
                    value={formData.namaLengkap}
                    onChange={(e) => handleInputChange("namaLengkap", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-government-blue mb-2 block">
                    NIK
                  </label>
                  <Input
                    placeholder="Nomor Induk Kependudukan"
                    value={formData.nik}
                    onChange={(e) => handleInputChange("nik", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-government-blue mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-government-blue mb-2 block">
                    No. Telepon
                  </label>
                  <Input
                    placeholder="08xxxxxxxxxx"
                    value={formData.telepon}
                    onChange={(e) => handleInputChange("telepon", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-government-blue mb-2 block">
                  Alamat
                </label>
                <Textarea
                  placeholder="Alamat lengkap pemohon"
                  rows={2}
                  value={formData.alamat}
                  onChange={(e) => handleInputChange("alamat", e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-government-blue mb-2 block">
                  Informasi yang Diminta
                </label>
                <Textarea
                  placeholder="Jelaskan secara detail informasi yang Anda butuhkan..."
                  rows={3}
                  value={formData.informasiDiminta}
                  onChange={(e) => handleInputChange("informasiDiminta", e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-government-blue mb-2 block">
                  Tujuan Penggunaan
                </label>
                <Textarea
                  placeholder="Jelaskan tujuan penggunaan informasi tersebut..."
                  rows={2}
                  value={formData.tujuanPenggunaan}
                  onChange={(e) => handleInputChange("tujuanPenggunaan", e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-government-blue hover:bg-government-blue/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Mengirim..." : "Ajukan Permohonan"}
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
  );
};

export default MekanismeForm;
