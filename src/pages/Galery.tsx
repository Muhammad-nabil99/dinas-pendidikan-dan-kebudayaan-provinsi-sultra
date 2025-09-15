import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Calendar, 
  MapPin, 
  Download, 
  Upload, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  X,
  Eye,
  Play,
  Video
} from "lucide-react";

const Galeri = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Semua Media");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [viewMode, setViewMode] = useState("grid");

  // Data album dengan foto dan video
  const albums = [
    {
      id: 1,
      judul: "Rapat Koordinasi Kepala Sekolah",
      tanggal: "15 September 2024",
      lokasi: "Aula Dinas Pendidikan",
      jumlahMedia: 28,
      kategori: "Kegiatan Resmi",
      cover: "https://picsum.photos/seed/album1/600/400",
      media: [
        { id: 1, type: "image", url: "https://picsum.photos/seed/photo1-1/800/600", judul: "Pembukaan Rapat", deskripsi: "Sambutan oleh kepala dinas" },
        { id: 2, type: "image", url: "https://picsum.photos/seed/photo1-2/800/600", judul: "Sesi Diskusi", deskripsi: "Diskusi antar kepala sekolah" },
        { id: 3, type: "video", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", judul: "Video Dokumentasi Rapat", deskripsi: "Cuplikan kegiatan rapat" },
        { id: 4, type: "image", url: "https://picsum.photos/seed/photo1-4/800/600", judul: "Sesi Tanya Jawab", deskripsi: "Interaksi dengan peserta" },
        { id: 5, type: "image", url: "https://picsum.photos/seed/photo1-5/800/600", judul: "Penutupan", deskripsi: "Foto bersama peserta rapat" },
      ]
    },
    {
      id: 2,
      judul: "Workshop Kurikulum Merdeka",
      tanggal: "10 September 2024", 
      lokasi: "Hotel Santika Kendari",
      jumlahMedia: 45,
      kategori: "Pelatihan",
      cover: "https://picsum.photos/seed/album2/600/400",
      media: [
        { id: 1, type: "image", url: "https://picsum.photos/seed/photo2-1/800/600", judul: "Sambutan", deskripsi: "Pembukaan workshop" },
        { id: 2, type: "video", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", judul: "Video Workshop", deskripsi: "Cuplikan kegiatan workshop" },
        { id: 3, type: "image", url: "https://picsum.photos/seed/photo2-3/800/600", judul: "Sesi Praktik", deskripsi: "Praktik penerapan kurikulum" },
        { id: 4, type: "image", url: "https://picsum.photos/seed/photo2-4/800/600", judul: "Diskusi Kelompok", deskripsi: "Peserta berdiskusi dalam kelompok" },
        { id: 5, type: "image", url: "https://picsum.photos/seed/photo2-5/800/600", judul: "Penyerahan Sertifikat", deskripsi: "Penyerahan sertifikat peserta" },
      ]
    },
    {
      id: 3,
      judul: "Kunjungan Menteri Pendidikan",
      tanggal: "5 September 2024",
      lokasi: "SMAN 1 Kendari",
      jumlahMedia: 38,
      kategori: "Kunjungan",
      cover: "https://picsum.photos/seed/album3/600/400",
      media: [
        { id: 1, type: "image", url: "https://picsum.photos/seed/photo3-1/800/600", judul: "Kedatangan", deskripsi: "Menteri tiba di lokasi" },
        { id: 2, type: "video", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", judul: "Video Kunjungan", deskripsi: "Dokumentasi kunjungan menteri" },
        { id: 3, type: "image", url: "https://picsum.photos/seed/photo3-3/800/600", judul: "Interaksi dengan Siswa", deskripsi: "Berkomunikasi dengan siswa" },
        { id: 4, type: "image", url: "https://picsum.photos/seed/photo3-4/800/600", judul: "Demo Kelas", deskripsi: "Menonton demonstrasi kelas" },
        { id: 5, type: "image", url: "https://picsum.photos/seed/photo3-5/800/600", judul: "Sesi Foto", deskripsi: "Foto bersama dengan staf sekolah" },
      ]
    },
    {
      id: 4,
      judul: "Upacara HUT RI ke-79",
      tanggal: "17 Agustus 2024",
      lokasi: "Lapangan Kantor Gubernur",
      jumlahMedia: 25,
      kategori: "Upacara",
      cover: "https://picsum.photos/seed/album4/600/400",
      media: [
        { id: 1, type: "image", url: "https://picsum.photos/seed/photo4-1/800/600", judul: "Pengibaran Bendera", deskripsi: "Detik-detik pengibaran bendera" },
        { id: 2, type: "video", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", judul: "Video Upacara", deskripsi: "Dokumentasi upacara bendera" },
        { id: 3, type: "image", url: "https://picsum.photos/seed/photo4-3/800/600", judul: "Pasukan Upacara", deskripsi: "Pasukan pengibar bendera" },
        { id: 4, type: "image", url: "https://picsum.photos/seed/photo4-4/800/600", judul: "Peserta Upacara", deskripsi: "Seluruh peserta upacara" },
        { id: 5, type: "image", url: "https://picsum.photos/seed/photo4-5/800/600", judul: "Tumpeng Kemerdekaan", deskripsi: "Pemotongan tumpeng kemerdekaan" },
      ]
    },
    {
      id: 5,
      judul: "Video Dokumentasi Pendidikan",
      tanggal: "20 September 2024",
      lokasi: "Berbagai Lokasi",
      jumlahMedia: 8,
      kategori: "Video",
      cover: "https://picsum.photos/seed/video-cover/600/400",
      media: [
        { id: 1, type: "video", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", judul: "Proses Belajar Mengajar", deskripsi: "Aktivitas belajar di kelas" },
        { id: 2, type: "video", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", judul: "Ekstrakurikuler", deskripsi: "Kegiatan ekstrakurikuler siswa" },
        { id: 3, type: "video", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", judul: "Pelatihan Guru", deskripsi: "Peningkatan kompetensi guru" },
        { id: 4, type: "video", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", judul: "Infrastruktur Sekolah", deskripsi: "Fasilitas pendukung pendidikan" },
      ]
    }
  ];

  // Kategori unik
  const categories = ["Semua Media", ...new Set(albums.map(album => album.kategori))];

  // Filter album berdasarkan pencarian dan kategori
  useEffect(() => {
    let results = albums;
    
    // Filter berdasarkan kategori
    if (selectedCategory !== "Semua Media") {
      results = results.filter(album => album.kategori === selectedCategory);
    }
    
    // Filter berdasarkan judul
    if (searchTerm) {
      results = results.filter(album => 
        album.judul.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter berdasarkan tanggal
    if (searchDate) {
      results = results.filter(album => 
        album.tanggal.toLowerCase().includes(searchDate.toLowerCase())
      );
    }
    
    setFilteredAlbums(results);
  }, [searchTerm, searchDate, selectedCategory]);

  // Fungsi untuk membuka album
  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setCurrentMediaIndex(0);
  };

  // Fungsi untuk menutup album
  const closeAlbum = () => {
    setSelectedAlbum(null);
  };

  // Fungsi untuk media berikutnya
  const nextMedia = () => {
    setCurrentMediaIndex(prev => 
      prev < selectedAlbum.media.length - 1 ? prev + 1 : 0
    );
  };

  // Fungsi untuk media sebelumnya
  const prevMedia = () => {
    setCurrentMediaIndex(prev => 
      prev > 0 ? prev - 1 : selectedAlbum.media.length - 1
    );
  };

  // Render media berdasarkan type (image atau video)
  const renderMedia = (media) => {
    if (media.type === "image") {
      return (
        <img 
          src={media.url} 
          alt={media.judul}
          className="max-h-[60vh] object-contain"
        />
      );
    } else {
      return (
        <video 
          controls 
          className="max-h-[60vh] max-w-min"
          poster={selectedAlbum.cover}
        >
          <source src={media.url} type="video/mp4" />
          Browser Anda tidak mendukung pemutar video.
        </video>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">Galeri Media</h1>
            <p className="text-gray-600 text-lg">Dokumentasi Foto dan Video Kegiatan Dinas Pendidikan Sulawesi Tenggara</p>
          </div>

          {/* Search Bar */}
          <Card className="shadow-lg rounded-xl mb-6 border-0">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Cari berdasarkan judul kegiatan..."
                    className="pl-10 py-2 rounded-xl border-gray-200 focus:border-blue-500 text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="relative flex-1">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Cari berdasarkan tanggal (Contoh: September 2024)"
                    className="pl-10 py-2 rounded-xl border-gray-200 focus:border-blue-500"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                  <Filter size={18} className="mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Filter & Kategori */}
          <Card className="shadow-lg rounded-xl mb-8 border-0">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Button 
                    key={index}
                    variant={selectedCategory === category ? "default" : "outline"} 
                    size="sm"
                    className={`rounded-lg ${selectedCategory === category ? 'bg-blue-600' : 'text-blue-600 border-blue-200 hover:bg-blue-50'}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* View Toggle */}
          <div className="flex justify-end mb-4">
            <div className="flex bg-blue-100 rounded-lg p-1">
              <Button 
                variant={viewMode === "grid" ? "default" : "ghost"} 
                size="sm"
                className={viewMode === "grid" ? "bg-blue-600" : ""}
                onClick={() => setViewMode("grid")}
              >
                Grid
              </Button>
              <Button 
                variant={viewMode === "list" ? "default" : "ghost"} 
                size="sm"
                className={viewMode === "list" ? "bg-blue-600" : ""}
                onClick={() => setViewMode("list")}
              >
                List
              </Button>
            </div>
          </div>

          {/* Hasil Pencarian */}
          {filteredAlbums.length === 0 ? (
            <Card className="shadow-lg rounded-xl border-0 text-center py-12">
              <CardContent>
                <div className="text-blue-800 mb-2">Tidak ada hasil ditemukan</div>
                <p className="text-gray-600">Coba gunakan kata kunci atau tanggal yang berbeda</p>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Album Media - Grid View */}
              {viewMode === "grid" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {filteredAlbums.map((album) => (
                    <Card key={album.id} className="shadow-lg rounded-xl overflow-hidden border-0 group hover:shadow-xl transition-all duration-300 cursor-pointer">
                      <div className="relative">
                        <img
                          src={album.cover}
                          alt={album.judul}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-blue-600">{album.kategori}</Badge>
                        </div>
                        <div className="absolute bottom-2 left-2">
                          <Badge variant="secondary" className="bg-white text-blue-600">
                            {album.jumlahMedia} {album.kategori === "Video" ? "Video" : "Media"}
                          </Badge>
                        </div>
                        {/* Icon Play untuk album video */}
                        {album.kategori === "Video" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black bg-opacity-50 rounded-full p-3">
                              <Play size={32} className="text-white fill-white" />
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <Button 
                            className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
                            onClick={() => openAlbum(album)}
                          >
                            <Eye size={16} className="mr-2" />
                            Lihat {album.kategori === "Video" ? "Video" : "Album"}
                          </Button>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-blue-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {album.judul}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-blue-600" />
                            <span>{album.tanggal}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-blue-600" />
                            <span>{album.lokasi}</span>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          className="w-full mt-3 rounded-lg border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                          onClick={() => openAlbum(album)}
                        >
                          <Eye size={16} className="mr-2" />
                          Lihat {album.kategori === "Video" ? "Video" : "Album"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Album Media - List View */}
              {viewMode === "list" && (
                <div className="space-y-6 mb-8">
                  {filteredAlbums.map((album) => (
                    <Card key={album.id} className="shadow-lg rounded-xl overflow-hidden border-0 group hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 relative">
                          <img
                            src={album.cover}
                            alt={album.judul}
                            className="w-full h-48 md:h-full object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-blue-600">{album.kategori}</Badge>
                          </div>
                          <div className="absolute bottom-2 left-2">
                            <Badge variant="secondary" className="bg-white text-blue-600">
                              {album.jumlahMedia} {album.kategori === "Video" ? "Video" : "Media"}
                            </Badge>
                          </div>
                          {/* Icon Play untuk album video */}
                          {album.kategori === "Video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-black bg-opacity-50 rounded-full p-3">
                                <Play size={32} className="text-white fill-white" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="md:w-2/3 p-6">
                          <h3 className="text-xl font-bold text-blue-800 mb-2">{album.judul}</h3>
                          <div className="space-y-2 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-blue-600" />
                              <span>{album.tanggal}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-blue-600" />
                              <span>{album.lokasi}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">Koleksi ini berisi dokumentasi {album.kategori === "Video" ? "video" : "foto"} kegiatan {album.judul.toLowerCase()} yang diselenggarakan oleh Dinas Pendidikan Sulawesi Tenggara.</p>
                          <Button 
                            className="bg-blue-600 hover:bg-blue-700 rounded-lg"
                            onClick={() => openAlbum(album)}
                          >
                            <Eye size={16} className="mr-2" />
                            Lihat {album.kategori === "Video" ? "Video" : "Album"}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Modal View Album */}
          {selectedAlbum && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-hidden flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                  <h3 className="text-xl font-bold text-blue-800">{selectedAlbum.judul}</h3>
                  <Button variant="ghost" onClick={closeAlbum}>
                    <X size={24} />
                  </Button>
                </div>
                
                <div className="relative flex-grow flex items-center justify-center p-4 bg-black">
                  {renderMedia(selectedAlbum.media[currentMediaIndex])}
                  
                  <Button 
                    variant="outline" 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevMedia}
                  >
                    <ChevronLeft size={24} />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextMedia}
                  >
                    <ChevronRight size={24} />
                  </Button>
                </div>
                
                <div className="p-4 bg-gray-50">
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-blue-800 mr-2">{selectedAlbum.media[currentMediaIndex].judul}</h4>
                    {selectedAlbum.media[currentMediaIndex].type === "video" && (
                      <Badge variant="outline" className="bg-red-100 text-red-700 border-red-300">
                        <Video size={14} className="mr-1" />
                        Video
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{selectedAlbum.media[currentMediaIndex].deskripsi}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">{currentMediaIndex + 1} dari {selectedAlbum.media.length}</span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Download size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 border-t overflow-x-auto">
                  <div className="flex space-x-2">
                    {selectedAlbum.media.map((media, index) => (
                      <div 
                        key={media.id} 
                        className={`flex-shrink-0 w-16 h-16 cursor-pointer border-2 rounded ${currentMediaIndex === index ? 'border-blue-600' : 'border-transparent'}`}
                        onClick={() => setCurrentMediaIndex(index)}
                      >
                        {media.type === "image" ? (
                          <img 
                            src={media.url} 
                            alt={media.judul} 
                            className="w-full h-full object-cover rounded"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-black opacity-30 rounded"></div>
                            <Play size={20} className="text-white fill-white z-10" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
      
    </div>
  );
};

export default Galeri;