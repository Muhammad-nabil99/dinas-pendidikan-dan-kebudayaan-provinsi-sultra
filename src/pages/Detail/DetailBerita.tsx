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
import berita2 from "../assets/berita-2.png";

const DetailBerita = () => {
  const { id } = useParams();
  console.log("this is detaiol", id);

  // Sample news data (in real app, this would come from API/database)
  const allNews = [
    {
      id: 1,
      title: "Sinergi Kemendikbudristek dan Pemerintah Daerah dalam Membangun Ekosistem Pendidikan Digital",
      excerpt:
        "Sinergi Kemendikbudristek dan Pemerintah Daerah dalam Membangun Ekosistem Pendidikan Digital.",
      content: `
        <p>Dalam rangka memperkuat sinergi dengan pemerintah daerah terkait pemanfaatan platform teknologi pendidikan di tahun 2024, Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) melalui Balai Layanan Platform Teknologi (BLPT), Pusat Data dan Teknologi Informasi (Pusdatin) menyelenggarakan rapat koordinasi bertajuk “Berkobar (Berkolaborasi dan Berbagi) Membangun Sinergi Ekosistem Digital Pendidikan BLPT x Pemerintah Daerah” pada 28 s.d. 31 Mei di Bandung, Jawa Barat.
        <br><br>  
        Adapun unsur pemerintah daerah yang terlibat dalam kegiatan, yaitu Dinas Pendidikan di 38 provinsi, Unit Pelaksana Teknis Daerah (UPTD) di lingkungan Kemendikbudristek, dan Balai Teknologi Informasi Komunikasi Pendidikan (BTIKP) di masing-masing daerah.
        <br><br>
        Salah satu pilar dalam menyediakan akses pendidikan berkualitas adalah ekosistem pendidikan digital. Untuk itu, Kemendikbudristek berkomitmen penuh dalam optimalisasi pemanfaatan platform teknologi pendidikan, di antaranya akun belajar.id, Platform Merdeka Mengajar (PMM), Rapor Pendidikan, SIPLah dan ARKAS untuk pengelolaan sumber daya sekolah, dan Platform Kampus Merdeka untuk pendidikan tinggi.
        <br><br>
        Kegiatan secara resmi dibuka oleh Sekretaris Jenderal Kemendikbudristek, Suharti. Ia mendorong agar sinergi ini dapat berfungsi sebagai media eksplorasi dan kolaborasi terhadap pemetaan program pendidikan Indonesia. “Dengan mengoptimalkan pemanfaatan platform teknologi dan data pendidikan, kita dapat meningkatkan kualitas pendidikan. Semangat Berkobar (berkolaborasi dan berbagi) ini menjadi bahan bakar untuk meningkatkan pemanfaatan teknologi secara efektif, sehingga dapat meningkatkan kualitas pendidikan di seluruh provinsi di Indonesia, memastikan bahwa setiap siswa mendapatkan kesempatan yang sama untuk meraih pendidikan yang berkualitas. Mari bersinergi untuk mewujudkan Merdeka Belajar, yakni kesempatan bagi anak-anak Indonesia untuk merdeka dalam belajar apa pun dan terlepas dari berbagai hambatan yang melatarbelakangi mereka,” ucap Suharti, di Bandung, Selasa (28/5)
        <br><br>
        Berbagai transformasi pendidikan yang dilakukan oleh Kemendikbudristek ditujukan untuk meningkatkan kinerja pendidikan, baik itu pemerataan akses, peningkatan kualitas, dan peningkatan tata kelola. Ketiga hal tersebut perlu didukung oleh penguatan platform teknologi untuk mengakselerasi pencapaian target-target pendidikan yang begitu tinggi.
        <br><br>
        Suharti pun menambahkan, “Untuk itu, kolaborasi dan partisipasi yang berkelanjutan dari semua stakeholder, baik pemerintah pusat, pemerintah daerah, dan peran mitra teknologi pendidikan, sangat krusial dalam keberhasilan transformasi digital pendidikan.”
        Senada dengan itu, Pelaksana tugas (Plt.) Kepala Pusat Data dan Teknologi Informasi, Wibowo Mukti, mengatakan bahwa untuk meningkatkan pemerataan platform teknologi pendidikan di seluruh wilayah Indonesia, BLPT memerlukan dukungan dan kerja sama berbagai pihak untuk dapat mempercepat distribusi dan pemanfaatan platform secara luas.
        <br><br>
        “Kegiatan ini bertujuan untuk merumuskan strategi sinergitas Pusdatin, BLPT, dan pemerintah daerah dalam pemanfaatan dan pendayagunaan teknologi informasi dan komunikasi. Kami berharap berbagai platform yang telah dikembangkan oleh Kemendikbudristek dapat dimanfaatkan dengan baik di level daerah,” ucap Wibowo.
        <br><br>
        Pada kesempatan tersebut, Kepala Balai Teknologi Informasi Komunikasi Pendidikan Jawa Barat, Firman Oktora, pun menyambut baik inisiatif BLPT dan Pusdatin untuk melakukan kolaborasi bersama. Menurutnya, hal tersebut selaras dengan empat nilai transformasi pendidikan di Jawa Barat, yaitu 1) kolaborasi; 2) integrasi teknologi informasi dan kualitas pendidikan; 3) pemerataan akses pendidikan; dan 4) satu guru, satu sertifikat kompetensi.
        <br><br>
        Dalam pelaksanaannya, kegiatan ini menghadirkan sejumlah narasumber yang berkaitan dengan kebijakan transformasi digital, data pendidikan, dan rapor pendidikan daerah, serta mitra platform teknologi pendidikan seperti Canva dan Quizizz. Hadir pula para Duta Teknologi sebagai mitra BLPT di daerah yang akan berbagi praktik baik terkait pelaksanaan Pembelajaran Berbasis TIK (PembaTIK) dan Kita Harus Belajar (Kihajar) di provinsinya masing-masing.</p>
      `,
      date: "15 Desember 2024",
      time: "2 hari yang lalu",
      category: "Program",
      image:
        berita1,
      author: "Tim Redaksi Disdik Sultra",
    },
    {
      id: 2,
      title: "Ribuan Pelajar SMA dan SMK Sulawesi Tenggara Bentangkan Bendera Merah Putih sepanjang 17 Kilometer untuk Memperingati Kemerdekaan RI ke-78",
      excerpt:
        "Ribuan Pelajar SMA dan SMK Sulawesi Tenggara Bentangkan Bendera Merah Putih sepanjang 17 Kilometer untuk Memperingati Kemerdekaan RI ke-78.",
      content: `
        <p>Ribuan pelajar dari berbagai Sekolah Menengah Atas (SMA) dan Sekolah Menengah Kejuruan (SMK) di Sulawesi Tenggara mengambil bagian dalam aksi patriotik dengan membentangkan bendera merah putih sepanjang 17 kilometer sebagai bagian dari perayaan Hari Kemerdekaan Republik Indonesia yang ke-78. Pembentangan bendera merah putih ini menjadi bukti semangat nasionalisme dan cinta tanah air yang berkobar di kalangan generasi muda.
        <br><br>
        Aksi pembentangan bendera merah putih ini merupakan kolaborasi yang luar biasa antara ribuan pelajar yang berasal dari berbagai sekolah di wilayah Sulawesi Tenggara. Dengan semangat kebersamaan dan gotong royong, mereka membawa bendera merah putih sepanjang 17 kilometer melintasi jalan-jalan utama Kota Kendari dan Kabupaten Konawe Selatan menunjukkan komitmen mereka terhadap nilai-nilai kebangsaan dan perjuangan para pahlawan.
        <br><br>
        Kegiatan yang dimulai pada pagi hari, dengan antusiasme yang tinggi dari para pelajar yang datang mengenakan seragam sekolah, mereka membawa bendera merah putih dengan semangat dan harapan untuk mengenang jasa para pejuang kemerdekaan serta meneruskan semangat perjuangan dalam menghadapi berbagai tantangan yang dihadapi bangsa Indonesia saat ini.
        Gubernur Sulawesi Tenggara (Sultra), H. Ali Mazi S.H, mengatakan sepanjang Sulawesi Tenggara menjadi provinsi, momentum ini baru pertama kali dilakukan dengan mengejar rekor muri Indonesia.
        <br><br>
        "Kemerdekaan yang kita nikmati ini adalah hasil perjuangan para leluhur kita. Bendera adalah simbol negara yang dapat terus berkibar di Bumi Pertiwi, pengibaran ini harus kita apresiasi sebagai bagian dari memperingati kemerdekaan 17 Agustus 1945," kata Ali Mazi di Kendari, Selasa 15 Agustus 2023.
        Sementara Kepala Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara, H. Yusmin,S.Pd.,M.H., menyampaikan apresiasi yang tinggi atas partisipasi aktif para pelajar dalam kegiatan ini. "Aksi pembentangan bendera merah putih sepanjang 17 kilometer ini melibatkan 17 ribu siswa dan siswi yang berasal dari sekolah SMA dan SMK baik negeri maupun swasta dari Kota Kendari dan Kabupaten Konawe Selatan dan rencananya akan memecahkan Rekor Muri,”.
        <br><br>
        "Bendera ini dijahit oleh semua SMK kita yang ada di Kendari, Kolaka, Konawe, Muna dan Kota Baubau sejak dua minggu yang lalu," Ujarnya
        <br><br>
        Peringatan kemerdekaan Republik Indonesia yang ke-78 di Sulawesi Tenggara ini diharapkan dapat memberikan inspirasi bagi generasi muda untuk terus menghargai perjuangan para pahlawan dan berkontribusi dalam membangun bangsa yang lebih baik.
        </p>
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
