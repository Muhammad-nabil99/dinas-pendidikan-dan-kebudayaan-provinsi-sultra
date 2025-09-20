import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Calendar, FileText, Scale, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BgImage from '@/assets/tracking.jpg';

const ProdukHukum = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const produkHukum = [
        {
        id: 1,
        title: "Peraturan Daerah No. 5 Tahun 2023",
        subtitle: "Tentang Penyelenggaraan Pendidikan di Provinsi Sulawesi Tenggara",
        category: "perda",
        date: "2023-06-15",
        description: "Peraturan daerah yang mengatur penyelenggaraan pendidikan formal dan non-formal di wilayah Provinsi Sulawesi Tenggara."
        },
        {
        id: 2,
        title: "Keputusan Kepala Dinas No. 123/2023",
        subtitle: "Tentang Penetapan Standar Pelayanan Publik Bidang Pendidikan",
        category: "keputusan",
        date: "2023-08-20",
        description: "Keputusan yang menetapkan standar pelayanan publik untuk meningkatkan kualitas layanan pendidikan."
        },
        {
        id: 3,
        title: "Surat Edaran No. 045/SE/2023",
        subtitle: "Tentang Pelaksanaan Ujian Akhir Semester Ganjil TA 2023/2024",
        category: "surat-edaran",
        date: "2023-11-10",
        description: "Surat edaran yang mengatur teknis pelaksanaan ujian akhir semester ganjil tahun ajaran 2023/2024."
        },
        {
        id: 4,
        title: "Instruksi Kepala Dinas No. 78/2023",
        subtitle: "Tentang Percepatan Implementasi Kurikulum Merdeka",
        category: "instruksi",
        date: "2023-09-05",
        description: "Instruksi untuk mempercepat implementasi kurikulum merdeka di seluruh satuan pendidikan."
        },
        {
        id: 5,
        title: "Pedoman Teknis Bantuan Operasional Sekolah 2024",
        subtitle: "Panduan Penggunaan dan Pertanggungjawaban BOS",
        category: "pedoman",
        date: "2024-01-15",
        description: "Pedoman teknis penggunaan dan pertanggungjawaban dana bantuan operasional sekolah."
        },
        {
        id: 6,
        title: "Peraturan Kepala Dinas No. 234/2023",
        subtitle: "Tentang Sistem Informasi Manajemen Pendidikan",
        category: "peraturan",
        date: "2023-12-01",
        description: "Peraturan yang mengatur implementasi sistem informasi manajemen pendidikan di lingkungan Dinas Pendidikan."
        }
    ];

    const categories = [
        { value: "all", label: "Semua Kategori" },
        { value: "perda", label: "Peraturan Daerah" },
        { value: "keputusan", label: "Keputusan" },
        { value: "surat-edaran", label: "Surat Edaran" },
        { value: "instruksi", label: "Instruksi" },
        { value: "pedoman", label: "Pedoman" },
        { value: "peraturan", label: "Peraturan Kepala Dinas" }
    ];

    const filteredProduk = produkHukum.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const getCategoryIcon = (category: string) => {
        switch (category) {
        case "perda":
        case "peraturan":
            return <Scale className="w-5 h-5 text-government-blue" />;
        case "keputusan":
        case "instruksi":
            return <FileText className="w-5 h-5 text-green-600" />;
        default:
            return <FileText className="w-5 h-5 text-gray-600" />;
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-subtle">
        
        <main>
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
            {/* Header */}
            <section
                className="relative py-20 text-white bg-cover bg-center"
                style={{ backgroundImage: `url(${BgImage})`  }}
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
                        Profil
                      </span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                      Produk Hukum
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
                      Kumpulan peraturan, keputusan, dan dokumen hukum resmi yang dikeluarkan oleh Dinas Pendidikan Provinsi Sulawesi Tenggara
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
                    Pencarian Produk Hukum
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                    <Input
                        placeholder="Cari berdasarkan judul atau deskripsi..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full"
                    />
                    </div>
                    <div className="w-full md:w-64">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
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

            {/* Results */}
            <div className="grid gap-6">
                {filteredProduk.length > 0 ? (
                filteredProduk.map((item) => (
                    <Card key={item.id} className="hover:shadow-elegant transition-shadow">
                    <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-start gap-3 mb-3">
                            {getCategoryIcon(item.category)}
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-1">
                                {item.title}
                                </h3>
                                <p className="text-lg text-government-blue font-medium mb-2">
                                {item.subtitle}
                                </p>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(item.date)}</span>
                                </div>
                                <p className="text-muted-foreground">
                                {item.description}
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Button variant="outline" size="sm">
                            <FileText className="w-4 h-4 mr-2" />
                            Lihat Detail
                            </Button>
                            <Button size="sm">
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
                        Tidak ada produk hukum ditemukan
                    </h3>
                    <p className="text-muted-foreground">
                        Coba ubah kata kunci pencarian atau filter kategori
                    </p>
                    </CardContent>
                </Card>
                )}
            </div>

            {/* Summary Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-government-blue mb-2">
                    {produkHukum.length}
                    </div>
                    <p className="text-muted-foreground">Total Produk Hukum</p>
                </CardContent>
                </Card>
                <Card>
                <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                    {new Date().getFullYear()}
                    </div>
                    <p className="text-muted-foreground">Tahun Terkini</p>
                </CardContent>
                </Card>
                <Card>
                <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                    {categories.length - 1}
                    </div>
                    <p className="text-muted-foreground">Kategori Dokumen</p>
                </CardContent>
                </Card>
            </div>
            </section>
        </main>
        </div>
    );
};

export default ProdukHukum;