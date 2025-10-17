import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, MessageSquare, XCircle } from "lucide-react";

interface StatusItem {
  kode_tracking: string;
  status: string;
  judul: string;
  deskripsi?: string;
}

interface TrackingStatusListProps {
  data: StatusItem[];
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Selesai":
      return <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />;
    case "Dalam Proses":
      return <Clock className="w-5 h-5 text-yellow-500 mt-0.5" />;
    case "Diterima":
      return <MessageSquare className="w-5 h-5 text-blue-600 mt-0.5" />;
    case "Ditolak":
      return <XCircle className="w-5 h-5 text-red-600 mt-0.5" />;
    default:
      return <MessageSquare className="w-5 h-5 text-gray-600 mt-0.5" />;
  }
};

export default function TrackingStatusList({ data }: TrackingStatusListProps) {
  return (
    <div className="space-y-4 relative z-10">
      <h3 className="text-xl font-semibold mb-6 text-white">Status Laporan</h3>
      {data.map((item) => (
        <Card
          key={item.kode_tracking}
          className="bg-white/50 backdrop-blur-md border border-white/30"
        >
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              {getStatusIcon(item.status)}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900">{item.status}</span>
                  <span className="text-sm text-gray-600">{item.kode_tracking}</span>
                </div>
                <p className="text-sm text-gray-800">{item.judul}</p>
                {item.deskripsi && (
                  <p className="text-xs text-gray-600 mt-1">{item.deskripsi}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
