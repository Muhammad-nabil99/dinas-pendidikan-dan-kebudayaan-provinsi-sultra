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
  Eye
} from "lucide-react";

const Foto = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Semua Foto");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // Data album dengan foto-foto
  const albums = [
    {
      id: 1,
      judul: "Rapat Koordinasi Kepala Sekolah",
      tanggal: "15 September 2024",
      lokasi: "Aula Dinas Pendidikan",
      jumlahFoto: 25,
      kategori: "Kegiatan Resmi",
      cover: "https://picsum.photos/seed/album1/600/400",
      photos: [
        { id: 1, url: "https://picsum.photos/seed/photo1-1/800/600", judul: "Pembukaan Rapat", deskripsi: "Sambutan oleh kepala dinas" },
        { id: 2, url: "https://picsum.photos/seed/photo1-2/800/600", judul: "Sesi Diskusi", deskripsi: "Diskusi antar kepala sekolah" },
        { id: 3, url: "https://picsum.photos/seed/photo1-3/800/600", judul: "Penyampaian Materi", deskripsi: "Pemaparan agenda pendidikan" },
        { id: 4, url: "https://picsum.photos/seed/photo1-4/800/600", judul: "Sesi Tanya Jawab", deskripsi: "Interaksi dengan peserta" },
        { id: 5, url: "https://picsum.photos/seed/photo1-5/800/600", judul: "Penutupan", deskripsi: "Foto bersama peserta rapat" },
      ]
    },
    {
      id: 2,
      judul: "Workshop Kurikulum Merdeka",
      tanggal: "10 September 2024", 
      lokasi: "Hotel Santika Kendari",
      jumlahFoto: 40,
      kategori: "Pelatihan",
      cover: "https://picsum.photos/seed/album2/600/400",
      photos: [
        { id: 1, url: "https://picsum.photos/seed/photo2-1/800/600", judul: "Sambutan", deskripsi: "Pembukaan workshop" },
        { id: 2, url: "https://picsum.photos/seed/photo2-2/800/600", judul: "Peserta Workshop", deskripsi: "Para guru antusias mengikuti" },
        { id: 3, url: "https://picsum.photos/seed/photo2-3/800/600", judul: "Sesi Praktik", deskripsi: "Praktik penerapan kurikulum" },
        { id: 4, url: "https://picsum.photos/seed/photo2-4/800/600", judul: "Diskusi Kelompok", deskripsi: "Peserta berdiskusi dalam kelompok" },
        { id: 5, url: "https://picsum.photos/seed/photo2-5/800/600", judul: "Penyerahan Sertifikat", deskripsi: "Penyerahan sertifikat peserta" },
      ]
    },
    {
      id: 3,
      judul: "Kunjungan Menteri Pendidikan",
      tanggal: "5 September 2024",
      lokasi: "SMAN 1 Kendari",
      jumlahFoto: 35,
      kategori: "Kunjungan",
      cover: "https://picsum.photos/seed/album3/600/400",
      photos: [
        { id: 1, url: "https://picsum.photos/seed/photo3-1/800/600", judul: "Kedatangan", deskripsi: "Menteri tiba di lokasi" },
        { id: 2, url: "https://picsum.photos/seed/photo3-2/800/600", judul: "Tur Sekolah", deskripsi: "Melihat fasilitas sekolah" },
        { id: 3, url: "https://picsum.photos/seed/photo3-3/800/600", judul: "Interaksi dengan Siswa", deskripsi: "Berkomunikasi dengan siswa" },
        { id: 4, url: "https://picsum.photos/seed/photo3-4/800/600", judul: "Demo Kelas", deskripsi: "Menonton demonstrasi kelas" },
        { id: 5, url: "https://picsum.photos/seed/photo3-5/800/600", judul: "Sesi Foto", deskripsi: "Foto bersama dengan staf sekolah" },
      ]
    },
    {
      id: 4,
      judul: "Upacara HUT RI ke-79",
      tanggal: "17 Agustus 2024",
      lokasi: "Lapangan Kantor Gubernur",
      jumlahFoto: 20,
      kategori: "Upacara",
      cover: "https://picsum.photos/seed/album4/600/400",
      photos: [
        { id: 1, url: "https://picsum.photos/seed/photo4-1/800/600", judul: "Pengibaran Bendera", deskripsi: "Detik-detik pengibaran bendera" },
        { id: 2, url: "https://picsum.photos/seed/photo4-2/800/600", judul: "Pembacaan Teks Proklamasi", deskripsi: "Pembacaan naskah proklamasi" },
        { id: 3, url: "https://picsum.photos/seed/photo4-3/800/600", judul: "Pasukan Upacara", deskripsi: "Pasukan pengibar bendera" },
        { id: 4, url: "https://picsum.photos/seed/photo4-4/800/600", judul: "Peserta Upacara", deskripsi: "Seluruh peserta upacara" },
        { id: 5, url: "https://picsum.photos/seed/photo4-5/800/600", judul: "Tumpeng Kemerdekaan", deskripsi: "Pemotongan tumpeng kemerdekaan" },
      ]
    },
    {
      id: 5,
      judul: "Sosialisasi Program Sekolah Penggerak",
      tanggal: "12 Agustus 2024",
      lokasi: "Gedung Serba Guna",
      jumlahFoto: 30,
      kategori: "Pendidikan",
      cover: "https://picsum.photos/seed/album5/600/400",
      photos: [
        { id: 1, url: "https://picsum.photos/seed/photo5-1/800/600", judul: "Pemaparan Materi", deskripsi: "Penjelasan program sekolah penggerak" },
        { id: 2, url: "https://picsum.photos/seed/photo5-2/800/600", judul: "Audien", deskripsi: "Peserta sosialisasi" },
        { id: 3, url: "https://picsum.photos/seed/photo5-3/800/600", judul: "Sesi Tanya Jawab", deskripsi: "Peserta mengajukan pertanyaan" },
        { id: 4, url: "https://picsum.photos/seed/photo5-4/800/600", judul: "Diskusi", deskripsi: "Diskusi tentang implementasi" },
        { id: 5, url: "https://picsum.photos/seed/photo5-5/800/600", judul: "Penutupan", deskripsi: "Foto bersama peserta" },
      ]
    },
    {
      id: 6,
      judul: "Pelatihan Guru Digital",
      tanggal: "8 Agustus 2024",
      lokasi: "Lab Komputer Dinas",
      jumlahFoto: 18,
      kategori: "Pelatihan",
      cover: "https://picsum.photos/seed/album6/600/400",
      photos: [
        { id: 1, url: "https://picsum.photos/seed/photo6-1/800/600", judul: "Instruktur", deskripsi: "Pemateri sedang menjelaskan" },
        { id: 2, url: "https://picsum.photos/seed/photo6-2/800/600", judul: "Sesi Praktik", deskripsi: "Peserta mencoba tools digital" },
        { id: 3, url: "https://picsum.photos/seed/photo6-3/800/600", judul: "Diskusi", deskripsi: "Tanya jawab dengan instruktur" },
        { id: 4, url: "https://picsum.photos/seed/photo6-4/800/600", judul: "Kelompok Kerja", deskripsi: "Peserta bekerja dalam kelompok" },
        { id: 5, url: "https://picsum.photos/seed/photo6-5/800/600", judul: "Penyerahan Sertifikat", deskripsi: "Peserta menerima sertifikat" },
      ]
    },
    {
      id: 7,
      judul: "Pelatihan Guru Digital",
      tanggal: "8 Agustus 2024",
      lokasi: "Lab Komputer Dinas",
      jumlahFoto: 18,
      kategori: "Pelatihan",
      cover: "https://picsum.photos/seed/album6/600/400",
      photos: [
        { id: 1, url: "https://picsum.photos/seed/photo6-1/800/600", judul: "Instruktur", deskripsi: "Pemateri sedang menjelaskan" },
        { id: 2, url: "https://picsum.photos/seed/photo6-2/800/600", judul: "Sesi Praktik", deskripsi: "Peserta mencoba tools digital" },
        { id: 3, url: "https://picsum.photos/seed/photo6-3/800/600", judul: "Diskusi", deskripsi: "Tanya jawab dengan instruktur" },
        { id: 4, url: "https://picsum.photos/seed/photo6-4/800/600", judul: "Kelompok Kerja", deskripsi: "Peserta bekerja dalam kelompok" },
        { id: 5, url: "https://picsum.photos/seed/photo6-5/800/600", judul: "Penyerahan Sertifikat", deskripsi: "Peserta menerima sertifikat" },
      ]
    }
  ];

  // Kategori unik
  const categories = ["Semua Foto", ...new Set(albums.map(album => album.kategori))];

  // Filter album berdasarkan pencarian dan kategori
  useEffect(() => {
    let results = albums;
    
    // Filter berdasarkan kategori
    if (selectedCategory !== "Semua Foto") {
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
    setCurrentPhotoIndex(0);
  };

  // Fungsi untuk menutup album
  const closeAlbum = () => {
    setSelectedAlbum(null);
  };

  // Fungsi untuk foto berikutnya
  const nextPhoto = () => {
    setCurrentPhotoIndex(prev => 
      prev < selectedAlbum.photos.length - 1 ? prev + 1 : 0
    );
  };

  // Fungsi untuk foto sebelumnya
  const prevPhoto = () => {
    setCurrentPhotoIndex(prev => 
      prev > 0 ? prev - 1 : selectedAlbum.photos.length - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">Galeri Foto</h1>
            <p className="text-gray-600 text-lg">Dokumentasi Kegiatan Dinas Pendidikan Sulawesi Tenggara</p>
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
              {/* Album Foto - Grid View */}
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
                            {album.jumlahFoto} Foto
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <Button 
                            className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
                            onClick={() => openAlbum(album)}
                          >
                            <Eye size={16} className="mr-2" />
                            Lihat Album
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
                          Lihat Album
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Album Foto - List View */}
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
                              {album.jumlahFoto} Foto
                            </Badge>
                          </div>
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
                          <p className="text-gray-600 mb-4">Album ini berisi dokumentasi kegiatan {album.judul.toLowerCase()} yang diselenggarakan oleh Dinas Pendidikan Sulawesi Tenggara.</p>
                          <Button 
                            className="bg-blue-600 hover:bg-blue-700 rounded-lg"
                            onClick={() => openAlbum(album)}
                          >
                            <Eye size={16} className="mr-2" />
                            Lihat Album
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
                
                <div className="relative flex-grow flex items-center justify-center p-4">
                  <img 
                    src={selectedAlbum.photos[currentPhotoIndex].url} 
                    alt={selectedAlbum.photos[currentPhotoIndex].judul}
                    className="max-h-[60vh] object-contain"
                  />
                  
                  <Button 
                    variant="outline" 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevPhoto}
                  >
                    <ChevronLeft size={24} />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextPhoto}
                  >
                    <ChevronRight size={24} />
                  </Button>
                </div>
                
                <div className="p-4 bg-gray-50">
                  <h4 className="font-semibold text-blue-800">{selectedAlbum.photos[currentPhotoIndex].judul}</h4>
                  <p className="text-gray-600 text-sm">{selectedAlbum.photos[currentPhotoIndex].deskripsi}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">{currentPhotoIndex + 1} dari {selectedAlbum.photos.length}</span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Download size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 border-t overflow-x-auto">
                  <div className="flex space-x-2">
                    {selectedAlbum.photos.map((photo, index) => (
                      <div 
                        key={photo.id} 
                        className={`flex-shrink-0 w-16 h-16 cursor-pointer border-2 rounded ${currentPhotoIndex === index ? 'border-blue-600' : 'border-transparent'}`}
                        onClick={() => setCurrentPhotoIndex(index)}
                      >
                        <img 
                          src={photo.url} 
                          alt={photo.judul} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Statistik Galeri */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Album", nilai: "156", icon: "📁", warna: "bg-blue-600" },
              { label: "Total Foto", nilai: "2,847", icon: "📸", warna: "bg-green-500" },
              { label: "Album Tahun Ini", nilai: "48", icon: "📅", warna: "bg-yellow-500" },
              { label: "Unduhan", nilai: "5,432", icon: "⬇️", warna: "bg-purple-500" }
            ].map((stat, index) => (
              <Card key={index} className="shadow-lg rounded-xl border-0 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-blue-800">{stat.nilai}</p>
                    </div>
                    <div className={`text-white p-3 rounded-lg ${stat.warna}`}>
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Kontribusi Foto */}
          <Card className="shadow-lg rounded-xl border-0 bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Upload className="text-blue-600" size={24} />
                Kontribusi Foto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Punya foto kegiatan Dinas Pendidikan? Bagikan dengan kami!
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-blue-600 mb-2 text-2xl">📧</div>
                    <h4 className="font-semibold text-blue-800 mb-1">Email</h4>
                    <p className="text-sm text-gray-600">foto@disdik.sultra.go.id</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-blue-600 mb-2 text-2xl">💬</div>
                    <h4 className="font-semibold text-blue-800 mb-1">WhatsApp</h4>
                    <p className="text-sm text-gray-600">+62 812-3456-7890</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-blue-600 mb-2 text-2xl">📱</div>
                    <h4 className="font-semibold text-blue-800 mb-1">Upload Online</h4>
                    <p className="text-sm text-gray-600">Form Upload</p>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-lg">
                  <Upload size={18} className="mr-2" />
                  Kirim Foto Sekarang
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
    </div>
  );
};

export default Foto;