import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  kodeTracking?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ open, onClose, kodeTracking }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md text-center border-blue-200">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-blue-500" />
          </div>
          <DialogTitle className="text-2xl font-bold text-blue-700">
            Laporan Berhasil Dikirim!
          </DialogTitle>
          <DialogDescription className="text-base mt-2 text-gray-600">
            Silakan cek email Anda untuk konfirmasi dan tindak lanjut dari tim kami.
          </DialogDescription>
        </DialogHeader>

        {kodeTracking && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800 font-medium">
            <p>Kode Tracking:</p>
            <p className="text-lg font-semibold">{kodeTracking}</p>
          </div>
        )}

        <div className="mt-6">
          <Button
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Tutup
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
