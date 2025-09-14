import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

function DetailTugasFungsi() {
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
        Kepala Dinas Pendidikan Dan Kebudayaan
      </h1>
      <p className="m-auto w-11/12 my-10 text-center">
        Kepala Dinas mempunyai tugas memimpin,membina, mengkoordinasikan,
        merencanakan dan melaksanakan kebijakan dan program strategis,
        mengendalikan dan mengembangkan semua kegiatan bidang pendidikan dan
        kebudayaan serta bertanggung jawab atas terlaksanananya tugas dan fungsi
        dinas
      </p>
    </main>
  );
}
export default DetailTugasFungsi;
