import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [itemsPerView, setItemsPerView] = useState<number>(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedUnits: UnitKerja[] = [
    ...unitKerja,
    ...unitKerja.slice(0, itemsPerView),
  ];
  const totalSlides = unitKerja.length;

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, itemsPerView]);

  const handleNext = () => {
    if (currentIndex >= totalSlides) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(1);
      }, 50);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalSlides);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(totalSlides - 1);
      }, 50);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const translateValue = -(currentIndex * (100 / itemsPerView));

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
              Provinsi Sulawesi Tenggara, didalamnya menyebutkan bahwa "Dinas
              Pendidikan dan Kebudayaan mempunyai tugas membantu Gubernur
              melaksanakan urusan pemerintahan yang menjadi kewenangan daerah
              dan tugas pembantuan di bidang pendidikan dan kebudayaan."
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
            <h1 className="text-center capitalize font-bold text-government-blue text-lg sm:text-xl md:text-2xl mb-8">
              Tugas Pokok dan Fungsi Masing – Masing Unit Kerja
            </h1>

            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 sm:-ml-6 md:-ml-8 bg-gray-800 hover:bg-gray-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 sm:-mr-6 md:-mr-8 bg-gray-800 hover:bg-gray-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Carousel Container */}
              <div className="overflow-hidden px-2 sm:px-4">
                <div
                  className="flex"
                  style={{
                    transform: `translateX(${translateValue}%)`,
                    transition: isTransitioning
                      ? "transform 0.5s ease-in-out"
                      : "none",
                  }}
                >
                  {extendedUnits.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                      style={{ width: `${100 / itemsPerView}%` }}
                    >
                      <Link
                        to={`/profil/tugas-fungsi/${item.id}`}
                        className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full"
                      >
                        <div
                          className="w-full h-48 sm:h-56 md:h-64 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${item.image || AvatarImage})`,
                          }}
                        />
                        <div className="p-4">
                          <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 min-h-[3rem] line-clamp-2">
                            {item.nama || "Kantor Cabang Dinas"}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
                            {item.unit}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex % totalSlides
                        ? "w-8 h-2.5 bg-blue-900"
                        : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Info Text */}
            <div className="text-center mt-6 text-gray-500 text-sm">
              <p>
                Slide {(currentIndex % totalSlides) + 1} dari {totalSlides}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TugasFungsi;