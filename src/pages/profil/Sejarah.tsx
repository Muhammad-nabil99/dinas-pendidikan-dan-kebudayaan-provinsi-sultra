import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Landmark, MapPin } from "lucide-react";
import { Calendar, ArrowLeft, Clock, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BgImage from "@/assets/tracking.jpg";

const Sejarah = () => {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative py-20 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImage})` }}
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
                  {/* <MapPin className="mr-2 text-government-blue" /> */}
                  Sejarah Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi
                  Tenggara
                </h2>
                <p className="mb-4 text-justify leading-relaxed">
                  Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara
                  merupakan perangkat daerah yang memiliki peran strategis dalam
                  mengelola, mengembangkan, dan meningkatkan mutu pendidikan
                  serta pelestarian kebudayaan di wilayah Sulawesi Tenggara.
                </p>
                <p className="mb-4 text-justify leading-relaxed">
                  Awal mula penyelenggaraan urusan pendidikan di Sulawesi
                  Tenggara tidak terlepas dari terbentuknya Provinsi Sulawesi
                  Tenggara pada tanggal 27 April 1964 berdasarkan Undang-Undang
                  Nomor 13 Tahun 1964. Seiring dengan terbentuknya pemerintahan
                  daerah, dibentuk pula struktur kelembagaan yang menangani
                  urusan pendidikan dan kebudayaan.
                </p>
                <p className="mb-4 text-justify leading-relaxed">
                  Pada masa-masa awal, urusan pendidikan di tingkat provinsi
                  masih bersifat koordinatif dengan pemerintah pusat. Seiring
                  perkembangan otonomi daerah melalui Undang-Undang Nomor 22
                  Tahun 1999 dan penyempurnaannya dalam Undang-Undang Nomor 32
                  Tahun 2004 tentang Pemerintahan Daerah, kewenangan di bidang
                  pendidikan semakin diperluas.
                </p>
                <p className="mb-4 text-justify leading-relaxed">
                  Selanjutnya, berdasarkan Peraturan Daerah Provinsi Sulawesi
                  Tenggara tentang Organisasi Perangkat Daerah, dibentuklah
                  Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara
                  yang memiliki tugas pokok membantu Gubernur dalam melaksanakan
                  urusan pemerintahan di bidang pendidikan dan kebudayaan.
                </p>
                <p className="mb-4 text-justify leading-relaxed">
                  Dalam perjalanannya, Dinas Pendidikan dan Kebudayaan Provinsi
                  Sulawesi Tenggara mengalami beberapa perubahan struktur
                  organisasi sesuai dengan dinamika regulasi nasional, antara
                  lain:
                </p>
                <ol className="py-2 px-5 flex flex-col gap-3 list-decimal list-inside">
                  <li>
                    Penyesuaian struktur organisasi pada tahun 2008 pasca
                    terbitnya PP Nomor 41 Tahun 2007 tentang Organisasi
                    Perangkat Daerah.
                  </li>
                  <li>
                    Penyempurnaan struktur organisasi tahun 2016 berdasarkan
                    Peraturan Pemerintah Nomor 18 Tahun 2016 tentang Perangkat
                    Daerah yang menegaskan urusan pendidikan menengah dan
                    kebudayaan menjadi kewenangan provinsi.
                  </li>
                  <li>
                    Penyesuaian nomenklatur dan tata kerja melalui Peraturan
                    Gubernur Sulawesi Tenggara yang menata kembali
                    bidang-bidang, sekretariat, serta Unit Pelaksana Teknis
                    Dinas (UPTD).
                  </li>
                </ol>
                <p className="mb-4 text-justify leading-relaxed">
                  Hingga kini, Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi
                  Tenggara terus berkomitmen untuk meningkatkan mutu layanan
                  pendidikan, memperluas akses, serta menjaga dan melestarikan
                  kekayaan budaya daerah sebagai bagian dari identitas bangsa.
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
