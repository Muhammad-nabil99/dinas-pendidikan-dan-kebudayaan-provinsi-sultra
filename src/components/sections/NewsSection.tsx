import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import berita1 from "../../assets/berita-1.png";
import berita2 from "../../assets/berita-2.png";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Sinergi Kemendikbudristek dan Pemerintah Daerah dalam Membangun Ekosistem Pendidikan Digital",
      excerpt:
        "Dalam rangka memperkuat sinergi dengan pemerintah daerah terkait pemanfaatan platform teknologi pendidikan di tahun 2024...",
      date: "15 Desember 2024",
      time: "2 hari yang lalu",
      category: "Program",
      image: berita1,
    },
    {
      id: 2,
      title: "Ribuan Pelajar SMA dan SMK Sulawesi Tenggara Bentangkan Bendera Merah Putih sepanjang 17 Kilometer untuk Memperingati Kemerdekaan RI ke-78",
      excerpt:
        "Ribuan pelajar dari berbagai Sekolah Menengah Atas (SMA) dan Sekolah Menengah Kejuruan (SMK) di Sulawesi Tenggara mengambil bagian dalam aksi patriotik",
      date: "12 Desember 2024",
      time: "5 hari yang lalu",
      category: "Prestasi",
      image: berita2,
    },
    {
      id: 3,
      title: "Workshop Peningkatan Kompetensi Guru di Era Digital",
      excerpt:
        "Lebih dari 1000 guru mengikuti workshop peningkatan kompetensi dalam memanfaatkan teknologi untuk pembelajaran modern...",
      date: "10 Desember 2024",
      time: "1 minggu yang lalu",
      category: "Pelatihan",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=240&fit=crop",
    },
    {
      id: 4,
      title: "Pembangunan 50 Ruang Kelas Baru di Kabupaten Konawe",
      excerpt:
        "Infrastruktur pendidikan terus ditingkatkan dengan pembangunan ruang kelas baru untuk mengatasi kekurangan fasilitas pembelajaran...",
      date: "8 Desember 2024",
      time: "1 minggu yang lalu",
      category: "Infrastruktur",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=240&fit=crop",
    },
    {
      id: 5,
      title: "Beasiswa Unggulan 2024 untuk Siswa Berprestasi",
      excerpt:
        "Program beasiswa unggulan kembali dibuka untuk siswa berprestasi...",
      date: "5 Desember 2024",
      time: "2 minggu yang lalu",
      category: "Beasiswa",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-government-blue/10 rounded-full mb-4">
            <CalendarDays className="w-4 h-4 text-government-blue mr-2" />
            <span className="text-sm font-medium text-government-blue">
              Berita Terbaru
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Informasi & Berita Terkini
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ikuti perkembangan terbaru seputar pendidikan di Sulawesi Tenggara
          </p>
        </div>

        {/* Featured News */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Berita Utama */}
          <Card className="lg:col-span-3 shadow-md rounded-2xl overflow-hidden">
            {/* Gambar besar */}
            <div className="w-full h-96 relative overflow-hidden">
              <img
                src={news[0].image}
                alt={news[0].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten menempel rapat di bawah gambar */}
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-2xl font-bold line-clamp-2">
                {news[0].title}
              </h2>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Timer className="w-4 h-4" /> {news[0].time}
                </span>
                <span className="flex items-center gap-1">
                  📅 {news[0].date}
                </span>
              </div>

              <p className="text-muted-foreground line-clamp-3">
                {news[0].excerpt}
              </p>

              <div className="mt-2">
                <Link to={`/berita/${news[0].id}`}>
                  <Button
                    variant="default"
                    className="bg-gradient-to-r from-blue-600 to-green-400"
                  >
                    Selengkapnya
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Berita Lainnya */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {news.slice(1, 5).map((item) => (
              <Card
                key={item.id}
                // className="flex flex-col p-4 shadow-sm rounded-xl h-full"
                className="flex flex-col p-4 shadow-sm rounded-xl h-full bg-white/20 backdrop-blur-md border border-blue/30"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 rounded-md object-cover mb-3"
                />
                <div className="flex-1">
                  <Link to={`/berita/${item.id}`}>
                    <h4 className="font-medium text-sm line-clamp-2 mb-1">
                      {item.title}
                    </h4>
                  </Link>
                  <p className="text-xs text-muted-foreground mb-1">
                    {item.date}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </Card>
            ))}

            <Button
              asChild
              className="col-span-2 w-full bg-gradient-to-r from-government-blue via-education-green to-green-400 text-white hover:opacity-90 mt-2"
            >
              <Link to="/berita">Lihat Semua Berita</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
