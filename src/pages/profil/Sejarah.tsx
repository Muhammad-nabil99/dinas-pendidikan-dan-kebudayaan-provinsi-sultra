import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Landmark, MapPin } from "lucide-react";
import { Calendar, ArrowLeft, Clock, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Sejarah = () => {
  return (
    <main>
  {/* Hero Section */}
  <section
    className="relative py-20 text-white bg-cover bg-center"
    style={{ backgroundImage: "url('/src/assets/tracking.jpg')" }}
  >
    {/* Overlay warna biru dengan opacity */}
    <div className="absolute inset-0 bg-blue-900/70"></div>

    {/* Konten */}
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
            Profil & Sejarah
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
          Sejarah Dinas Pendidikan
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
          Perjalanan Panjang Membangun Pendidikan Sulawesi Tenggara
        </p>
      </div>
    </div>
  </section>

  {/* Isi Konten */}
  <section className="container mx-auto px-4 py-12">
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-6">
          {/* Profil Provinsi */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <MapPin className="mr-2 text-government-blue" /> Profil Provinsi
              Sulawesi Tenggara
            </h2>
            <p className="mb-4 text-justify leading-relaxed">
              Sulawesi Tenggara merupakan sebuah provinsi di Indonesia yang
              terletak di bagian tenggara pulau Sulawesi dengan ibukota Kendari.
              Provinsi ini terletak di Jazirah Tenggara Pulau Sulawesi, secara
              geografis terletak di bagian selatan garis khatulistiwa di antara
              02°45' – 06°15' Lintang Selatan dan 120°45' – 124°30' Bujur Timur.
            </p>
            <p className="text-justify leading-relaxed">
              Wilayahnya mempunyai luas daratan 38.140 km² (3.814.000 ha) dan
              perairan (laut) seluas 110.000 km² (11.000.000 ha). Sulawesi
              Tenggara awalnya merupakan nama salah satu kabupaten di Provinsi
              Sulawesi Selatan dan Tenggara dengan Baubau sebagai ibukota
              kabupaten. Provinsi ini ditetapkan sebagai Daerah Otonom
              berdasarkan Perpu No. 2 tahun 1964 Juncto UU No. 13 Tahun 1964.
            </p>
          </section>

          {/* Masa Kesultanan */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Landmark className="mr-2 text-government-blue" /> Masa Kesultanan
              dan Kerajaan
            </h2>
            <p className="mb-4 text-justify leading-relaxed">
              Pada masa pemerintahan Negara Kesultanan – Kerajaan Nusantara
              hingga terbentuknya Kabupaten Sulawesi Tenggara pada tahun 1952,
              wilayah ini sebelumnya merupakan <i>Onderafdeling</i> (istilah
              Belanda untuk wilayah administratif setingkat kawedanan).
              <i>Onderafdeling</i> ini kemudian dikenal dengan sebutan{" "}
              <i>Onderafdeling Boeton Laiwoi</i> dengan pusat Pemerintahannya di
              Bau-Bau.
            </p>
            <p className="mb-4 text-justify leading-relaxed">
              <i>Onderafdeling Boeton Laiwui</i> terdiri dari: <i>Afdeling
              Boeton</i>, <i>Afdeling Muna</i>, dan <i>Afdeling Laiwui</i>.
              Status ini diberikan oleh pemerintah Hindia Belanda kepada
              daerah-daerah yang memiliki kekuasaan asli dan kedaulatan yang
              dihormati.
            </p>
            <p className="text-justify leading-relaxed">
              Pada waktu itu, <i>Afdeling Kolaka</i> berada di bawah{" "}
              <i>Onderafdeling Luwu</i> (Sulawesi Selatan). Dengan Peraturan
              Pemerintah No. 34 Tahun 1952, Sulawesi Tenggara menjadi satu
              kabupaten, yaitu Kabupaten Sulawesi Tenggara dengan ibu kotanya
              Baubau.
            </p>
          </section>

          {/* Masa Orde Lama */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <History className="mr-2 text-government-blue" /> Masa Orde Lama
              (1964)
            </h2>
            <p className="mb-4 text-justify leading-relaxed">
              Selanjutnya, dengan Undang-Undang No. 29 Tahun 1959, Kabupaten
              Sulawesi Tenggara dimekarkan menjadi empat kabupaten, yaitu:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4 pl-4 text-gray-700">
              <li>Kabupaten Buton</li>
              <li>Kabupaten Kendari</li>
              <li>Kabupaten Kolaka</li>
              <li>Kabupaten Muna</li>
            </ul>
            <p className="mb-4 text-justify leading-relaxed">
              Keempat daerah tersebut merupakan bagian dari Provinsi Sulawesi
              Selatan dan Tenggara. Sulitnya komunikasi dan gangguan DI/TII pada
              masa itu sangat menghambat pelaksanaan tugas pemerintahan dan
              pembangunan. Atas pertimbangan ini, tokoh-tokoh masyarakat
              Sulawesi Tenggara membentuk Panitia Penuntut Daerah Otonom Tingkat
              I untuk memperjuangkan pembentukan daerah otonom di Jakarta.
            </p>
            <p className="text-justify leading-relaxed">
              Cita-cita rakyat Sulawesi Tenggara tercapai dengan keluarnya Perpu
              No. 2 Tahun 1964, yang menetapkan Sulawesi Tenggara sebagai
              Daerah Otonom Tingkat I dengan ibukotanya Kendari. Realisasi
              pembentukan ini dilakukan pada tanggal 27 April 1964, yang
              diperingati sebagai hari lahirnya Provinsi Daerah Tingkat I
              Sulawesi Tenggara.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  </section>
</main>

  );
};

export default Sejarah;
