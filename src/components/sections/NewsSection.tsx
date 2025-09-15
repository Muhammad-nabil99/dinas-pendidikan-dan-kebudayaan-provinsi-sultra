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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={news[0].image}
                alt={news[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="inline-block px-3 py-1 bg-government-blue/10 text-government-blue text-xs font-medium rounded-full">
                  {news[0].category}
                </span>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Timer className="w-4 h-4 mr-1" />
                  {news[0].time}
                </div>
              </div>
              <CardTitle className="text-xl mb-2 group-hover:text-government-blue transition-colors">
                {news[0].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{news[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{news[0].date}</span>
                <Button variant="ghost" size="sm" className="group/btn">
                  <span>Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {news.slice(1, 4).map((item) => (
              <Card key={item.id} className="group hover:shadow-soft transition-all duration-300">
                <div className="flex">
                  <div className="w-32 h-24 flex-shrink-0 overflow-hidden rounded-l-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block px-2 py-1 bg-education-green/10 text-education-green text-xs font-medium rounded">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.time}</span>
                    </div>
                    <h3 className="font-semibold text-sm mb-2 group-hover:text-government-blue transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      {item.excerpt}
                    </p>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/news">
            <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
              <span>Lihat Semua Berita</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;