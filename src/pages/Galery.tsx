import React, { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
  Play,
  Calendar,
  MapPin,
  Eye,
  Download,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Filter,
  Image,
  Video,
  ArrowLeft,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Import images
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import educationBuilding from "@/assets/education-building.jpg";
import studentsActivity from "@/assets/students-activity.jpg";
import teacherMeeting from "@/assets/teacher-meeting.jpg";
import graduation from "@/assets/graduation.jpg";

interface Media {
  id: string;
  type: "foto" | "video";
  url: string;
  thumbnail: string;
  title: string;
  description: string;
}

interface Album {
  id: string;
  title: string;
  category: "foto" | "video";
  coverImage: string;
  mediaCount: number;
  date: string;
  location: string;
  media: Media[];
}

// Dummy data
 export const dummyAlbums: Album[] = [
  {
    id: "1",
    title: "PPBD 2024 sulawesi tenggara",
    category: "foto",
    coverImage: gallery1,
    mediaCount: 5,
    date: "2024-03-15",
    location: "Kendari, Sulawesi Tenggara",
    media: [
      {
        id: "1",
        type: "foto",
        url: gallery2,
        thumbnail: gallery2,
        title: "Gedung Utama Dinas Pendidikan",
        description:
          "Gedung kantor utama Dinas Pendidikan Sulawesi Tenggara yang baru direnovasi",
      },
    ],
  },
  {
    id: "2",
    title: "Kegiatan Pembelajaran Siswa",
    category: "foto",
    coverImage: gallery3,
    mediaCount: 8,
    date: "2024-03-10",
    location: "SMA Negeri 1 Kendari",
    media: [
      {
        id: "2",
        type: "foto",
        url: gallery3,
        thumbnail: gallery3,
        title: "Aktivitas Siswa di Kelas",
        description:
          "Siswa-siswa sedang aktif belajar dalam suasana kelas yang kondusif",
      },
    ],
  },
  {
    id: "3",
    title: "Rapat Koordinasi Guru",
    category: "video",
    coverImage: gallery4,
    mediaCount: 3,
    date: "2024-03-08",
    location: "Aula Dinas Pendidikan",
    media: [
      {
        id: "3",
        type: "video",
        url: "/sample-video.mp4",
        thumbnail: gallery4,
        title: "Video Rapat Koordinasi",
        description:
          "Dokumentasi rapat koordinasi antara guru dan pengawas pendidikan",
      },
    ],
  },
  {
    id: "4",
    title: "Upacara Wisuda",
    category: "foto",
    coverImage: gallery5,
    mediaCount: 12,
    date: "2024-03-05",
    location: "Universitas Halu Oleo",
    media: [
      {
        id: "4",
        type: "foto",
        url: gallery5,
        thumbnail: gallery5,
        title: "Upacara Wisuda Sarjana",
        description: "Momen sakral wisuda lulusan program studi pendidikan",
      },
    ],
  },
  {
    id: "5",
    title: "Workshop Teknologi Pendidikan",
    category: "video",
    coverImage: teacherMeeting,
    mediaCount: 6,
    date: "2024-03-01",
    location: "Lab Komputer SMAN 2",
    media: [
      {
        id: "5",
        type: "video",
        url: "/sample-video2.mp4",
        thumbnail: teacherMeeting,
        title: "Workshop Digital Learning",
        description: "Pelatihan penggunaan teknologi dalam pembelajaran modern",
      },
    ],
  },
  {
    id: "6",
    title: "Kunjungan Kerja Kepala Dinas",
    category: "foto",
    coverImage: gallery6,
    mediaCount: 4,
    date: "2024-02-28",
    location: "SD Negeri 5 Kendari",
    media: [
      {
        id: "6",
        type: "foto",
        url: gallery6,
        thumbnail: gallery6,
        title: "Monitoring Sekolah",
        description: "Kunjungan monitoring dan evaluasi fasilitas sekolah",
      },
    ],
  },
  {
    id: "7",
    title: "Pelatihan Guru PAUD",
    category: "video",
    coverImage: studentsActivity,
    mediaCount: 5,
    date: "2024-02-25",
    location: "PAUD Terpadu Kendari",
    media: [
      {
        id: "7",
        type: "video",
        url: "/sample-video3.mp4",
        thumbnail: studentsActivity,
        title: "Pelatihan PAUD",
        description:
          "Workshop pengembangan metode pembelajaran untuk guru PAUD",
      },
    ],
  },
  {
    id: "8",
    title: "Dokumentasi Sekolah Alam",
    category: "foto",
    coverImage: gallery7,
    mediaCount: 7,
    date: "2024-02-20",
    location: "Sekolah Alam Kendari",
    media: [
      {
        id: "8",
        type: "foto",
        url: gallery7,
        thumbnail: graduation,
        title: "Pembelajaran Outdoor",
        description: "Kegiatan pembelajaran di alam terbuka",
      },
    ],
  },
  {
    id: "9",
    title: "Seminar Pendidikan Digital",
    category: "video",
    coverImage: teacherMeeting,
    mediaCount: 4,
    date: "2024-02-15",
    location: "Hotel Santika Kendari",
    media: [
      {
        id: "9",
        type: "video",
        url: "/sample-video4.mp4",
        thumbnail: teacherMeeting,
        title: "Seminar Digital",
        description: "Seminar tentang transformasi pendidikan digital",
      },
    ],
  },
  {
    id: '9',
    title: 'Seminar Pendidikan Digital',
    category: 'video',
    coverImage: teacherMeeting,
    mediaCount: 4,
    date: '2024-02-15',
    location: 'Hotel Santika Kendari',
    media: [
      {
        id: '9',
        type: 'video',
        url: '/sample-video4.mp4',
        thumbnail: teacherMeeting,
        title: 'Seminar Digital',
        description: 'Seminar tentang transformasi pendidikan digital'
      },
    ]
  },
  {
    id: '9',
    title: 'Seminar Pendidikan Digital',
    category: 'video',
    coverImage: teacherMeeting,
    mediaCount: 4,
    date: '2024-02-15',
    location: 'Hotel Santika Kendari',
    media: [
      {
        id: '9',
        type: 'video',
        url: '/sample-video4.mp4',
        thumbnail: teacherMeeting,
        title: 'Seminar Digital',
        description: 'Seminar tentang transformasi pendidikan digital'
      },
    ]
  },
  {
    id: '9',
    title: 'Seminar Pendidikan Digital',
    category: 'video',
    coverImage: teacherMeeting,
    mediaCount: 4,
    date: '2024-02-15',
    location: 'Hotel Santika Kendari',
    media: [
      {
        id: '9',
        type: 'video',
        url: '/sample-video4.mp4',
        thumbnail: teacherMeeting,
        title: 'Seminar Digital',
        description: 'Seminar tentang transformasi pendidikan digital'
      },
    ]
  },
  {
    id: '9',
    title: 'Seminar Pendidikan Digital',
    category: 'video',
    coverImage: teacherMeeting,
    mediaCount: 4,
    date: '2024-02-15',
    location: 'Hotel Santika Kendari',
    media: [
      {
        id: '9',
        type: 'video',
        url: '/sample-video4.mp4',
        thumbnail: teacherMeeting,
        title: 'Seminar Digital',
        description: 'Seminar tentang transformasi pendidikan digital'
      },
    ]
  },
  {
    id: '9',
    title: 'Seminar Pendidikan Digital',
    category: 'video',
    coverImage: teacherMeeting,
    mediaCount: 4,
    date: '2024-02-15',
    location: 'Hotel Santika Kendari',
    media: [
      {
        id: '9',
        type: 'video',
        url: '/sample-video4.mp4',
        thumbnail: teacherMeeting,
        title: 'Seminar Digital',
        description: 'Seminar tentang transformasi pendidikan digital'
      },
    ]
  },
];

const Galeri: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<
    "semua" | "foto" | "video"
  >("semua");
  const [sortOrder, setSortOrder] = useState<"terbaru" | "terlama">("terbaru");
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
  const filteredAlbums = dummyAlbums
    .filter((album) => {
      const matchesSearch =
        album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        album.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "semua" || album.category === categoryFilter;
      return matchesSearch && matchesCategory;
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
    setSelectedAlbum(album);
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

  // Render album cards component
  const renderAlbumCard = (album: Album) => (
    <Card
      key={album.id}
      className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-gallery-primary rounded-xl"
      onClick={() => handleAlbumClick(album)}
    >
      <div className="relative overflow-hidden">
        <img
          src={album.coverImage}
          alt={album.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {album.category === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
            <div className="bg-white bg-opacity-90 rounded-full p-3 transform scale-100 group-hover:scale-110 transition-transform duration-300">
              <Play className="h-6 w-6 text-gallery-primary" />
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge
            variant={album.category === "video" ? "default" : "secondary"}
            className={
              album.category === "video"
                ? "bg-gallery-primary hover:bg-gallery-primary-dark"
                : ""
            }
          >
            {album.category === "video" ? "Video" : "Foto"}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge variant="outline" className="bg-white bg-opacity-90">
            {album.mediaCount} Media
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-gallery-text-primary mb-2 line-clamp-2">
          {album.title}
        </h3>
        <div className="space-y-1 text-sm text-gallery-text-secondary">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(album.date)}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {album.location}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-gallery-primary hover:bg-gallery-primary-dark transition-colors duration-200"
          size="sm"
        >
          <Eye className="h-4 w-4 mr-2" />
          {album.category === "video" ? "Lihat Video" : "Lihat Album"}
        </Button>
      </CardFooter>
    </Card>
  );

  // Render album list item component
  const renderAlbumListItem = (album: Album) => (
    <Card
      key={album.id}
      className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-gallery-primary rounded-xl"
      onClick={() => handleAlbumClick(album)}
    >
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="relative flex-shrink-0">
            <img
              src={album.coverImage}
              alt={album.title}
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
            />
            {album.category === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                <div className="bg-white bg-opacity-90 rounded-full p-2">
                  <Play className="h-4 w-4 text-gallery-primary" />
                </div>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-gallery-text-primary text-sm sm:text-base">
                {album.title}
              </h3>
              <div className="flex gap-2">
                <Badge
                  variant={album.category === "video" ? "default" : "secondary"}
                  className={`text-xs ${
                    album.category === "video"
                      ? "bg-gallery-primary hover:bg-gallery-primary-dark"
                      : ""
                  }`}
                >
                  {album.category === "video" ? "Video" : "Foto"}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {album.mediaCount} Media
                </Badge>
              </div>
            </div>
            <div className="space-y-1 text-xs sm:text-sm text-gallery-text-secondary mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(album.date)}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {album.location}
              </div>
            </div>
            <Button
              size="sm"
              className="bg-gallery-primary hover:bg-gallery-primary-dark transition-colors duration-200 text-xs sm:text-sm"
            >
              <Eye className="h-3 w-3 mr-1" />
              {album.category === "video" ? "Lihat Video" : "Lihat Album"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Render pagination component
  const renderPagination = (
    currentPage: number,
    totalPages: number,
    setCurrentPage: (page: number) => void
  ) => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex justify-center items-center gap-2 mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="border-2"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={page === currentPage ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentPage(page)}
            className={`border-2 ${
              page === currentPage
                ? "bg-gallery-primary hover:bg-gallery-primary-dark"
                : ""
            }`}
          >
            {page}
          </Button>
        ))}

        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="border-2"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gallery-bg-light pt-219">
      {/* Hero Section */}
      <section
        className="relative py-20 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/tracking.jpg')" }}
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
              Dokumentasi Foto & Vidio
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
                        onClick={() => handleCategoryChange(category as any)}
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
                          setSortOrder(sort as any);
                          setShowSortDropdown(false);
                        }}
                      >
                        {sort === "terbaru" ? "Terbaru" : "Terlama"}
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
                  {paginatedFotoAlbums.map(renderAlbumCard)}
                </div>
              ) : (
                <div className="space-y-4">
                  {paginatedFotoAlbums.map(renderAlbumListItem)}
                </div>
              )}

              {renderPagination(
                fotoCurrentPage,
                fotoTotalPages,
                setFotoCurrentPage
              )}
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
                  {paginatedVideoAlbums.map(renderAlbumCard)}
                </div>
              ) : (
                <div className="space-y-4">
                  {paginatedVideoAlbums.map(renderAlbumListItem)}
                </div>
              )}

              {renderPagination(
                videoCurrentPage,
                videoTotalPages,
                setVideoCurrentPage
              )}
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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedAlbum && (
            <>
              <DialogHeader>
                <DialogTitle className="text-gallery-text-primary">
                  {selectedAlbum.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Main Media Display */}
                <div className="relative">
                  {selectedAlbum.media[selectedMediaIndex]?.type === "video" ? (
                    <video
                      src={selectedAlbum.media[selectedMediaIndex].url}
                      controls
                      className="w-full h-64 sm:h-80 object-cover rounded-lg"
                    />
                  ) : (
                    <img
                      src={selectedAlbum.media[selectedMediaIndex]?.url}
                      alt={selectedAlbum.media[selectedMediaIndex]?.title}
                      className="w-full h-64 sm:h-80 object-cover rounded-lg"
                    />
                  )}

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
                    <Button className="bg-gallery-primary hover:bg-gallery-primary-dark">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
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
                            key={media.id}
                            className={`relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden ${
                              index === selectedMediaIndex
                                ? "ring-2 ring-gallery-primary"
                                : ""
                            }`}
                            onClick={() => handleMediaSelect(index)}
                          >
                            <img
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
