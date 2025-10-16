import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Clock, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import BgImage from "../../assets/tracking.jpg";
import useGetBerita from "@/features/news/useGetBerita";
import CardLoadingSkeleton from "@/components/CardLoadingSkeleton";

const News = () => {
  const [searchItem, setSearchItem] = useState("");
  const { berita, isLoading } = useGetBerita();

  const categories = [
    "Semua",
    "Program",
    "Prestasi",
    "Pelatihan",
    "Infrastruktur",
    "Beasiswa",
    "Ujian",
    "Kerjasama",
    "Event",
  ];

  // serach item berita
  const filterBerita = berita?.filter((item) => {
    if (item?.judul?.trim() === "") return;
    return item?.judul?.toLowerCase().includes(searchItem.toLowerCase());
  });
  // --- Pagination setup ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(berita?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = berita?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Header Section */}
        <section
          className="relative py-20 text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          {/* Overlay warna biru dengan opacity */}
          <div className="absolute inset-0 bg-blue-900/70"></div>

          {/* Konten */}
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
                <span className="text-xs sm:text-sm font-medium">
                  Berita & Informasi
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                Semua Berita Terbaru
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
                Ikuti perkembangan terbaru seputar pendidikan di Sulawesi
                Tenggara
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    onChange={({ target }) => setSearchItem(target.value)}
                    placeholder="Cari berita..."
                    className="pl-10"
                  />
                </div>
                <Select defaultValue="Semua">
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories?.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="text-sm text-muted-foreground">
                Menampilkan {currentNews?.length} dari {berita?.length} berita
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        {isLoading ? (
          <CardLoadingSkeleton />
        ) : (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterBerita?.map((item) => (
                  <Card
                    key={item.id}
                    className="group hover:shadow-medium transition-all duration-300 overflow-hidden"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        loading="lazy"
                        src={`https://dashboard.btikpsultra.my.id/storage/${item?.coverImage}`}
                        alt={item.judul}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <Badge
                          variant="secondary"
                          className="bg-government-blue/10 text-government-blue hover:bg-government-blue/20"
                        >
                          {item.category}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {new Date(item?.created_at).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-government-blue transition-colors">
                        {item.judul}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {item.deskripsi}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {new Date(item?.created_at).toLocaleDateString()}
                        </span>
                        <Link to={`/berita/${item.id}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-government-blue hover:text-government-blue/80"
                          >
                            Baca Selengkapnya
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12 gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <Button
                    key={index}
                    variant={currentPage === index + 1 ? "default" : "outline"}
                    onClick={() => setCurrentPage(index + 1)}
                    className="px-4"
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default News;
