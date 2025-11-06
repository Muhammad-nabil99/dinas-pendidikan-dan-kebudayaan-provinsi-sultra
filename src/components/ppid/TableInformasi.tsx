import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface TableItem {
  id: number;
  judul: string;
  tahun: number;
  dokumen_url: string;
}

interface TableInformasiProps {
  data: TableItem[];
  onDownload: (url: string) => void;
}

const TableInformasi = ({ data, onDownload }: TableInformasiProps) => {

  
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200 bg-white rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
              No
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
              Nama Dokumen
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
              Tahun
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              key={item?.id}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="border border-gray-200 px-4 py-3 text-gray-600">
                {index + 1}
              </td>
              <td className="border border-gray-200 px-4 py-3 text-gray-900 font-medium">
                {item.judul}
              </td>
              <td className="border border-gray-200 px-4 py-3 text-gray-600">
                {item.tahun}
              </td>
              <td className="border border-gray-200 px-4 py-3">
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => onDownload(item.dokumen_url)}
                >
                  <Download className="w-4 h-4 mr-1" />
                  Unduh
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableInformasi;
