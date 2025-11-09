import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, PenTool, Ban, BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Tabs from "@/components/ppid/Tabs";
import TableInformasi from "@/components/ppid/TableInformasi";
import SearchInput from "@/components/ppid/SearchInput";
import PPIDSkeleton from "@/components/ppid/PPIDSkeleton";
import useGetPPID from "@/features/PPID/useGetPPID";
import BgImage from '../../assets/tracking.jpg';

interface BerkalaItem {
  id: number;
  judul: string;
  tahun: number;
  dokumen_url: string;
}
export interface PPID {
  data: BerkalaItem;
  status: string;
  total_data: 4;
}

const PPIDDip = () => {
  const { PPID, isLoadingPPID } = useGetPPID();

  const [activeTab, setActiveTab] = useState("informasi-berkala");

  const currentActiveTab = activeTab
    ?.split("-")
    .filter((word) => word !== "informasi")
    .join(" ");

  const [berkalaData, setBerkalaData] = useState<BerkalaItem[]>([]);
  const [filteredBerkalaData, setFilteredBerkalaData] = useState<BerkalaItem[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mock data for Informasi Berkala
        const mockBerkala: BerkalaItem[] = PPID?.data?.filter(
          (item) => item?.informasi?.toLowerCase() == currentActiveTab
        );

        setBerkalaData(mockBerkala);
        setFilteredBerkalaData(mockBerkala);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [PPID?.data, currentActiveTab]);

  // Filter data based on search term
  useEffect(() => {
    const filtered = berkalaData?.filter((item) =>
      item?.judul?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    setFilteredBerkalaData(filtered);
  }, [searchTerm, berkalaData]);

  const tabs = [
    { id: "informasi-berkala", label: "Informasi Berkala", icon: <FileText className="w-6 h-6" /> },
    { id: "informasi-setiap-saat", label: "Informasi Setiap Saat", icon: <Search className="w-6 h-6" /> },
    { id: "informasi-serta-merta", label: "Informasi Serta Merta", icon: <PenTool className="w-6 h-6" /> },
    {
      id: "informasi-dikecualikan",
      label: "Informasi Dikecualikan",
      icon: <Ban className="w-6 h-6" />,
    },
    {
      id: "daftar-informasi-publik",
      label: "Daftar Informasi Publik",
      icon: <BookOpen className="w-6 h-6" />,
    },
  ];

  const handleDownload = (url: string) => {
    window.open(url, "_blank");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "informasi-berkala":
        return (
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-education-green">
                <FileText className="w-6 h-6" />
                Informasi Berkala
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Informasi yang wajib disediakan dan diumumkan secara berkala
              </p>

              <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Cari nama dokumen..."
              />

              <TableInformasi
                data={filteredBerkalaData}
                onDownload={handleDownload}
              />

              {filteredBerkalaData?.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  Tidak ada dokumen yang ditemukan
                </div>
              )}
            </CardContent>
          </Card>
        );

      case "informasi-setiap-saat":
        return (
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent-gold">
                <Search className="w-6 h-6" />
                Informasi Setiap Saat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Informasi yang tersedia setiap saat diminta
              </p>

              <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Cari nama dokumen..."
              />

              <TableInformasi
                data={filteredBerkalaData}
                onDownload={handleDownload}
              />

              {filteredBerkalaData?.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  Tidak ada dokumen yang ditemukan
                </div>
              )}
            </CardContent>
          </Card>
        );

      case "informasi-serta-merta":
        return (
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-government-blue">
                <PenTool className="w-6 h-6" />
                Informasi Serta Merta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Informasi yang dapat mengancam hajat hidup orang banyak
              </p>

              <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Cari nama dokumen..."
              />

              <TableInformasi
                data={filteredBerkalaData}
                onDownload={handleDownload}
              />

              {filteredBerkalaData?.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  Tidak ada dokumen yang ditemukan
                </div>
              )}
            </CardContent>
          </Card>
        );

      case "informasi-dikecualikan":
        return (
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <Ban className="w-6 h-6" />
                Informasi Dikecualikan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Informasi yang dikecualikan dari keterbukaan
              </p>

              <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Cari nama dokumen..."
              />

              <TableInformasi
                data={filteredBerkalaData}
                onDownload={handleDownload}
              />

              {filteredBerkalaData?.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  Tidak ada dokumen yang ditemukan
                </div>
              )}
            </CardContent>
          </Card>
        );

      case "daftar-informasi-publik":
        return (
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-government-blue">
                <BookOpen className="w-6 h-6" />
                Daftar Informasi Publik (DIP)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Daftar lengkap informasi publik yang tersedia
              </p>

              <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Cari nama dokumen..."
              />

              <TableInformasi
                data={filteredBerkalaData}
                onDownload={handleDownload}
              />

              {filteredBerkalaData?.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  Tidak ada dokumen yang ditemukan
                </div>
              )}
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  if (loading || isLoadingPPID) {
    return <PPIDSkeleton />;
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
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
              <button className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-4 py-2 rounded-md flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Kembali ke Beranda</span>
              </button>
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full mb-3 sm:mb-4">
              <BookOpen className="w-6 h-6" />
              <span className="text-xs sm:text-sm font-medium ml-2">PPID</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              Daftar Informasi Publik PPID
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
              Dinas Pendidikan Provinsi Sulawesi Tenggara
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="transition-opacity duration-300 ease-in-out">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PPIDDip;
