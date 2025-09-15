import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight, Timer } from "lucide-react";
import { Link } from "react-router-dom";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Peluncuran Program Digitalisasi Sekolah 2024",
      excerpt: "Dinas Pendidikan Sultra meluncurkan program digitalisasi untuk 500 sekolah dalam rangka meningkatkan kualitas pembelajaran...",
      date: "15 Desember 2024",
      time: "2 hari yang lalu",
      category: "Program",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=240&fit=crop",
    },
    {
      id: 2,
      title: "Raih Prestasi Nasional, Siswa Sultra Juara Olimpiade Sains",
      excerpt: "Tim olimpiade sains dari Sulawesi Tenggara berhasil meraih medali emas pada kompetisi tingkat nasional yang berlangsung di Jakarta...",
      date: "12 Desember 2024",
      time: "5 hari yang lalu",
      category: "Prestasi",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=240&fit=crop",
    },
    {
      id: 3,
      title: "Workshop Peningkatan Kompetensi Guru di Era Digital",
      excerpt: "Lebih dari 1000 guru mengikuti workshop peningkatan kompetensi dalam memanfaatkan teknologi untuk pembelajaran modern...",
      date: "10 Desember 2024",
      time: "1 minggu yang lalu",
      category: "Pelatihan",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=240&fit=crop",
    },
    {
      id: 4,
      title: "Pembangunan 50 Ruang Kelas Baru di Kabupaten Konawe",
      excerpt: "Infrastruktur pendidikan terus ditingkatkan dengan pembangunan ruang kelas baru untuk mengatasi kekurangan fasilitas pembelajaran...",
      date: "8 Desember 2024",
      time: "1 minggu yang lalu",
      category: "Infrastruktur",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=240&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-government-blue/10 rounded-full mb-4">
            <CalendarDays className="w-4 h-4 text-government-blue mr-2" />
            <span className="text-sm font-medium text-government-blue">Berita Terbaru</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Informasi & Berita Terkini
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ikuti perkembangan terbaru seputar pendidikan di Sulawesi Tenggara
          </p>
        </div>

        {/* Featured News */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Berita utama - ambil 2 kolom */}
  <Card className="lg:col-span-2 shadow-md rounded-2xl overflow-hidden">
    <div className="w-full h-64 overflow-hidden">
      <img
        src={news[0].image}
        alt={news[0].title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2 line-clamp-2">
        {news[0].title}
      </h2>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Timer className="w-4 h-4" /> {news[0].time}
        </span>
        <span className="flex items-center gap-1">📅 {news[0].date}</span>
      </div>

      <p className="text-muted-foreground mb-4 line-clamp-3">
        {news[0].excerpt}
      </p>

      <div className="flex items-center gap-3">
        <Button variant="default" className="bg-gradient-to-r from-blue-600 to-green-400">
          Selengkapnya
        </Button>
      </div>
    </div>
  </Card>

  {/* Berita lainnya */}
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Berita Lainnya</h3>
    {news.slice(1, 4).map((item) => (
      <Card
        key={item.id}
        className="flex items-start gap-3 p-4 shadow-sm rounded-xl"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 rounded-md object-cover"
        />
        <div>
          <h4 className="font-medium text-sm line-clamp-2">
            {item.title}
          </h4>
          <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {item.excerpt}
          </p>
        </div>
      </Card>
    ))}
<div className="">
    <Button
      asChild
      className="w-full bg-gradient-to-r from-government-blue via-education-green to-green-400 text-white hover:opacity-90"
    >
      <Link to="/news">
        Lihat Semua Berita
      </Link>
    </Button>
  </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default NewsSection;