import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Video = () => {
  return (
    <main className="container mx-auto px-4 py-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-government-blue mb-4">
            Galeri Video
          </h1>
          <p className="text-muted-foreground text-lg">
            Dokumentasi Video Kegiatan Dinas Pendidikan Sulawesi Tenggara
          </p>
        </div>

        <div className="grid gap-6">
          {/* Filter & Kategori */}
          <Card className="shadow-elegant">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="default" size="sm">
                  Semua Video
                </Button>
                <Button variant="outline" size="sm">
                  Profil
                </Button>
                <Button variant="outline" size="sm">
                  Kegiatan
                </Button>
                <Button variant="outline" size="sm">
                  Dokumenter
                </Button>
                <Button variant="outline" size="sm">
                  Tutorial
                </Button>
                <Button variant="outline" size="sm">
                  Webinar
                </Button>
                <Button variant="outline" size="sm">
                  Kampanye
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Video Unggulan */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-government-blue">
                <span className="text-2xl">🎬</span>
                Video Unggulan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  {/* Placeholder untuk video utama */}
                  <div className="w-full h-64 bg-gradient-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="text-6xl text-government-blue/30 mb-2">
                        🎥
                      </div>
                      <p className="text-muted-foreground">Video Player</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-government-blue mb-2">
                    [Template - Profil Dinas Pendidikan Sulawesi Tenggara 2024]
                  </h3>
                  <div className="flex gap-2 mb-3">
                    <Badge className="bg-government-blue">Profil</Badge>
                    <Badge variant="outline">HD Quality</Badge>
                    <Badge variant="secondary">15:32</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    [Template - Video profil yang menampilkan visi, misi, dan
                    pencapaian Dinas Pendidikan Provinsi Sulawesi Tenggara dalam
                    melayani masyarakat.]
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-government-blue">
                    Video Terkait
                  </h4>
                  {[
                    {
                      judul: "Inovasi Pelayanan Digital",
                      durasi: "8:45",
                      views: "2,340",
                    },
                    {
                      judul: "Program Sekolah Penggerak",
                      durasi: "12:18",
                      views: "3,892",
                    },
                    {
                      judul: "Workshop Kurikulum Merdeka",
                      durasi: "25:30",
                      views: "1,756",
                    },
                  ].map((video, index) => (
                    <div
                      key={index}
                      className="flex gap-3 p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-20 h-14 bg-gradient-primary/20 rounded flex items-center justify-center">
                        <span className="text-xl">🎥</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-government-blue text-sm">
                          [Template - {video.judul}]
                        </h5>
                        <div className="flex gap-2 text-xs text-muted-foreground mt-1">
                          <span>⏱️ {video.durasi}</span>
                          <span>👁️ {video.views}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Koleksi Video Terbaru */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                judul: "Rapat Koordinasi Kepala Sekolah Q3 2024",
                durasi: "45:22",
                tanggal: "15 September 2024",
                views: "1,234",
                kategori: "Kegiatan",
                kualitas: "HD",
              },
              {
                judul: "Tutorial Sistem Informasi SIAP DISDIK",
                durasi: "18:35",
                tanggal: "12 September 2024",
                views: "2,567",
                kategori: "Tutorial",
                kualitas: "4K",
              },
              {
                judul: "Dokumenter Pendidikan Karakter",
                durasi: "28:17",
                tanggal: "8 September 2024",
                views: "3,891",
                kategori: "Dokumenter",
                kualitas: "HD",
              },
              {
                judul: "Webinar Digitalisasi Pendidikan",
                durasi: "1:32:45",
                tanggal: "5 September 2024",
                views: "5,678",
                kategori: "Webinar",
                kualitas: "Full HD",
              },
              {
                judul: "Kampanye Pendidikan Inklusif",
                durasi: "6:48",
                tanggal: "1 September 2024",
                views: "4,321",
                kategori: "Kampanye",
                kualitas: "HD",
              },
              {
                judul: "Kunjungan Menteri Pendidikan",
                durasi: "22:14",
                tanggal: "28 Agustus 2024",
                views: "7,890",
                kategori: "Kegiatan",
                kualitas: "4K",
              },
            ].map((video, index) => (
              <Card
                key={index}
                className="shadow-elegant hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative">
                  {/* Placeholder untuk thumbnail video */}
                  <div className="w-full h-48 bg-gradient-primary/20 rounded-t-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-government-blue/30 mb-2">
                        🎥
                      </div>
                      <div className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.durasi}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-government-blue">
                      {video.kualitas}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Badge variant="secondary">{video.kategori}</Badge>
                  </div>
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-4">
                      <div className="text-3xl text-government-blue">▶️</div>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-government-blue group-hover:text-education-green transition-colors line-clamp-2">
                    [Template - {video.judul}]
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <span>📅</span>
                        <span>{video.tanggal}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span>👁️</span>
                        <span>{video.views}</span>
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-3 group-hover:bg-government-blue group-hover:text-white transition-colors"
                  >
                    ▶️ Putar Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Playlist/Serial Video */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-government-blue">
                <span className="text-2xl">📺</span>
                Serial & Playlist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    nama: "Seri Tutorial SIAP DISDIK",
                    deskripsi: "Panduan lengkap penggunaan sistem informasi",
                    episode: 8,
                    totalDurasi: "2:15:30",
                    kategori: "Tutorial",
                  },
                  {
                    nama: "Dokumenter Sekolah Unggulan",
                    deskripsi: "Profil sekolah-sekolah berprestasi di Sulteng",
                    episode: 12,
                    totalDurasi: "6:45:20",
                    kategori: "Dokumenter",
                  },
                  {
                    nama: "Workshop Series 2024",
                    deskripsi: "Kumpulan video workshop dan pelatihan guru",
                    episode: 15,
                    totalDurasi: "18:30:45",
                    kategori: "Pelatihan",
                  },
                  {
                    nama: "Kampanye Pendidikan",
                    deskripsi: "Video-video kampanye program pendidikan",
                    episode: 6,
                    totalDurasi: "45:18",
                    kategori: "Kampanye",
                  },
                ].map((playlist, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-government-blue">
                        [Template - {playlist.nama}]
                      </h3>
                      <Badge variant="outline">{playlist.kategori}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      [Template - {playlist.deskripsi}]
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Episode: </span>
                        <span className="font-medium">{playlist.episode}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Durasi: </span>
                        <span className="font-medium">
                          {playlist.totalDurasi}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-3">
                      Lihat Playlist
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Statistik Video */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                label: "Total Video",
                nilai: "247",
                icon: "🎥",
                warna: "bg-government-blue",
              },
              {
                label: "Total Views",
                nilai: "125K",
                icon: "👁️",
                warna: "bg-education-green",
              },
              {
                label: "Jam Konten",
                nilai: "186",
                icon: "⏱️",
                warna: "bg-accent-gold",
              },
              {
                label: "Subscriber",
                nilai: "8.9K",
                icon: "👥",
                warna: "bg-purple-500",
              },
            ].map((stat, index) => (
              <Card key={index} className="shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold text-government-blue">
                        [{stat.nilai}]
                      </p>
                    </div>
                    <div
                      className={`text-3xl p-3 rounded-lg ${stat.warna} text-white`}
                    >
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Platform & Channel */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-government-blue">
                <span className="text-2xl">📱</span>
                Platform & Channel Resmi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    platform: "YouTube",
                    username: "@DisdikSulteng",
                    subscriber: "8.9K",
                    icon: "📺",
                  },
                  {
                    platform: "Instagram",
                    username: "@disdik_sulteng",
                    follower: "12.5K",
                    icon: "📷",
                  },
                  {
                    platform: "TikTok",
                    username: "@disdik.sulteng",
                    follower: "6.2K",
                    icon: "🎵",
                  },
                  {
                    platform: "Facebook",
                    username: "Dinas Pendidikan Sulteng",
                    follower: "15.8K",
                    icon: "👍",
                  },
                ].map((channel, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-primary/5 rounded-lg hover:bg-gradient-primary/10 transition-colors cursor-pointer"
                  >
                    <div className="text-4xl mb-3">{channel.icon}</div>
                    <h3 className="font-semibold text-government-blue mb-1">
                      {channel.platform}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      [Template - {channel.username}]
                    </p>
                    <Badge variant="secondary">
                      {channel.subscriber || channel.follower}
                    </Badge>
                    <Button size="sm" variant="outline" className="w-full mt-3">
                      Kunjungi
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Request Video & Kontribusi */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">💡</span>
                  Request Video
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Punya ide untuk video edukasi atau dokumentasi? Sampaikan
                  kepada kami!
                </p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Judul video yang diinginkan"
                    className="w-full p-2 border rounded-md"
                  />
                  <textarea
                    placeholder="Deskripsi detail tentang video yang diinginkan..."
                    rows={3}
                    className="w-full p-2 border rounded-md"
                  />
                  <Button className="w-full bg-government-blue hover:bg-government-blue/90">
                    Kirim Request
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-government-blue">
                  <span className="text-2xl">🎬</span>
                  Kontribusi Video
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Miliki video kegiatan pendidikan? Berbagi dengan komunitas!
                </p>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-government-blue mb-1">
                      Format yang Diterima
                    </h4>
                    <p className="text-muted-foreground">
                      MP4, MOV, AVI (Max. 2GB)
                    </p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-government-blue mb-1">
                      Resolusi Minimum
                    </h4>
                    <p className="text-muted-foreground">
                      720p (HD) atau lebih tinggi
                    </p>
                  </div>
                  <Button className="w-full" variant="outline">
                    Upload Video
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Video;
