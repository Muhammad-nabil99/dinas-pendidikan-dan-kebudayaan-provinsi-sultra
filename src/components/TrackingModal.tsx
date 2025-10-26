import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, Clock, MessageSquare, XCircle, AlertCircle } from "lucide-react";

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackingData: {
    kode_tracking: string;
    status: string;
    judul: string;
    bidang: string;
    created_at: string;
  } | null;
}

const getStatusIcon = (status: string) => {
  const normalizedStatus = status.trim().toLowerCase();
  switch (normalizedStatus) {
    case "selesai":
      return <CheckCircle className="w-8 h-8 text-green-600" />;
    case "diproses":
      return <Clock className="w-8 h-8 text-yellow-600" />;
    case "diterima":
      return <MessageSquare className="w-8 h-8 text-blue-600" />;
    case "ditolak":
      return <XCircle className="w-8 h-8 text-red-600" />;
    default:
      return <MessageSquare className="w-8 h-8 text-gray-500" />;
  }
};

const getStatusColor = (status: string) => {
  const normalizedStatus = status.trim().toLowerCase();
  switch (normalizedStatus) {
    case "selesai":
      return "text-green-700";
    case "diproses":
      return "text-yellow-700";
    case "diterima":
      return "text-blue-700";
    case "ditolak":
      return "text-red-700";
    default:
      return "text-gray-700";
  }
};

export default function TrackingModal({
  isOpen,
  onClose,
  trackingData,
}: TrackingModalProps) {
  // Jika kode tracking tidak ditemukan
  if (!trackingData) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-lg rounded-2xl shadow-xl bg-white p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Status Laporan
            </DialogTitle>
            <DialogDescription className="text-gray-500">
              Informasi status terbaru dari laporan Anda
            </DialogDescription>
          </DialogHeader>

          <Alert variant="destructive" className="mt-4">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <AlertTitle>Nomor Tracking Tidak Valid</AlertTitle>
            <AlertDescription>
              Nomor tracking yang Anda masukkan tidak ditemukan.
              Silakan periksa kembali nomor tracking dan coba lagi.
            </AlertDescription>
          </Alert>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg rounded-2xl shadow-xl bg-white p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Status Laporan
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Informasi status terbaru dari laporan Anda
          </DialogDescription>
        </DialogHeader>

        {/* Status */}
        <div className="mt-4 flex items-start space-x-4 border-b pb-4">
          <div className="flex-shrink-0">
            {getStatusIcon(trackingData.status)}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span
                className={`text-lg font-semibold ${getStatusColor(
                  trackingData.status
                )}`}
              >
                {trackingData.status}
              </span>
              <span className="text-sm text-gray-500 font-mono">
                {trackingData.kode_tracking}
              </span>
            </div>
            <p className="text-gray-800">{trackingData.judul}</p>
            <p className="text-sm text-gray-500 mt-1">
              Bidang:{" "}
              <span className="font-medium capitalize">
                {trackingData.bidang}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600 space-y-2">
          <p>
            ⏰ <span className="font-semibold">Jam Kerja:</span> Laporan yang
            masuk di luar jam kerja atau pada hari Sabtu dan Minggu akan{" "}
            <span className="font-medium">
              diproses pada hari dan jam kerja berikutnya
            </span>
            . Laporan Anda tetap tercatat dan akan segera ditindaklanjuti.
          </p>
          <p>
            📧 <span className="font-semibold">Tips:</span> Pastikan email Anda
            aktif dan periksa folder{" "}
            <span className="font-medium">Inbox</span> maupun{" "}
            <span className="font-medium">Spam</span> secara rutin untuk
            menghindari notifikasi yang terlewat.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
