import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Landmark, MapPin } from "lucide-react";

const Sejarah = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-government-blue mb-4">
            Sejarah Dinas Pendidikan
          </h1>
          <p className="text-muted-foreground text-lg">
            Perjalanan Panjang Membangun Pendidikan Sulawesi Tenggara
          </p>
        </div>

        <Card >
          <CardContent className="p-6">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <MapPin className="mr-2 text-government-blue" /> Profil Provinsi
                Sulawesi Tenggara
              </h2>
              <p className="mb-4 text-justify leading-relaxed">
                Sulawesi Tenggara merupakan sebuah provinsi di Indonesia yang
                terletak di bagian tenggara pulau Sulawesi dengan ibukota
                Kendari. Provinsi ini terletak di Jazirah Tenggara Pulau
                Sulawesi, secara geografis terletak di bagian selatan garis
                khatulistiwa di antara $02°45'$ – $06°15'$ Lintang Selatan dan
                $120°45'$ – $124°30'$ Bujur Timur.
              </p>
              <p className="text-justify leading-relaxed">
                Wilayahnya mempunyai luas daratan $38.140 km²$ ($3.814.000$ ha)
                dan perairan (laut) seluas $110.000 km²$ ($11.000.000$ ha).
                Sulawesi Tenggara awalnya merupakan nama salah satu kabupaten di
                Provinsi Sulawesi Selatan dan Tenggara dengan Baubau sebagai
                ibukota kabupaten. Provinsi ini ditetapkan sebagai Daerah Otonom
                berdasarkan Perpu No. 2 tahun 1964 Juncto UU No. 13 Tahun 1964.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Landmark className="mr-2 text-government-blue" /> Masa Kesultanan
                dan Kerajaan
              </h2>
              <p className="mb-4 text-justify leading-relaxed">
                Pada masa pemerintahan Negara Kesultanan – Kerajaan Nusantara
                hingga terbentuknya Kabupaten Sulawesi Tenggara pada tahun 1952,
                wilayah ini sebelumnya merupakan *Onderafdeling* (istilah
                Belanda untuk wilayah administratif setingkat kawedanan).
                Onderafdeling ini kemudian dikenal dengan sebutan *Onderafdeling
                Boeton Laiwoi* dengan pusat Pemerintahannya di Bau-Bau.
              </p>
              <p className="mb-4 text-justify leading-relaxed">
                *Onderafdeling Boeton Laiwui* terdiri dari: *Afdeling Boeton*,
                *Afdeling Muna*, dan *Afdeling Laiwui*. Status ini diberikan
                oleh pemerintah Hindia Belanda kepada daerah-daerah yang
                memiliki kekuasaan asli dan kedaulatan yang dihormati,
                menunjukkan bahwa daerah ini bukanlah jajahan murni, melainkan
                memiliki hubungan dominasi dengan Belanda.
              </p>
              <p className="mb-4 text-justify leading-relaxed">
                Pada waktu itu, *Afdeling Kolaka* berada di bawah *Onderafdeling
                Luwu* (Sulawesi Selatan). Dengan Peraturan Pemerintah No. 34
                Tahun 1952, Sulawesi Tenggara menjadi satu kabupaten, yaitu
                Kabupaten Sulawesi Tenggara dengan ibu kotanya Baubau.
              </p>
            </section>

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
                Selatan dan Tenggara. Sulitnya komunikasi dan gangguan DI/TII
                pada masa itu sangat menghambat pelaksanaan tugas pemerintahan
                dan pembangunan. Atas pertimbangan ini, tokoh-tokoh masyarakat
                Sulawesi Tenggara membentuk Panitia Penuntut Daerah Otonom
                Tingkat I untuk memperjuangkan pembentukan daerah otonom di
                Jakarta.
              </p>
              <p className="text-justify leading-relaxed">
                Cita-cita rakyat Sulawesi Tenggara tercapai dengan keluarnya
                Perpu No. 2 Tahun 1964, yang menetapkan Sulawesi Tenggara
                sebagai Daerah Otonom Tingkat I dengan ibukotanya Kendari.
                Realisasi pembentukan ini dilakukan pada tanggal 27 April 1964,
                yang diperingati sebagai hari lahirnya Provinsi Daerah Tingkat I
                Sulawesi Tenggara.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Sejarah;
