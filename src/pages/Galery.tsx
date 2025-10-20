import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

import {
  Search,
  Grid3X3,
  List,
  ChevronDown,
  Filter,
  Image,
  Video,
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Play,
  MapPin,
  Eye,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Import images
import BgImage from "../assets/tracking.jpg";
import useGetGaleri, { Album } from "@/features/galeri/useGetGaleri";
import { transformGaleriToAlbums } from "@/utils/help";

// Import components
import GalleryModal from "@/components/gallery/GalleryModal";
import AlbumCard from "@/components/gallery/AlbumCard";
import AlbumListItem from "@/components/gallery/AlbumListItem";
import Pagination from "@/components/gallery/Pagination";

interface Media {
  id: string;
  type: "foto" | "video";
  url: string;
  thumbnail: string;
  title: string;
  description: string;
}

const Galeri: React.FC = () => {
  const { galeri, isLoading } = useGetGaleri();
  const album = transformGaleriToAlbums(galeri);

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<
    "semua" | "foto" | "video"
  >("semua");
  const [instansiFilter, setInstansiFilter] = useState<
    "semua" | "SMA" | "SMK" | "SLB"
  >("semua");
  const [showInstansiDropdown, setShowInstansiDropdown] = useState(false);
  const [sortOrder, setSortOrder] = useState<"terbaru" | "terlama">("terbaru");

  type CategoryType = "semua" | "foto" | "video";
  type InstansiType = "semua" | "SMA" | "SMK" | "SLB";
  type SortType = "terbaru" | "terlama";
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [fotoCurrentPage, setFotoCurrentPage] = useState(1);
  const [videoCurrentPage, setVideoCurrentPage] = useState(1);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const isMobile = useIsMobile();
  const itemsPerPage = 6;

  // Auto switch to list view on mobile
  useEffect(() => {
    if (isMobile) {
      setViewMode("list");
    }
  }, [isMobile]);

  // Filter and sort albums
  const filteredAlbums = album
    ?.filter((album) => {
      const matchesSearch = album?.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "semua" || album?.category === categoryFilter;
      const matchesInstansi =
        instansiFilter === "semua" || album?.instansi === instansiFilter;
      return matchesSearch && matchesCategory && matchesInstansi;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "terbaru"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

  // Separate albums by category
  const fotoAlbums = filteredAlbums.filter(
    (album) => album.category === "foto"
  );
  const videoAlbums = filteredAlbums.filter(
    (album) => album.category === "video"
  );

  // Pagination for each category
  const fotoTotalPages = Math.ceil(fotoAlbums.length / itemsPerPage);
  const videoTotalPages = Math.ceil(videoAlbums.length / itemsPerPage);

  const fotoStartIndex = (fotoCurrentPage - 1) * itemsPerPage;
  const videoStartIndex = (videoCurrentPage - 1) * itemsPerPage;

  const paginatedFotoAlbums = fotoAlbums.slice(
    fotoStartIndex,
    fotoStartIndex + itemsPerPage
  );
  const paginatedVideoAlbums = videoAlbums.slice(
    videoStartIndex,
    videoStartIndex + itemsPerPage
  );

  const handleAlbumClick = (album: Album) => {
    const albums = {
      ...album,
      media: [
        {
          description: album?.description,
          id: album?.id,
          url: album?.coverImage,
          thumbnail: album?.coverImage,
          title: album?.title,
          type: album?.category,
        },
        ...album.media,
      ],
    };

    setSelectedAlbum(albums);
    setSelectedMediaIndex(0);
  };

  const handleMediaSelect = (index: number) => {
    setSelectedMediaIndex(index);
  };

  const handleNextMedia = () => {
    if (selectedAlbum && selectedMediaIndex < selectedAlbum.media.length - 1) {
      setSelectedMediaIndex(selectedMediaIndex + 1);
    }
  };

  const handlePrevMedia = () => {
    if (selectedMediaIndex > 0) {
      setSelectedMediaIndex(selectedMediaIndex - 1);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Reset pagination when category filter changes
  const handleCategoryChange = (category: "semua" | "foto" | "video") => {
    setCategoryFilter(category);
    setFotoCurrentPage(1);
    setVideoCurrentPage(1);
    setShowCategoryDropdown(false);
  };

  // Fungsi untuk mengecek apakah URL adalah video YouTube
  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  // Fungsi untuk mendapatkan ID video YouTube dari URL
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Render media content
  const renderMediaContent = (media: Media) => {
    if (media.type === "video") {
      if (isYouTubeUrl(media.url)) {
        const videoId = getYouTubeId(media.url);
        return (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={media.title}
            className="w-full h-96 rounded-lg"
            allowFullScreen
          />
        );
      } else {
        return (
          <video
            src={media.url}
            controls
            className="w-full h-96 rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        );
      }
    } else {
      return (
        <img
          src={media.url}
          alt={media.title}
          className="w-full h-auto max-h-96 object-contain rounded-lg"
        />
      );
    }
  };



  return (
    <div className="min-h-screen bg-gallery-bg-light pt-219">
      {/* Hero Section */}
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
              <span className="text-xs sm:text-sm font-medium">Galeri</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              Dokumentasi Foto & Video
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
              "Rangkaian Dokumentasi Perjalanan Pendidikan Sultra."
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gallery-text-secondary h-4 w-4" />
            <Input
              placeholder="Cari album atau lokasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base border-2 focus:border-gallery-primary"
            />
          </div>

          {/* Filters and View Toggle */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-wrap gap-3">
              {/* Category Filter */}
              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="border-2 hover:border-gallery-primary"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {categoryFilter === "semua"
                    ? "Semua"
                    : categoryFilter === "foto"
                    ? "Foto"
                    : "Video"}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                {showCategoryDropdown && (
                  <div className="absolute top-full mt-1 left-0 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                    {["semua", "foto", "video"].map((category) => (
                      <button
                        key={category}
                        className="w-full text-left px-4 py-2 hover:bg-gallery-bg-light capitalize"
                        onClick={() =>
                          handleCategoryChange(category as CategoryType)
                        }
                      >
                        {category === "semua" ? "Semua" : category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Sort Filter */}
              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="border-2 hover:border-gallery-primary"
                >
                  {sortOrder === "terbaru" ? "Terbaru" : "Terlama"}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                {showSortDropdown && (
                  <div className="absolute top-full mt-1 left-0 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                    {["terbaru", "terlama"].map((sort) => (
                      <button
                        key={sort}
                        className="w-full text-left px-4 py-2 hover:bg-gallery-bg-light capitalize"
                        onClick={() => {
                          setSortOrder(sort as SortType);
                          setShowSortDropdown(false);
                        }}
                      >
                        {sort === "terbaru" ? "Terbaru" : "Terlama"}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setShowInstansiDropdown(!showInstansiDropdown)}
                  className="border-2 hover:border-gallery-primary"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {instansiFilter === "semua"
                    ? "Semua Instansi"
                    : instansiFilter}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                {showInstansiDropdown && (
                  <div className="absolute top-full mt-1 left-0 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                    {["semua", "SMA", "SMK", "SLB"].map((instansi) => (
                      <button
                        key={instansi}
                        className="w-full text-left px-4 py-2 hover:bg-gallery-bg-light capitalize"
                        onClick={() => {
                          setInstansiFilter(instansi as InstansiType);
                          setShowInstansiDropdown(false);
                        }}
                      >
                        {instansi === "semua" ? "Semua Instansi" : instansi}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* View Toggle - Hidden on mobile */}
            {!isMobile && (
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="border-2"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="border-2"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Foto Section */}
        {(categoryFilter === "semua" || categoryFilter === "foto") &&
          fotoAlbums.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border-2 border-gallery-primary">
                  <Image className="h-5 w-5 text-gallery-primary" />
                  <h2 className="text-xl font-semibold text-gallery-text-primary">
                    Foto
                  </h2>
                  <Badge
                    variant="outline"
                    className="text-gallery-primary border-gallery-primary"
                  >
                    {fotoAlbums.length}
                  </Badge>
                </div>
              </div>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedFotoAlbums.map((album) => (
                    <AlbumCard key={album.id} album={album} onClick={handleAlbumClick} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {paginatedFotoAlbums.map((album) => (
                    <AlbumListItem key={album.id} album={album} onClick={handleAlbumClick} />
                  ))}
                </div>
              )}

              <Pagination
                currentPage={fotoCurrentPage}
                totalPages={fotoTotalPages}
                onPageChange={setFotoCurrentPage}
              />
            </div>
          )}

        {/* Video Section */}
        {(categoryFilter === "semua" || categoryFilter === "video") &&
          videoAlbums.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border-2 border-gallery-primary">
                  <Video className="h-5 w-5 text-gallery-primary" />
                  <h2 className="text-xl font-semibold text-gallery-text-primary">
                    Video
                  </h2>
                  <Badge
                    variant="outline"
                    className="text-gallery-primary border-gallery-primary"
                  >
                    {videoAlbums.length}
                  </Badge>
                </div>
              </div>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedVideoAlbums.map((album) => (
                    <AlbumCard key={album.id} album={album} onClick={handleAlbumClick} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {paginatedVideoAlbums.map((album) => (
                    <AlbumListItem key={album.id} album={album} onClick={handleAlbumClick} />
                  ))}
                </div>
              )}

              <Pagination
                currentPage={videoCurrentPage}
                totalPages={videoTotalPages}
                onPageChange={setVideoCurrentPage}
              />
            </div>
          )}

        {/* No Results Message */}
        {((categoryFilter === "foto" && fotoAlbums.length === 0) ||
          (categoryFilter === "video" && videoAlbums.length === 0) ||
          (categoryFilter === "semua" && filteredAlbums.length === 0)) && (
          <div className="text-center py-12">
            <div className="text-gallery-text-secondary text-lg">
              Tidak ada album yang ditemukan untuk kriteria pencarian Anda.
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedAlbum}
        onOpenChange={() => setSelectedAlbum(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-">
          {selectedAlbum && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl text-gallery-text-primary">
                  {selectedAlbum.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Main Media Display */}
                <div className="relative">
                  {renderMediaContent(selectedAlbum.media[selectedMediaIndex])}
                  {/* Navigation Buttons */}
                  {selectedAlbum.media.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100"
                        onClick={handlePrevMedia}
                        disabled={selectedMediaIndex === 0}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100"
                        onClick={handleNextMedia}
                        disabled={
                          selectedMediaIndex === selectedAlbum.media.length - 1
                        }
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Media Info */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg text-gallery-text-primary mb-2">
                        {selectedAlbum.media[selectedMediaIndex]?.title}
                      </h3>
                      <div className="flex gap-2 mb-2">
                        {selectedAlbum.media[selectedMediaIndex]?.type ===
                          "video" && (
                          <Badge className="bg-gallery-primary hover:bg-gallery-primary-dark">
                            Video
                          </Badge>
                        )}
                        <Badge variant="outline">
                          {selectedMediaIndex + 1} dari{" "}
                          {selectedAlbum.media.length}
                        </Badge>
                      </div>
                      <p className="text-gallery-text-secondary">
                        {selectedAlbum.media[selectedMediaIndex]?.description}
                      </p>
                    </div>
                  </div>

                  {/* Media Thumbnails */}
                  {selectedAlbum.media.length > 1 && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-gallery-text-primary">
                        Media Lainnya
                      </h4>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {selectedAlbum.media.map((media, index) => (
                          <div
                            key={`${media.id}-${index}`}
                            className={`relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden ${
                              index === selectedMediaIndex
                                ? "ring-2 ring-gallery-primary"
                                : ""
                            }`}
                            onClick={() => handleMediaSelect(index)}
                          >
                            <img
                              loading="lazy"
                              src={media.thumbnail}
                              alt={media.title}
                              className="w-16 h-16 object-cover"
                            />
                            {media.type === "video" && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                <Play className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Galeri;
