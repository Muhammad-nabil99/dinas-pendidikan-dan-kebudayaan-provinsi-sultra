import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Filter,
  Lightbulb,
  Users,
  TrendingUp,
  Award,
  Calendar,
  Target,
  ArrowLeft,
  Clock,
  MapPin,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import BgImage from "../../assets/tracking.jpg";
import useGetInovasi from "@/features/inovasi/useGetInovasi";
import CardLoadingSkeleton from "@/components/CardLoadingSkeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Inovasi = () => {
  const { inovasi, isLoading } = useGetInovasi();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, SetSelectedSchool] = useState("semua");
  const schools = ["Semua", "SMA", "SMK", "SLB"];

  const achievements = [
    {
      title: "Penghargaan Inovasi Terbaik",
      year: "2024",
      description: "Dari Kementerian Pendidikan dan Kebudayaan",
    },
    {
      title: "Best Digital Innovation",
      year: "2023",
      description: "Kategori Pendidikan Regional Sulawesi",
    },
    {
      title: "Smart City Award",
      year: "2023",
      description: "Kontribusi dalam Smart Education",
    },
  ];
  const stats = [
    { label: "Inovasi Aktif", value: "25+", icon: Lightbulb },
    { label: "Sekolah Terdampak", value: "350+", icon: Target },
    { label: "Siswa Terbantu", value: "50K+", icon: Users },
    { label: "Guru Terlatih", value: "8K+", icon: TrendingUp },
  ];

  const filteredInnovations = inovasi?.filter((item) => {
    // Search filter
    const searchMatch =
      searchTerm === "" ||
      item?.judul?.toLowerCase().includes(searchTerm.toLowerCase());

    // School filter
    const schoolMatch =
      selectedSchool === "" ||
      selectedSchool.toLowerCase() === "semua" ||
      item?.instansi?.toLowerCase().includes(selectedSchool.toLowerCase());

    // All conditions must be true
    return searchMatch && schoolMatch;
  });

  return (
    <div className="min-h-screen bg-background">
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
              <span className="text-xs sm:text-sm font-medium">Inovasi</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              Inovasi Pendidikan
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
              Membangun masa depan pendidikan melalui inovasi dan teknologi
              terdepan
            </p>
          </div>
        </div>
      </section>


      {/* Main Content */}
      {isLoading ? (
        <CardLoadingSkeleton />
      ) : (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="innovations" className="w-full">
              {/* <TabsList className="grid w-full grid-cols-2"> */}
              {/* <TabsTrigger value="innovations">Inovasi Terbaru</TabsTrigger>
                <TabsTrigger value="achievements">Pencapaian</TabsTrigger> */}
              {/* <TabsTrigger value="roadmap">Roadmap</TabsTrigger> */}
              {/* </TabsList> */}

              <TabsContent value="innovations" className="space-y-6">
                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div className="relative flex-1 ">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Cari inovasi..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full"
                    />
                  </div>
                  <Select onValueChange={(value) => SetSelectedSchool(value)}>
                    <SelectTrigger className="w-full sm:w-48">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Sekolah" />
                    </SelectTrigger>
                    <SelectContent>
                      {schools.map((school) => (
                        <SelectItem key={school} value={school}>
                          {school}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Innovations Grid */}
                <div
                  className={`${
                    filteredInnovations.length <= 0 ? "" : "grid grid-cols-1"
                  } md:grid-cols-2 lg:grid-cols-3 gap-8`}
                >
                  {filteredInnovations.length > 0 ? (
                    filteredInnovations?.map((innovation) => (
                      <Card
                        key={innovation.id}
                        className="group hover:shadow-medium transition-all duration-300 overflow-hidden"
                      >
                        <div className="aspect-video overflow-hidden">
                          <LazyLoadImage
                            effect={isLoading && "blur"}
                            loading="lazy"
                            src={`https://dashboard.btikpsultra.my.id/storage/${innovation?.coverImage}`}
                            alt={innovation?.judul}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-3">
                            <Badge
                              variant="secondary"
                              className="bg-government-blue/10 text-government-blue hover:bg-government-blue/20"
                            >
                              {innovation?.category || innovation?.tabel}
                            </Badge>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <Clock className="w-4 h-4 mr-1" />
                              {new Date(
                                innovation?.created_at
                              ).toLocaleDateString()}
                            </div>
                          </div>
                          <CardTitle className="text-lg leading-tight group-hover:text-government-blue transition-colors">
                            {innovation?.judul}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                            {innovation?.deskripsi}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="flex  items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className={"w-4 h-4"} />
                              <p className="capitalize">{innovation?.lokasi}</p>
                            </span>
                            <Link to={`/inovasi/${innovation.id}`}>
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
                    ))
                  ) : (
                    <p className="text-center capitalize text-gray-400">
                     Belum ada data inovasi pendidikan yang tersedia.
                    </p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Pencapaian & Penghargaan
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Berbagai penghargaan dan pengakuan atas inovasi dalam bidang
                    pendidikan
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements?.map((achievement, index) => (
                    <Card
                      key={index}
                      className="text-center hover:shadow-elegant transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          <div className="p-3 bg-yellow-100 rounded-full">
                            <Award className="w-8 h-8 text-yellow-600" />
                          </div>
                        </div>
                        <CardTitle className="text-lg">
                          {achievement.title}
                        </CardTitle>
                        <Badge variant="outline">{achievement.year}</Badge>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          {achievement.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* <TabsContent value="roadmap" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Roadmap Inovasi</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Rencana pengembangan inovasi pendidikan untuk masa depan
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    year: "2024",
                    title: "Fase Digitalisasi Penuh",
                    items: ["AI-powered Learning Analytics", "Virtual Reality Classroom", "Blockchain Certificates"]
                  },
                  {
                    year: "2025",
                    title: "Fase Integrasi Ekosistem",
                    items: ["Cross-platform Integration", "Industry Partnership", "Global Collaboration"]
                  },
                  {
                    year: "2026",
                    title: "Fase Transformasi Total",
                    items: ["Fully Autonomous Learning", "Personalized AI Tutors", "Smart City Education Hub"]
                  }
                ].map((phase, index) => (
                  <Card key={index} className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-government-blue/20"></div>
                    <CardHeader className="relative">
                      <div className="absolute left-6 top-6 w-4 h-4 bg-government-blue rounded-full border-4 border-white shadow-lg"></div>
                      <div className="ml-16">
                        <Badge className="mb-2">{phase.year}</Badge>
                        <CardTitle>{phase.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="ml-16">
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-muted-foreground">
                            <ArrowRight className="w-4 h-4 mr-2 text-government-blue" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent> */}
            </Tabs>
          </div>
        </section>
      )}
    </div>
  );
};

export default Inovasi;
