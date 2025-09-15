import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Clock, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import MoveBack from "@/hooks/MoveBack";

const News = () => {
  const allNews = [
    {
      id: 1,
      title: "Peluncuran Program Digitalisasi Sekolah 2024",
      excerpt:
        "Dinas Pendidikan Sultra meluncurkan program digitalisasi untuk 500 sekolah dalam rangka meningkatkan kualitas pembelajaran di era modern. Program ini mencakup pelatihan guru, penyediaan infrastruktur teknologi, dan pengembangan kurikulum digital.",
      date: "15 Desember 2024",
      time: "2 hari yang lalu",
      category: "Program",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=300&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Raih Prestasi Nasional, Siswa Sultra Juara Olimpiade Sains",
      excerpt:
        "Tim olimpiade sains dari Sulawesi Tenggara berhasil meraih medali emas pada kompetisi tingkat nasional yang berlangsung di Jakarta. Prestasi membanggakan ini merupakan hasil dari pembinaan intensif selama 6 bulan.",
      date: "12 Desember 2024",
      time: "5 hari yang lalu",
      category: "Prestasi",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop",
      featured: true,
    },
    {
      id: 3,
      title: "Workshop Peningkatan Kompetensi Guru di Era Digital",
      excerpt:
        "Lebih dari 1000 guru mengikuti workshop peningkatan kompetensi dalam memanfaatkan teknologi untuk pembelajaran modern. Workshop berlangsung selama 3 hari dengan materi praktis dan aplikatif.",
      date: "10 Desember 2024",
      time: "1 minggu yang lalu",
      category: "Pelatihan",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=300&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "Pembangunan 50 Ruang Kelas Baru di Kabupaten Konawe",
      excerpt:
        "Infrastruktur pendidikan terus ditingkatkan dengan pembangunan ruang kelas baru untuk mengatasi kekurangan fasilitas pembelajaran. Total investasi mencapai 15 miliar rupiah.",
      date: "8 Desember 2024",
      time: "1 minggu yang lalu",
      category: "Infrastruktur",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=300&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "Beasiswa Unggulan 2024 untuk Siswa Berprestasi",
      excerpt:
        "Program beasiswa unggulan kembali dibuka untuk siswa berprestasi di Sulawesi Tenggara. Total beasiswa yang tersedia mencapai 500 kuota dengan berbagai jenjang pendidikan.",
      date: "5 Desember 2024",
      time: "2 minggu yang lalu",
      category: "Beasiswa",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Pelaksanaan Ujian Nasional Berbasis Komputer 2024",
      excerpt:
        "Ujian Nasional Berbasis Komputer (UNBK) telah dilaksanakan di seluruh sekolah di Sulawesi Tenggara dengan tingkat partisipasi 98%. Pelaksanaan berjalan lancar tanpa kendala teknis berarti.",
      date: "1 Desember 2024",
      time: "2 minggu yang lalu",
      category: "Ujian",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=300&fit=crop",
      featured: false,
    },
    {
      id: 7,
      title:
        "Kerja Sama dengan Universitas Terkemuka untuk Program Dual Degree",
      excerpt:
        "Dinas Pendidikan Sultra menjalin kerja sama dengan beberapa universitas terkemuka untuk program dual degree bagi siswa berprestasi. Program ini memberikan kesempatan melanjutkan pendidikan tinggi.",
      date: "28 November 2024",
      time: "3 minggu yang lalu",
      category: "Kerjasama",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=300&fit=crop",
      featured: false,
    },
    {
      id: 8,
      title: "Festival Seni dan Budaya Sekolah Se-Sulawesi Tenggara",
      excerpt:
        "Festival seni dan budaya tingkat provinsi diikuti oleh 200 sekolah se-Sulawesi Tenggara. Acara ini bertujuan melestarikan budaya lokal dan mengembangkan kreativitas siswa.",
      date: "25 November 2024",
      time: "3 minggu yang lalu",
      category: "Event",
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=300&fit=crop",
      featured: false,
    },
  ];

  const categories = [
    "Semua",
    "Program",
    "Prestasi",
    "Pelatihan",
    "Infrastruktur",
    "Beasiswa",
    "Ujian",
    "Kerjasama",
    "Event",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Header Section */}
        <section
          className="relative py-12 sm:py-16 md:py-20 pt-20 text-white bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/tracking.jpg')" }}
        >
          {/* Overlay gradient biru transparan */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-600/60"></div>

          {/* Konten */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <button
                onClick={() => window.history.back()}
                className="flex items-center bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition"
              >
                <ArrowLeft className="w-5 h-5" />
                {/* Teks hanya tampil di layar >= sm */}
                <span className="hidden sm:inline ml-2">Kembali ke Beranda</span>
              </button>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full mb-3 sm:mb-4">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                <span className="text-xs sm:text-sm font-medium">Berita & Informasi</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                Semua Berita Terbaru
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
                Ikuti perkembangan terbaru seputar pendidikan di Sulawesi Tenggara
              </p>
            </div>
          </div>
        </section>




        {/* Filter Section */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Cari berita..." className="pl-10" />
                </div>
                <Select defaultValue="Semua">
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="text-sm text-muted-foreground">
                Menampilkan {allNews.length} berita
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allNews.map((item) => (
                <Card
                  key={item.id}
                  className="group hover:shadow-medium transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="secondary"
                        className="bg-government-blue/10 text-government-blue hover:bg-government-blue/20"
                      >
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.time}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-government-blue transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {item.date}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-government-blue hover:text-government-blue/80"
                      >
                        Baca Selengkapnya
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" className="px-8">
                Muat Lebih Banyak
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default News;
