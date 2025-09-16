import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
} from "lucide-react";

import berita1 from "../../assets/berita-1.png";
import berita2 from "../../assets/berita-2.png";

const DetailBerita = () => {
  const { id } = useParams();

  // Sample news data (in real app, this would come from API/database)
  const allNews = [
    {
      id: 1,
      title:
        "Sinergi Kemendikbudristek dan Pemerintah Daerah dalam Membangun Ekosistem Pendidikan Digital",
      excerpt:
        "Sinergi Kemendikbudristek dan Pemerintah Daerah dalam Membangun Ekosistem Pendidikan Digital.",
      content: `
      <p>Dalam rangka memperkuat sinergi dengan pemerintah daerah terkait pemanfaatan platform teknologi pendidikan di tahun 2024, Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) melalui Balai Layanan Platform Teknologi (BLPT), Pusat Data dan Teknologi Informasi (Pusdatin) menyelenggarakan rapat koordinasi bertajuk “Berkobar (Berkolaborasi dan Berbagi) Membangun Sinergi Ekosistem Digital Pendidikan BLPT x Pemerintah Daerah” pada 28 s.d. 31 Mei di Bandung, Jawa Barat.</p>
      <p>Adapun unsur pemerintah daerah yang terlibat dalam kegiatan, yaitu Dinas Pendidikan di 38 provinsi, Unit Pelaksana Teknis Daerah (UPTD) di lingkungan Kemendikbudristek, dan Balai Teknologi Informasi Komunikasi Pendidikan (BTIKP) di masing-masing daerah.</p>
      <p>Salah satu pilar dalam menyediakan akses pendidikan berkualitas adalah ekosistem pendidikan digital. Untuk itu, Kemendikbudristek berkomitmen penuh dalam optimalisasi pemanfaatan platform teknologi pendidikan, di antaranya akun belajar.id, Platform Merdeka Mengajar (PMM), Rapor Pendidikan, SIPLah dan ARKAS, serta Platform Kampus Merdeka untuk pendidikan tinggi.</p>
      <p>Kegiatan secara resmi dibuka oleh Sekretaris Jenderal Kemendikbudristek, Suharti. Ia menekankan pentingnya sinergi ini untuk pemetaan program pendidikan Indonesia. “Dengan mengoptimalkan pemanfaatan platform teknologi dan data pendidikan, kita dapat meningkatkan kualitas pendidikan...,” ujar Suharti.</p>
      <p>Berbagai transformasi pendidikan yang dilakukan oleh Kemendikbudristek ditujukan untuk pemerataan akses, peningkatan kualitas, dan tata kelola. Hal tersebut perlu dukungan penguatan platform teknologi.</p>
    `,
      date: "15 Desember 2024",
      time: "2 hari yang lalu",
      category: "Program",
      image: berita1,
      author: "Tim Redaksi Disdik Sultra",
      featured: true,
    },
    {
      id: 2,
      title:
        "Ribuan Pelajar SMA dan SMK Sulawesi Tenggara Bentangkan Bendera Merah Putih sepanjang 17 Kilometer untuk Memperingati Kemerdekaan RI ke-78",
      excerpt:
        "Ribuan pelajar SMA dan SMK Sulawesi Tenggara membentangkan bendera merah putih sepanjang 17 kilometer untuk memperingati kemerdekaan RI ke-78.",
      content: `
      <p>Ribuan pelajar dari SMA dan SMK di Sulawesi Tenggara mengambil bagian dalam aksi patriotik dengan membentangkan bendera merah putih sepanjang 17 kilometer. Kegiatan ini menjadi bukti semangat nasionalisme generasi muda.</p>
      <p>Dengan semangat kebersamaan, bendera dibentangkan melintasi Kota Kendari hingga Konawe Selatan. Gubernur Sultra H. Ali Mazi menyebut momentum ini sebagai sejarah baru untuk daerah.</p>
      <p>Kepala Dinas Pendidikan Sultra, H. Yusmin, menyampaikan apresiasi atas partisipasi siswa yang terlibat. Kegiatan ini juga diharapkan memecahkan Rekor MURI dengan melibatkan 17 ribu siswa.</p>
    `,
      date: "12 Desember 2024",
      time: "5 hari yang lalu",
      category: "Prestasi",
      image: berita2,
      author: "Humas Disdik Sultra",
      featured: false,
    },
    {
      id: 3,
      title: "Workshop Peningkatan Kompetensi Guru di Era Digital",
      excerpt:
        "Lebih dari 1000 guru mengikuti workshop peningkatan kompetensi dalam memanfaatkan teknologi pembelajaran modern.",
      content: `
      <p>Dinas Pendidikan Sulawesi Tenggara menggelar workshop 8-10 Desember 2024 di Hotel Santika Kendari. Lebih dari 1000 guru hadir untuk meningkatkan kompetensi digital.</p>
      <h2>Materi</h2>
      <ul>
        <li>Pengenalan teknologi pendidikan</li>
        <li>Pembuatan konten digital interaktif</li>
        <li>Evaluasi dan assessment online</li>
      </ul>
      <p>Workshop menghadirkan narasumber dari akademisi dan praktisi pendidikan digital. Guru berkomitmen menerapkan hasil workshop di sekolah masing-masing.</p>
    `,
      date: "10 Desember 2024",
      time: "1 minggu yang lalu",
      category: "Pelatihan",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop",
      author: "Tim Redaksi Disdik Sultra",
      featured: false,
    },
    {
      id: 4,
      title: "Pembangunan 50 Ruang Kelas Baru di Kabupaten Konawe",
      excerpt:
        "Infrastruktur pendidikan ditingkatkan dengan pembangunan 50 ruang kelas baru di Kabupaten Konawe.",
      content: `
      <p>Pemerintah daerah bersama Dinas Pendidikan Sulawesi Tenggara membangun 50 ruang kelas baru di Kabupaten Konawe. Langkah ini dilakukan untuk mengurangi ketimpangan sarana pendidikan.</p>
      <p>Dengan tambahan ruang kelas, kapasitas belajar meningkat dan diharapkan kualitas pembelajaran semakin baik.</p>
    `,
      date: "8 Desember 2024",
      time: "1 minggu yang lalu",
      category: "Infrastruktur",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=400&fit=crop",
      author: "Tim Infrastruktur Disdik Sultra",
      featured: false,
    },
    {
      id: 5,
      title: "Beasiswa Unggulan 2024 untuk Siswa Berprestasi",
      excerpt:
        "Program Beasiswa Unggulan 2024 kembali dibuka untuk mendukung siswa berprestasi.",
      content: `
      <p>Kementerian Pendidikan melalui Dinas Pendidikan Sultra membuka pendaftaran Beasiswa Unggulan 2024. Beasiswa ini ditujukan bagi siswa SMA/SMK berprestasi baik akademik maupun non-akademik.</p>
      <p>Pendaftaran dilakukan secara online melalui website resmi Dinas Pendidikan. Penerima beasiswa akan mendapatkan biaya pendidikan penuh.</p>
    `,
      date: "5 Desember 2024",
      time: "2 minggu yang lalu",
      category: "Beasiswa",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
      author: "Tim Beasiswa Disdik Sultra",
      featured: false,
    },
    {
      id: 6,
      title: "Pelaksanaan Ujian Nasional Berbasis Komputer 2024",
      excerpt:
        "Ujian Nasional Berbasis Komputer (UNBK) 2024 telah terlaksana dengan sukses di seluruh Sulawesi Tenggara.",
      content: `
      <p>Pelaksanaan Ujian Nasional Berbasis Komputer (UNBK) 2024 di Sulawesi Tenggara berjalan lancar tanpa kendala teknis yang berarti. Ribuan siswa SMA dan SMK berpartisipasi.</p>
      <p>Dinas Pendidikan memastikan jaringan internet dan perangkat komputer siap digunakan di seluruh sekolah pelaksana.</p>
    `,
      date: "1 Desember 2024",
      time: "2 minggu yang lalu",
      category: "Ujian",
      author: "Tim Evaluasi Disdik Sultra",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=300&fit=crop",
      featured: false,
    },
    {
      id: 7,
      title: "Kerja Sama dengan Universitas Terkemuka untuk Dual Degree",
      excerpt:
        "Dinas Pendidikan Sultra menjalin kerja sama dengan universitas terkemuka untuk program dual degree.",
      content: `
      <p>Dinas Pendidikan Sultra resmi menandatangani MoU dengan beberapa universitas di dalam dan luar negeri untuk penyelenggaraan program dual degree. Program ini ditargetkan untuk meningkatkan daya saing lulusan pendidikan tinggi di Sultra.</p>
    `,
      date: "28 November 2024",
      time: "3 minggu yang lalu",
      category: "Kerjasama",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop",
      author: "Tim Kerja Sama Disdik Sultra",
      featured: false,
    },
    {
      id: 8,
      title: "Festival Seni dan Budaya Sekolah Se-Sulawesi Tenggara",
      excerpt:
        "Festival seni dan budaya tingkat provinsi diikuti oleh lebih dari 200 sekolah di Sultra.",
      content: `
      <p>Dinas Pendidikan dan Kebudayaan Sulawesi Tenggara menyelenggarakan Festival Seni dan Budaya tingkat provinsi. Lebih dari 200 sekolah menampilkan karya seni, tari tradisional, musik daerah, dan drama.</p>
      <p>Festival ini menjadi ajang pelestarian budaya sekaligus meningkatkan kreativitas siswa di bidang seni.</p>
    `,
      date: "25 November 2024",
      time: "3 minggu yang lalu",
      category: "Event",
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=400&fit=crop",
      author: "Tim Kebudayaan Disdik Sultra",
      featured: false,
    },
  ];

  const newsItem = allNews.find((item) => item.id === parseInt(id || ""));

  if (!newsItem) {
    return <Navigate to="/berita" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Header Section */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Link to="/berita">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Berita
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-government-blue/10 text-government-blue"
                >
                  {newsItem.category}
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {newsItem.time}
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {newsItem.title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {newsItem.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {newsItem.date}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Bagikan
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Simpan
                  </Button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none text-foreground text-justify"
              dangerouslySetInnerHTML={{ __html: newsItem.content }}
              style={{
                color: "hsl(var(--foreground))",
              }}
            />

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-sm text-muted-foreground">
                  Dipublikasikan oleh {newsItem.author} pada {newsItem.date}
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Bagikan Artikel
                  </Button>
                </div>
              </div>
            </footer>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Berita Terkait
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {allNews
                .filter((item) => item.id !== newsItem.id)
                .slice(0, 3)
                .map((item) => (
                  <Link key={item.id} to={`/berita/${item.id}`}>
                    <div className="group bg-card rounded-lg overflow-hidden hover:shadow-medium transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <Badge
                          variant="secondary"
                          className="bg-education-green/10 text-education-green mb-2"
                        >
                          {item.category}
                        </Badge>
                        <h3 className="font-semibold text-foreground group-hover:text-government-blue transition-colors line-clamp-2 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DetailBerita;
