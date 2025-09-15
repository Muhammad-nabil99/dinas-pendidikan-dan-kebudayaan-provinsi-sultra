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

const DetailBerita = () => {
  const { id } = useParams();
  console.log("this is detaiol", id);

  // Sample news data (in real app, this would come from API/database)
  const allNews = [
    {
      id: 1,
      title: "Peluncuran Program Digitalisasi Sekolah 2024",
      excerpt:
        "Dinas Pendidikan Sultra meluncurkan program digitalisasi untuk 500 sekolah dalam rangka meningkatkan kualitas pembelajaran di era modern.",
      content: `
        <p>Dinas Pendidikan Sulawesi Tenggara dengan bangga mengumumkan peluncuran Program Digitalisasi Sekolah 2024, sebuah inisiatif ambisius yang akan mentransformasi 500 sekolah di seluruh provinsi menuju era pembelajaran digital yang modern dan efektif.</p>
        
        <h2>Latar Belakang Program</h2>
        <p>Program ini diluncurkan sebagai respons terhadap perkembangan teknologi yang pesat dan kebutuhan adaptasi sistem pendidikan terhadap tuntutan zaman. Dengan memanfaatkan teknologi digital, diharapkan kualitas pembelajaran dapat meningkat secara signifikan dan merata di seluruh daerah.</p>
        
        <h2>Komponen Program</h2>
        <p>Program Digitalisasi Sekolah 2024 mencakup beberapa komponen utama:</p>
        <ul>
          <li><strong>Pelatihan Guru:</strong> Lebih dari 2.000 guru akan mendapat pelatihan intensif tentang penggunaan teknologi dalam pembelajaran</li>
          <li><strong>Infrastruktur Teknologi:</strong> Penyediaan perangkat komputer, tablet, dan koneksi internet untuk semua sekolah target</li>
          <li><strong>Pengembangan Kurikulum Digital:</strong> Adaptasi kurikulum untuk mengintegrasikan teknologi dalam proses belajar mengajar</li>
          <li><strong>Platform E-Learning:</strong> Pengembangan platform pembelajaran online yang dapat diakses oleh siswa dan guru</li>
        </ul>
        
        <h2>Target dan Manfaat</h2>
        <p>Dengan total anggaran 50 miliar rupiah, program ini menargetkan 500 sekolah di 17 kabupaten/kota di Sulawesi Tenggara. Manfaat yang diharapkan meliputi peningkatan literasi digital, kualitas pembelajaran yang lebih interaktif, dan persiapan siswa menghadapi era industri 4.0.</p>
        
        <h2>Implementasi</h2>
        <p>Program akan diimplementasikan dalam 3 tahap selama periode 2024-2026. Tahap pertama dimulai Januari 2024 dengan fokus pada sekolah-sekolah di wilayah perkotaan, dilanjutkan dengan sekolah di daerah terpencil pada tahap kedua dan ketiga.</p>
      `,
      date: "15 Desember 2024",
      time: "2 hari yang lalu",
      category: "Program",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop",
      author: "Tim Redaksi Disdik Sultra",
    },
    {
      id: 2,
      title: "Raih Prestasi Nasional, Siswa Sultra Juara Olimpiade Sains",
      excerpt:
        "Tim olimpiade sains dari Sulawesi Tenggara berhasil meraih medali emas pada kompetisi tingkat nasional yang berlangsung di Jakarta.",
      content: `
        <p>Prestasi membanggakan kembali ditorehkan oleh siswa-siswi Sulawesi Tenggara. Tim olimpiade sains provinsi berhasil meraih medali emas pada Olimpiade Sains Nasional (OSN) 2024 yang berlangsung di Jakarta, 10-14 Desember 2024.</p>
        
        <h2>Prestasi yang Diraih</h2>
        <p>Dalam kompetisi bergengsi ini, Sulawesi Tenggara berhasil meraih:</p>
        <ul>
          <li>3 Medali Emas untuk bidang Matematika, Fisika, dan Biologi</li>
          <li>5 Medali Perak untuk bidang Kimia, Informatika, Astronomi, Kebumian, dan Ekonomi</li>
          <li>2 Medali Perunggu untuk bidang Geografi dan Sosiologi</li>
        </ul>
        
        <h2>Para Juara</h2>
        <p>Medali emas diraih oleh:</p>
        <ul>
          <li><strong>Muhammad Fadhil Rahman</strong> (SMAN 1 Kendari) - Matematika</li>
          <li><strong>Siti Aisyah Pratiwi</strong> (SMAN 2 Bau-Bau) - Fisika</li>
          <li><strong>Ahmad Rizky Maulana</strong> (SMAN 1 Kolaka) - Biologi</li>
        </ul>
        
        <h2>Proses Pembinaan</h2>
        <p>Prestasi gemilang ini tidak terlepas dari pembinaan intensif yang dilakukan selama 6 bulan. Tim pembina yang terdiri dari dosen universitas terkemuka dan guru berpengalaman memberikan materi mendalam dan latihan soal yang komprehensif.</p>
        
        <h2>Apresiasi dan Dukungan</h2>
        <p>Kepala Dinas Pendidikan Sulawesi Tenggara, Dr. H. Abd. Rasyid, M.Pd., memberikan apresiasi setinggi-tingginya kepada para siswa dan pembina. "Prestasi ini membuktikan bahwa potensi siswa Sulawesi Tenggara tidak kalah dengan daerah lain," ujarnya.</p>
      `,
      date: "12 Desember 2024",
      time: "5 hari yang lalu",
      category: "Prestasi",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
      author: "Humas Disdik Sultra",
    },
    {
      id: 3,
      title: "Workshop Peningkatan Kompetensi Guru di Era Digital",
      excerpt:
        "Lebih dari 1000 guru mengikuti workshop peningkatan kompetensi dalam memanfaatkan teknologi untuk pembelajaran modern.",
      content: `
        <p>Dinas Pendidikan Sulawesi Tenggara menyelenggarakan Workshop Peningkatan Kompetensi Guru di Era Digital yang diikuti oleh lebih dari 1.000 guru dari seluruh kabupaten/kota di provinsi ini. Workshop berlangsung selama 3 hari, 8-10 Desember 2024, di Hotel Santika Kendari.</p>
        
        <h2>Tujuan Workshop</h2>
        <p>Workshop ini bertujuan untuk:</p>
        <ul>
          <li>Meningkatkan kemampuan guru dalam menggunakan teknologi digital</li>
          <li>Memberikan pemahaman tentang metode pembelajaran abad 21</li>
          <li>Memperkenalkan platform dan tools pembelajaran online</li>
          <li>Mengembangkan kreativitas guru dalam merancang pembelajaran interaktif</li>
        </ul>
        
        <h2>Materi Workshop</h2>
        <p>Materi workshop mencakup berbagai aspek pembelajaran digital:</p>
        <ul>
          <li><strong>Hari Pertama:</strong> Pengenalan teknologi pendidikan dan platform e-learning</li>
          <li><strong>Hari Kedua:</strong> Pembuatan konten digital dan multimedia pembelajaran</li>
          <li><strong>Hari Ketiga:</strong> Evaluasi digital dan assessment online</li>
        </ul>
        
        <h2>Narasumber</h2>
        <p>Workshop menghadirkan narasumber berkompeten dari berbagai institusi:</p>
        <ul>
          <li>Prof. Dr. Ir. Bambang Suharjo, M.Sc. (Universitas Halu Oleo)</li>
          <li>Dr. Siti Rahma, M.Pd. (Praktisi Pendidikan Digital)</li>
          <li>Ahmad Fauzi, S.Kom., M.T. (Developer Platform E-Learning)</li>
        </ul>
        
        <h2>Hasil dan Komitmen</h2>
        <p>Peserta workshop menunjukkan antusiasme tinggi dan berkomitmen untuk menerapkan ilmu yang diperoleh dalam pembelajaran di kelas. Diharapkan workshop ini dapat meningkatkan kualitas pendidikan di Sulawesi Tenggara secara keseluruhan.</p>
      `,
      date: "10 Desember 2024",
      time: "1 minggu yang lalu",
      category: "Pelatihan",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop",
      author: "Tim Redaksi Disdik Sultra",
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
              className="prose prose-lg max-w-none text-foreground"
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
