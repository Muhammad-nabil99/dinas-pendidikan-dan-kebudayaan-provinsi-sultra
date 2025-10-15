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
  Download,
  Calendar,
  FileText,
  MapPin,
  Users,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BgImage from "../../assets/tracking.jpg";
import useGetLaporanKegiatan from "@/features/laporanKegiatan/useGetLaporanKegiatan";

const LaporanKegiatan = () => {
  const { laporanKegiatan, isLoading } = useGetLaporanKegiatan();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedCategory, setSelectedCategory] = useState("all");

  console.log("ini laporanKegiatan ya", laporanKegiatan);

  const categories = [
    { value: "all", label: "Semua Kategori" },
    { value: "workshop", label: "Workshop" },
    { value: "monitoring", label: "Monitoring" },
    { value: "sosialisasi", label: "Sosialisasi" },
    { value: "pelatihan", label: "Pelatihan" },
    { value: "lomba", label: "Lomba" },
    { value: "evaluasi", label: "Evaluasi" },
  ];

  const years = ["2025", "2024", "2023", "2022", "2021"];

  const filteredLaporan = laporanKegiatan?.filter((item) => {
    const matchesSearch =
      item?.judul?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
      item?.deskripsi?.toLowerCase()?.includes(searchTerm.toLowerCase());
    const matchesYear = item?.created_at?.startsWith(selectedYear);
    const matchesCategory =
      selectedCategory === "all" || item?.kategori === selectedCategory;
    return matchesSearch && matchesYear && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Selesai</Badge>;
      case "ongoing":
        return <Badge className="bg-blue-100 text-blue-800">Berlangsung</Badge>;
      case "planned":
        return (
          <Badge className="bg-orange-100 text-orange-800">Direncanakan</Badge>
        );
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "workshop":
      case "pelatihan":
        return <Users className="w-5 h-5 text-blue-600" />;
      case "monitoring":
      case "evaluasi":
        return <TrendingUp className="w-5 h-5 text-green-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // const totalParticipants = filteredLaporan?.reduce(
  //   (sum, item) => sum + (parseInt(item.peserta) || 0),
  //   0
  // );
  // const completedActivities = filteredLaporan?.filter(
  //   (item) => item.status === "completed"
  // ).length;

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
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Cari berdasarkan judul atau deskripsi kegiatan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="w-full lg:w-48">
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih tahun" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full lg:w-56">
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistics Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-government-blue mb-2">
                  {filteredLaporan?.length || 0}
                </div>
                <p className="text-muted-foreground">Total Kegiatan</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {completedActivities || 0}
                </div>
                <p className="text-muted-foreground">Kegiatan Selesai</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {totalParticipants?.toLocaleString("id-ID") || 0}
                </div>
                <p className="text-muted-foreground">Total Peserta</p>
              </CardContent>
            </Card>
          </div> */}

          {/* Results */}
          <div className="grid gap-6">
            {isLoading ? (
              <p className="text-center text-muted-foreground">
                Memuat data laporan...
              </p>
            ) : filteredLaporan?.length > 0 ? (
              filteredLaporan?.map((item) => (
                <Card
                  key={item.id}
                  className="hover:shadow-elegant transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-4">
                          {/* {getCategoryIcon(item?.category || "default")} */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-semibold text-foreground">
                                {item?.judul}
                              </h3>
                              {/* {getStatusBadge(item?.status || "completed")} */}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(item?.created_at)}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{item?.lokasi}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>{item?.peserta} peserta</span>
                              </div>
                              {/* <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                <span>{item.budget || "-"}</span>
                              </div> */}
                            </div>

                            <p className="text-muted-foreground mb-2">
                              {item.deskripsi}
                            </p>

                            <p className="text-sm text-government-blue font-medium">
                              Penyelenggara: {item.penyelenggara}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          size="sm"
                          onClick={() =>
                            window.open(
                              `https://dashboard.btikpsultra.my.id/storage/${item.dokumens?.dokumen}`,
                              "_blank"
                            )
                          }
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Tidak ada laporan kegiatan ditemukan
                  </h3>
                  <p className="text-muted-foreground">
                    Coba ubah kata kunci pencarian, tahun, atau filter kategori
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LaporanKegiatan;
