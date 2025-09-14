import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, MessageSquare, Clock, CheckCircle } from "lucide-react";

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = () => {
    // Placeholder for tracking functionality
    console.log("Tracking number:", trackingNumber);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-government-blue/5 to-education-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Tracking Form */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-government-blue/10 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-government-blue mr-2" />
              <span className="text-sm font-medium text-government-blue">Lacak Pesan</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tracking Pesan & Pengaduan
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Pantau status pesan, pengaduan, atau permohonan layanan Anda dengan 
              mudah menggunakan nomor tracking yang telah diberikan.
            </p>

            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="tracking" className="text-sm font-medium">
                    Nomor Tracking
                  </Label>
                  <div className="flex space-x-2 mt-2">
                    <Input
                      id="tracking"
                      placeholder="Masukkan nomor tracking (contoh: TRK2024001234)"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={handleTrack} className="bg-gradient-primary">
                      <Search className="w-4 h-4 mr-2" />
                      Lacak
                    </Button>
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <p>
                    Belum punya nomor tracking? 
                    <Button variant="link" className="p-0 h-auto text-government-blue">
                      Kirim pesan baru
                    </Button>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side - Status Examples */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Contoh Status Tracking</h3>
            
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-green-900">Selesai</span>
                      <span className="text-sm text-green-700">TRK2024001234</span>
                    </div>
                    <p className="text-sm text-green-800">
                      Permohonan legalisasi ijazah telah selesai diproses
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      Diperbarui: 15 Des 2024, 14:30 WITA
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-blue-900">Dalam Proses</span>
                      <span className="text-sm text-blue-700">TRK2024001235</span>
                    </div>
                    <p className="text-sm text-blue-800">
                      Pengaduan fasilitas sekolah sedang ditindaklanjuti
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      Estimasi selesai: 18 Des 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-yellow-900">Perlu Tindak Lanjut</span>
                      <span className="text-sm text-yellow-700">TRK2024001236</span>
                    </div>
                    <p className="text-sm text-yellow-800">
                      Dokumen permohonan beasiswa memerlukan kelengkapan
                    </p>
                    <p className="text-xs text-yellow-600 mt-1">
                      Menunggu respons pemohon
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;