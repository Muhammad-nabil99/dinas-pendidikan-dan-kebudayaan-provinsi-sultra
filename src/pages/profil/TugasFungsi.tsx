import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import BgImage from "@/assets/tracking.jpg";
import AvatarImage from "@/assets/avatar.png";

const fungsiDinas: string[] = [
  "Perumusan kebijakan teknis dan operasional di bidang pendidikan dan kebudayaan sesuai dengan kewenangan",
  "Penyelenggaraan urusan pemerintahan dan pelayanan umum di bidang pendidikan dan kebudayaan",
  "Pelaksanaan koordinasi dan sinkronisasi kebijakan teknis operasional program pendidikan dan kebudayaan antar kabupaten/kota dalam daerah",
  "Pelaksanaan fungsi lain yang diberikan oleh Gubernur sesuai tugas dan fungsi dinas",
];

type UnitKerja = {
  image?: string;
  nama: string;
  unit: string;
  id: string;
};

const unitKerja: UnitKerja[] = [
  {
    image: AvatarImage,
    nama: "Prof. Dr. Aris, S.Pd., M.Hum.",
    unit: "Kepala Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara",
    id: "kepala-dinas",
  },
  {
    image: AvatarImage,
    nama: "Hj. Suhaeny, SE., M.Pd.",
    unit: "Sekretaris Dinas",
    id: "sekretaris",
  },
  {
    image: AvatarImage,
    nama: "Amriana, SE., M.Si.",
    unit: "Bidang Perencanaan dan Penganggaran",
    id: "bidang-perencanaan-dan-penganggaran",
  },
  {
    image: AvatarImage,
    nama: "Dra. Hj. Ila Nasra Nusuha, M.Pd.",
    unit: "Bidang Pembinaan Sekolah Menengah Atas",
    id: "bidang-pembinaan-sekolah-menengah-atas",
  },
  {
    image: AvatarImage,
    nama: "Johanis Hengkengkona, S.Sos., M.A.P",
    unit: "Bidang Pembinaan Sekolah Menengah Kejuruan dan Pendidikan Khusus-Layanan Khusus",
    id: "bidang-pembinaan-sekolah-menengah-kejuruan-dan-pendidikan-khusus-layanan-khusus",
  },
  {
    image: AvatarImage,
    nama: "Husrin Haji Hamid, S.Pd.",
    unit: "Bidang Pembinaan Guru dan Ketenagaan",
    id: "bidang-pembinaan-guru-dan-ketenagaan",
  },
  {
    image: AvatarImage,
    nama: "Murniati Asmar Lio, SE.",
    unit: "Bidang Kebudayaan",
    id: "bidang-kebudayaan",
  },
  {
    image: AvatarImage,
    nama: "H. Jasfol Sambo, SE.",
    unit: "Unit Pelaksana Teknis Dinas (UPTD)",
    id: "unit-pelaksana-teknis-dinas-uptd",
  },
  {
    nama: "",
    unit: "Kantor Cabang Dinas (KCD)",
    id: "kantor-cabang-dinas",
  },
];

const TugasFungsi = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const carouselSpeed: number = 3000;
  const [unitsToShow, setUnitsToShow] = useState<number>(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setUnitsToShow(1);
      } else if (window.innerWidth < 768) {
        setUnitsToShow(2);
      } else {
        setUnitsToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedUnits: UnitKerja[] = [
    ...unitKerja,
    ...unitKerja.slice(0, unitsToShow),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % displayedUnits.length);
    }, carouselSpeed);

    return () => clearInterval(timer);
  }, [displayedUnits.length, carouselSpeed]);

  const handleNextClick = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayedUnits.length);
  };

  const handlePrevClick = (): void => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + displayedUnits.length) % displayedUnits.length
    );
  };

  const handleTransitionEnd = (): void => {
    if (currentIndex >= unitKerja.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  }, [isTransitioning]);

  const carouselTransformStyle: React.CSSProperties = {
    transform: `translateX(-${(100 / unitsToShow) * currentIndex}%)`,
    transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
    width: `${(displayedUnits.length / unitsToShow) * 27}%`,
  };

  return (
    <>
      {/* Hero Section dengan Background */}
      <section
        className="relative py-20 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Kembali ke Beranda</span>
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full mb-3 sm:mb-4">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              <span className="text-xs sm:text-sm font-medium">
                Profil & Fungsi
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              Tugas Pokok & Fungsi
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
              Peran dan Tanggung Jawab Dinas Pendidikan Provinsi Sulawesi
              Tenggara
            </p>
          </div>
        </div>
      </section>

      {/* Konten */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className="my-10 text-2xl text-center capitalize font-bold text-government-blue mb-4">
              Tugas
            </h1>
            <p>
              Berdasarkan Peraturan Daerah Provinsi Sulawesi Tenggara nomor 13
              Tahun 2016, tentang Pembentukan dan Susunan Perangkat Daerah
              Provinsi Sulawesi Tenggara, didalamnya menyebutkan bahwa “Dinas
              Pendidikan dan Kebudayaan mempunyai tugas membantu Gubernur
              melaksanakan urusan pemerintahan yang menjadi kewenangan daerah
              dan tugas pembantuan di bidang pendidikan dan kebudayaan.”
            </p>
          </div>

          <div>
            <h1 className="my-10 text-2xl text-center capitalize font-bold text-government-blue mb-4">
              Fungsi
            </h1>
            <p className="text-center">
              Untuk menyelenggarakan tugas sebagaimana dimaksud di atas Dinas
              Pendidikan Dan Kebudayaan Provinsi Sulawesi Tenggara memiliki
              fungsi
            </p>
            <ol className="my-5 ml-10">
              {fungsiDinas?.map((item, index) => (
                <li key={index} className="py-1">
                  {index + 1}. {item}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10">
            <h1 className="text-center capitalize font-bold text-government-blue text-lg sm:text-xl md:text-2xl mb-4">
              Tugas Pokok dan Fungsi Masing – Masing Unit Kerja
            </h1>

            <div className="flex items-center justify-center gap-3 sm:gap-6">
              {/* Prev Button */}
              <button
                onClick={handlePrevClick}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 text-white p-2 rounded-full shadow-lg active:scale-90 transition-transform"
              >
                &lt;
              </button>

              {/* Carousel Container */}
              <div className="flex overflow-hidden w-full max-w-6xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={carouselTransformStyle}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {displayedUnits.map((item, index) => (
                    <Link
                      to={`/profil/tugas-fungsi/${item.id}`}
                      key={`${item.id}-${index}`}
                      className="text-center flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 md:basis-1/3 flex flex-col gap-2 p-3 sm:p-4"
                    >
                      <div
                        className="bg w-full h-48 sm:h-56 md:h-60 bg-cover bg-center rounded-md shadow-md"
                        style={{ backgroundImage: `url(${AvatarImage}) ` }}
                      ></div>
                      <h1 className="font-bold capitalize text-base sm:text-lg md:text-xl">
                        {item.nama}
                      </h1>
                      <h2 className="text-sm sm:text-base text-gray-700">
                        {item.unit}
                      </h2>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextClick}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 text-white p-2 rounded-full shadow-lg active:scale-90 transition-transform"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TugasFungsi;
