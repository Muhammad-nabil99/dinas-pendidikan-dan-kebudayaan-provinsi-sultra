import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, MessageSquare, AlertCircle } from "lucide-react";
import TrackingBg from "@/assets/tracking.jpg";
import TrackingModal from "@/components/TrackingModal";
import TrackingStatusList from "@/components/TrackingStatusList";

import { getTrackingStatus } from "@/services/api";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trackingData, setTrackingData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTrack = async () => {
    if (!trackingNumber.trim()) {
      setErrorMessage("Nomor tracking tidak boleh kosong.");
      return;
    }

    try {
      const data = await getTrackingStatus(trackingNumber);
      if (data) {
        setTrackingData(data);
        setIsModalOpen(true);
      } else {
        setErrorMessage("❌ Nomor tracking tidak valid. Silakan periksa kembali.");
      }
    } catch (error) {
      setErrorMessage("❌ Nomor tracking tidak valid. Silakan periksa kembali.");
    }
  };

  const sampleStatusList = [
    { kode_tracking: "TRK2024001234", status: "Selesai", judul: "Legalisasi ijazah selesai" },
    { kode_tracking: "TRK2024001235", status: "Diproses", judul: "Pengaduan fasilitas" },
    { kode_tracking: "TRK2024001236", status: "Diterima", judul: "Permohonan beasiswa diterima" },
    { kode_tracking: "TRK2024001237", status: "Ditolak", judul: "Surat tidak valid" },
  ];

  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: `url(${TrackingBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/25"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-6 relative z-10">
              <MessageSquare className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium text-white">Lacak Pesan</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
              Laporan
            </h2>
            <p className="text-lg text-white/80 mb-8 relative z-10">
              Pantau status pesan, laporan, atau permohonan layanan Anda dengan mudah
              menggunakan nomor laporan yang telah diberikan.
            </p>

            <Card className="p-6 relative z-10 bg-white/20 backdrop-blur-md border border-white/30">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="tracking" className="text-sm font-medium text-white">
                    Nomor Laporan
                  </Label>
                  <div className="flex space-x-2 mt-2">
                    <Input
                      id="tracking"
                      placeholder="Masukkan nomor tracking (contoh: TRK2024001234)"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder:text-white/70"
                    />
                    <Button onClick={handleTrack} className="bg-gradient-primary">
                      <Search className="w-4 h-4 mr-2" />
                      Lacak
                    </Button>
                  </div>

                  {/* Tampilkan pesan error jika nomor tracking tidak valid */}
                  {errorMessage && (
                    <Alert variant="destructive" className="mt-3 bg-red-500/10 border-red-500/30">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <AlertDescription className="text-sm text-red-300">
                        {errorMessage}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side */}
          <TrackingStatusList data={sampleStatusList} />
        </div>
      </div>

      <TrackingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        trackingData={trackingData}
      />
    </section>
  );
}
