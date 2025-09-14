import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

function DetailTugasFungsi() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
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
          kebudayaan serta bertanggung jawab atas terlaksanananya tugas dan
          fungsi dinas
        </p>
      </main>
      <Footer />
    </div>
  );
}
export default DetailTugasFungsi;
