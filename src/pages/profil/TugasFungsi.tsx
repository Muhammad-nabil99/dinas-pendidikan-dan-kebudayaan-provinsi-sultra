import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const fungsiDinas = [
  "Perumusan kebijakan teknis dan operasional di bidang pendidikan dan kebudayaan sesuai dengan kewenangan",
  "Penyelenggaraan urusan pemerintahan dan pelayanan umum di bidang pendidikan dan kebudayaan",
  "Pelaksanaan koordinasi dan sinkronisasi kebijakan teknis operasional program pendidikan dan kebudayaan antar kabupaten/kota dalam daerah",
  "Pelaksanaan fungsi lain yang diberikan oleh Gubernur sesuai tugas dan fungsi dinas",
];

type UnitKerja = {
  nama: string;
  unit: string;
  id: string;
};
const unitKerja: UnitKerja[] = [
  {
    nama: "nama",
    unit: "Kepala Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara",
    id: "kepala-dinas",
  },
  {
    nama: "nama",
    unit: "Sekretaris",
    id: "sekretaris",
  },
  {
    nama: "nama",
    unit: "Bidang Perencanaan dan Penganggaran",
    id: "bidang-perencanaan-dan-penganggaran",
  },
  {
    nama: "nama",
    unit: "Bidang Pembinaan Sekolah Menengah Atas",
    id: "bidang-pembinaan-sekolah-menengah-atas",
  },
  {
    nama: "nama",
    unit: "Bidang Pembinaan Sekolah Menengah Kejuruan dan Pendidikan Khusus-Layanan Khusus",
    id: "bidang-pembinaan-sekolah-menengah-kejuruan-dan-pendidikan-khusus-layanan-khusus",
  },
  {
    nama: "nama",
    unit: "Bidang Pembinaan Guru dan Ketenagaan",
    id: "bidang-pembinaan-guru-dan-ketenagaan",
  },
  {
    nama: "nama",
    unit: "Bidang Kebudayaan",
    id: "bidang-kebudayaan",
  },
  {
    nama: "nama",
    unit: "Unit Pelaksana Teknis Dinas (UPTD)",
    id: "unit-pelaksana-teknis-dinas-uptd",
  },
];

const TugasFungsi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselSpeed = 3000; // 3 detik
  const unitsToShow = 3;

  // Duplikat 3 item pertama untuk menciptakan efek loop yang mulus.
  const displayedUnits = [...unitKerja, ...unitKerja.slice(0, unitsToShow)];

  useEffect(() => {
    const timer = setInterval(() => {
      // Tingkatkan indeks tanpa operator modulo
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, carouselSpeed);

    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    // Ketika transisi selesai dan indeks mencapai akhir dari array unitKerja asli,
    // segera kembali ke awal tanpa transisi.
    if (currentIndex >= unitKerja.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    // Setelah reset, aktifkan kembali transisi untuk animasi berikutnya.
    if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  }, [isTransitioning]);

  const carouselTransformStyle = {
    transform: `translateX(-${(100 / unitsToShow) * currentIndex}%)`,
    transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
    width: `${(displayedUnits.length / unitsToShow) * 27}%`,
  };

  return (
    <main className="container mx-auto px-4 py-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-government-blue ">
            Tugas Pokok & Fungsi
          </h1>
          <p className=" text-muted-foreground text-md my-1.5">
            Peran dan Tanggung Jawab Dinas Pendidikan
          </p>
          <p className="my-5">
            Dinas Pendidikan Dan Kebudayaan Provinsi Sulawesi Tenggara adalah
            salah satu Dinas Daerah di lingkungan Pemerintah Provinsi Sulawesi
            Tenggara yang merupakan unsur pelaksana otonomi daerah, dipimpin
            oleh seorang Kepala Dinas yang berada di bawah dan bertanggung jawab
            kepada Gubernur melalui Sekretaris Daerah.
          </p>
        </div>

        <div>
          <h1 className="my-10 text-2xl text-center capitalize font-bold text-government-blue mb-4">
            Tugas
          </h1>
          <p className="text-center">
            Berdasarkan Peraturan Daerah Provinsi Sulawesi Tenggara nomor 13
            Tahun 2016, tentang Pembentukan dan Susunan Perangkat Daerah
            Provinsi Provinsi Sulawesi Tenggara, didalamnya menyebutkan bahwa
            “Dinas Pendidikan dan Kebudayaan mempunyai tugas membantu Gubernur
            melaksanakan urusan pemerintahan yang menjadi kewenangan daerah dan
            tugas pembantuan di bidang pendidikan dan kebudayaan.”
          </p>
        </div>
        <div>
          <h1 className="my-10 text-2xl text-center capitalize font-bold text-government-blue mb-4">
            Fungsi
          </h1>
          <p className="text-center">
            Untuk menyelenggarakan tugas sebagaimana dimaksud di atas Dinas
            Pendidikan Dan Kebudayaan Provinsi Sulawesi Tenggara memiliki fungsi
          </p>
          <ol className="my-5 ml-10">
            {fungsiDinas?.map((item, index) => (
              <li key={index} className="py-1">
                {index + 1}. {item}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h1 className="my-20 text-4xl text-center capitalize font-bold text-government-blue mb-4">
            Tugas pokok dan fungsi masing – masing unit kerja
          </h1>
          <div className="overflow-hidden">
            <div
              className="flex"
              style={carouselTransformStyle}
              onTransitionEnd={handleTransitionEnd}
            >
              {displayedUnits.map((item, index) => (
                <Link
                  to={`/profil/tugas-fungsi/${item.id}`}
                  key={`${item.id}-${index}`} // Menggunakan kunci unik untuk menghindari masalah duplikasi
                  className="text-center flex-shrink-0 flex-grow-0 basis-1/3 flex flex-col gap-2 p-4"
                >
                  <div className="w-full h-60 rounded-md bg-gray-300"></div>
                  <h1 className="font-bold capitalize">{item.nama}</h1>
                  <h2>{item.unit}</h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TugasFungsi;
