import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useParams } from "react-router-dom";

const unitKerjaDetails = {
  "kepala-dinas": {
    title: "Kepala Dinas Pendidikan",
    description:
      "Bertanggung jawab penuh atas pelaksanaan seluruh urusan pendidikan dan kebudayaan di provinsi.",
  },
  sekretaris: {
    title: "Sekretaris",
    description:
      "Mempunyai tugas merencanakan, menyusun, melaksanakan, membina tugas-tugas kebijakan taktis di bidang pelayanan administratif, perlengkapan, keuangan, kepegawaian, inventarisasi aset, ketatausahaan, protokol, humas, rumah tangga, organisasi dan ketatalaksana, analisa jabatan, dokumentasi peraturan perundang-undangan dan mengkoordinasikan penyelenggaraan tugas-tugas bidang secara terpadu",
    fungsi: {
      description:
        "Dalam melaksanakan tugas pokok sebagaimana dimaksud di atas sekretariat mempunyai fungsi sebagai berikut",
      points: [
        "Pelaksanaan koordinasi perencanaan/penyusunan rencana program dan kegiatan pada sekretariat",
        "Pelaksanaan urusan perencanaan/penyusunan program sekretariat",
        "Pelaksanaan urusan perlengkapan kantor",
        "Pelaksanaan administrasi keuangan",
        "Pelaksanaan urusan keprotokoleran, humas, dan rumah tangga",
        "Pelaksanaan urusan barang milik daerah",
        "Pelaksanaan administrasi kepegawaian",
        "Pelaksanaan urusan hukum dan perundang-undangan",
        "Pelaksanaan urusan ketatausahaan",
        "Pelaksanaan urusan organisasi dan tatalaksana, dokumentasi perundang-undangan, serta analisis jabatan",
        "Pelaporan dan evaluasi pelaksanaan program dan kegiatan sekretariat",
        "Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsi",
      ],
    },
  },
};
function DetailTugasFungsi() {
  const { id } = useParams<{ id: string }>();
  const detail = unitKerjaDetails[id as  keyof typeof unitKerjaDetails];

  if (!detail) {
    return <p className="text-center mt-10">Data tidak ditemukan</p>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Button variant="outline" onClick={() => window.history.back()}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Halaman Sebelumnya
      </Button>
      <div className="my-10 m-auto w-1/2  flex items-center justify-center  bg-slate-300 h-52 rounded-md">
        <p className="text-center font-semibold capitalize">foto/gambar</p>
      </div>

      <h1 className="text-xl text-center my-2 font-bold capitalize">
        {detail.title}
      </h1>
      <p className="m-auto w-11/12 my-10 text-center">{detail.description}</p>
      <p>fungsi : {}</p>
    </main>
  );
}
export default DetailTugasFungsi;
