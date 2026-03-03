import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Eye,
  Download,
  Calendar,
  FileText,
  MapPin,
  Users,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  ImageIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BgImage from "../../assets/tracking.jpg";
import useGetLaporanKegiatan from "@/features/laporanKegiatan/useGetLaporanKegiatan";
import ActivityListLoadingSkeleton from "@/components/ActivityListLoadingSkeleton";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const LaporanKegiatan = () => {
  const { laporanKegiatan, isLoading } = useGetLaporanKegiatan();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mengambil tahun saat ini secara otomatis (misal: 2026)
  const currentYear = String(new Date().getFullYear());
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Generate daftar tahun dinamis (Tahun ini mundur ke 4 tahun sebelumnya)
  const currentYearNum = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => String(currentYearNum - i));

  // Modal State
  const [selectedLaporan, setSelectedLaporan] = useState<any>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Filter Data (Hanya teks dan tahun)
  const filteredLaporan = laporanKegiatan?.filter((item) => {
    const matchesSearch =
      (item?.judul?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (item?.deskripsi?.toLowerCase() || "").includes(searchTerm.toLowerCase());
    
    // Safety check memastikan created_at tidak null
    const matchesYear = item?.created_at ? item.created_at.startsWith(selectedYear) : false;
    
    return matchesSearch && matchesYear;
  });

  const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleDownload = async (item: any) => {
    if (!item?.dokumens?.dokumen) return;
    
    const fileUrl = `https://dashboard.btikpsultra.my.id/storage/${item.dokumens.dokumen}`;
    
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Laporan_${item.judul.replace(/\s+/g, '_')}.pdf`);
      
      document.body.appendChild(link);
      link.click();
      
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download melalui fetch gagal (Mungkin CORS), membuka di tab baru:", error);
      window.open(fileUrl, "_blank");
    }
  };

  const handleOpenModal = (laporan: any) => {
    setSelectedLaporan(laporan);
    setCurrentMediaIndex(0);
  };

  const handleNext = () => {
    const files = selectedLaporan?.medias?.file;
    if (files && currentMediaIndex < files.length - 1) {
      setCurrentMediaIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <main>
        {/* Header */}
        <section
          className="relative py-20 text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Link to="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Kembali ke Beranda</span>
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full mb-3 sm:mb-4">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                <span className="text-xs sm:text-sm font-medium">Laporan</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                Laporan Kegiatan
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
                Dokumentasi dan laporan lengkap kegiatan yang telah dilaksanakan
                oleh Dinas Pendidikan Provinsi Sulawesi Tenggara
              </p>
            </div>
          </div>
        </section>

        {isLoading ? (
          <ActivityListLoadingSkeleton />
        ) : (
          <section className="container mx-auto px-4 py-12">
            {/* Search and Filter */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Pencarian Laporan Kegiatan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Cari berdasarkan judul atau deskripsi kegiatan..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="w-full md:w-56">
                    <Select
                      value={selectedYear}
                      onValueChange={setSelectedYear}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih tahun" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            Tahun {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="grid gap-6">
              {filteredLaporan && filteredLaporan.length > 0 ? (
                filteredLaporan.map((item) => (
                  <Card
                    key={item.id}
                    className="hover:shadow-elegant transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-xl font-semibold text-foreground">
                                  {item?.judul}
                                </h3>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4 shrink-0" />
                                  <span className="truncate">{formatDate(item?.created_at)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 shrink-0" />
                                  <span className="truncate">{item?.lokasi}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="w-4 h-4 shrink-0" />
                                  <span>{item?.peserta} peserta</span>
                                </div>
                              </div>

                              <p className="text-muted-foreground mb-3 line-clamp-2">
                                {item.deskripsi}
                              </p>

                              <div className="inline-flex items-center bg-slate-100 px-3 py-1 rounded-md text-sm text-government-blue font-medium">
                                Penyelenggara: {item.penyelenggara}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
                          <Button
                            size="sm"
                            className="bg-government-blue hover:bg-blue-800 text-white w-full lg:w-36"
                            onClick={() => handleDownload(item)}
                            disabled={!item?.dokumens?.dokumen}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>

                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full lg:w-36 border-government-blue text-government-blue hover:bg-blue-50"
                            onClick={() => handleOpenModal(item)}
                            disabled={!item?.medias?.file || item.medias.file.length === 0}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Lihat Foto
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Tidak ada laporan kegiatan ditemukan
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Belum ada laporan untuk tahun {selectedYear} atau kata kunci pencarian tidak cocok.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* --- MODAL DETAIL DIPERBAIKI --- */}
            <Dialog open={!!selectedLaporan} onOpenChange={(isOpen) => !isOpen && setSelectedLaporan(null)}>
              <DialogContent className="w-[95vw] sm:max-w-3xl p-0 overflow-hidden border-none shadow-2xl bg-white rounded-xl sm:rounded-2xl">
                {selectedLaporan && (
                  <div className="flex flex-col max-h-[90vh]">
                    {/* Header Tombol Tutup (Mobile Friendly) */}
                    <div className="absolute top-2 right-2 z-50">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-black/20 hover:bg-black/40 text-white rounded-full h-8 w-8 backdrop-blur-sm"
                        onClick={() => setSelectedLaporan(null)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* AREA SLIDER GAMBAR */}
                    <div className="relative bg-black group aspect-video sm:aspect-[16/7] flex items-center justify-center shrink-0">
                      {selectedLaporan.medias?.file?.[currentMediaIndex]?.file ? (
                        <img
                          src={`https://dashboard.btikpsultra.my.id/storage/${selectedLaporan.medias.file[currentMediaIndex].file}`}
                          alt={selectedLaporan.judul}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <div className="text-white/50 flex flex-col items-center">
                          <ImageIcon className="w-10 h-10 mb-2" />
                          <span>Gambar tidak tersedia</span>
                        </div>
                      )}

                      {/* Navigasi Overlay */}
                      {selectedLaporan.medias?.file?.length > 1 && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full h-10 w-10 transition-opacity opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                            onClick={handlePrev}
                            disabled={currentMediaIndex === 0}
                          >
                            <ChevronLeft className="h-6 w-6" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full h-10 w-10 transition-opacity opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                            onClick={handleNext}
                            disabled={currentMediaIndex === selectedLaporan.medias.file.length - 1}
                          >
                            <ChevronRight className="h-6 w-6" />
                          </Button>
                          
                          <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md">
                            {currentMediaIndex + 1} / {selectedLaporan.medias.file.length}
                          </div>
                        </>
                      )}
                    </div>

                    {/* AREA KONTEN DETAIL (Scrollable) */}
                    <div className="p-5 sm:p-6 overflow-y-auto custom-scrollbar">
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none">
                            Dokumentasi
                          </Badge>
                          <span className="text-sm text-slate-500 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(selectedLaporan.created_at)}
                          </span>
                        </div>
                        <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
                          {selectedLaporan.judul}
                        </DialogTitle>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-slate-100 mb-4 bg-slate-50/50 rounded-lg px-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 rounded-lg text-green-700">
                            <Users className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider">Jumlah Peserta</p>
                            <p className="text-sm font-semibold text-slate-700">{selectedLaporan.peserta} Orang</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-red-100 rounded-lg text-red-700">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider">Lokasi</p>
                            <p className="text-sm font-semibold text-slate-700 line-clamp-1">{selectedLaporan.lokasi}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-2">Deskripsi Kegiatan</h4>
                        <p className="text-sm leading-relaxed text-slate-600 text-justify">
                          {selectedLaporan.deskripsi}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100">
                        <p className="text-sm text-slate-500">
                          Diselenggarakan oleh: <span className="font-semibold text-slate-700">{selectedLaporan.penyelenggara}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </section>
        )}
      </main>
    </div>
  );
};

export default LaporanKegiatan;