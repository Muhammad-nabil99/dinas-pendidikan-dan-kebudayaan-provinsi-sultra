import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Lightbulb, Users, TrendingUp, Award, Calendar, ArrowRight, Target, Zap, Globe, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import BgImage from '../assets/tracking.jpg';

const Inovasi = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const innovations = [
    {
      id: 1,
      title: "E-Learning Platform Terpadu",
      description: "Platform pembelajaran digital yang mengintegrasikan semua materi pembelajaran dari berbagai jenjang pendidikan",
      category: "Digital",
      status: "Aktif",
      impact: "15,000+ siswa terbantu",
      year: "2024",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Smart School Management System",
      description: "Sistem manajemen sekolah pintar untuk administrasi, absensi, dan monitoring kinerja secara real-time",
      category: "Teknologi",
      status: "Implementasi",
      impact: "250+ sekolah",
      year: "2024",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Program Guru Digital",
      description: "Pelatihan dan sertifikasi guru dalam penggunaan teknologi digital untuk pembelajaran modern",
      category: "Pelatihan",
      status: "Berlangsung",
      impact: "5,000+ guru terlatih",
      year: "2023",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Mobile Learning App",
      description: "Aplikasi mobile untuk pembelajaran offline dan online yang dapat diakses kapan saja",
      category: "Mobile",
      status: "Beta Testing",
      impact: "10,000+ download",
      year: "2024",
      image: "/placeholder.svg"
    }
  ];

  const achievements = [
    {
      title: "Penghargaan Inovasi Terbaik",
      year: "2024",
      description: "Dari Kementerian Pendidikan dan Kebudayaan"
    },
    {
      title: "Best Digital Innovation",
      year: "2023",
      description: "Kategori Pendidikan Regional Sulawesi"
    },
    {
      title: "Smart City Award",
      year: "2023",
      description: "Kontribusi dalam Smart Education"
    }
  ];

  const stats = [
    { label: "Inovasi Aktif", value: "25+", icon: Lightbulb },
    { label: "Sekolah Terdampak", value: "350+", icon: Target },
    { label: "Siswa Terbantu", value: "50K+", icon: Users },
    { label: "Guru Terlatih", value: "8K+", icon: TrendingUp }
  ];

  const filteredInnovations = innovations.filter(innovation =>
    innovation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    innovation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    innovation.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                      <span className="text-xs sm:text-sm font-medium">
                        Inovasi
                      </span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                      Inovasi Pendidikan
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
                      Membangun masa depan pendidikan melalui inovasi dan teknologi terdepan
                    </p>
                  </div>
                </div>
          </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-government-blue/10 rounded-full">
                    <stat.icon className="w-8 h-8 text-government-blue" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-government-blue mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="innovations" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="innovations">Inovasi Terbaru</TabsTrigger>
              <TabsTrigger value="achievements">Pencapaian</TabsTrigger>
              <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            </TabsList>

            <TabsContent value="innovations" className="space-y-6">
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Cari inovasi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              {/* Innovations Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInnovations.map((innovation) => (
                  <Card key={innovation.id} className="group hover:shadow-elegant transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{innovation.category}</Badge>
                        <Badge 
                          variant={innovation.status === "Aktif" ? "default" : "outline"}
                          className={innovation.status === "Aktif" ? "bg-green-100 text-green-800" : ""}
                        >
                          {innovation.status}
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-government-blue transition-colors">
                        {innovation.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 line-clamp-3">
                        {innovation.description}
                      </CardDescription>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          {innovation.impact}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {innovation.year}
                        </div>
                      </div>
                      <Button variant="ghost" className="w-full mt-4 group-hover:bg-government-blue group-hover:text-white transition-colors">
                        Pelajari Lebih Lanjut
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Pencapaian & Penghargaan</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Berbagai penghargaan dan pengakuan atas inovasi dalam bidang pendidikan
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-yellow-100 rounded-full">
                          <Award className="w-8 h-8 text-yellow-600" />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <Badge variant="outline">{achievement.year}</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{achievement.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="roadmap" className="space-y-6">
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
            </TabsContent>
          </Tabs>
        </div>
      </section>
    
    </div>
  );
};

export default Inovasi;