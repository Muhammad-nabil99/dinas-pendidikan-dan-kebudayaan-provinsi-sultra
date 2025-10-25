import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Timer } from "lucide-react"; /

interface CooldownModalProps {
  open: boolean;
  onClose: () => void;
}

const CooldownModal: React.FC<CooldownModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md text-center border-yellow-300">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            {/* Ganti ikon dan warna menjadi tema peringatan/waktu */}
            <Timer className="w-16 h-16 text-yellow-500" />
          </div>
          <DialogTitle className="text-2xl font-bold text-yellow-700">
            Harap Menunggu
          </DialogTitle>
          <DialogDescription className="text-base mt-2 text-gray-600">
            Anda baru saja mengirim laporan. Silakan tunggu
            <span className="font-semibold text-gray-800"> 1 jam </span>
            sebelum dapat mengirim laporan baru.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <Button
            onClick={onClose}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
          >
            Saya Mengerti
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CooldownModal;

