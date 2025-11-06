import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Tabs from "@/components/ppid/Tabs";
import TableInformasi from "@/components/ppid/TableInformasi";
import SearchInput from "@/components/ppid/SearchInput";

interface BerkalaItem {
  id: number;
  nama: string;
  tahun: number;
  url: string;
}

const DipPage = () => {
  const [activeTab, setActiveTab] = useState("informasi-berkala");
  const [berkalaData, setBerkalaData] = useState<BerkalaItem[]>([]);
  const [filteredBerkalaData, setFilteredBerkalaData] = useState<BerkalaItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mock data for Informasi Berkala
        const mockBerkala: BerkalaItem[] = [
          { id: 1, nama: "Rencana Strategis (Renstra) 2024", tahun: 2024, url: "#" },
          { id: 2, nama: "Rencana Kerja Perubahan 2022", tahun: 2022, url: "#" },
          { id: 3, nama: "Laporan Kinerja Instansi Pemerintah (LKjIP) 2024", tahun: 2024, url: "#" }
        ];

        setBerkalaData(mockBerkala);
        setFilteredBerkalaData(mockBerkala);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter data based on search term
  useEffect(() => {
    const filtered = berkalaData.filter(item =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBerkalaData(filtered);
  }, [searchTerm, berkalaData]);

  const tabs = [
    { id: "informasi-berkala", label: "Informasi Berkala", icon: "📄" },
    { id: "informasi-setiap-saat", label: "Informasi Setiap Saat", icon: "🔍" },
    { id: "informasi-serta-merta", label: "Informasi Serta Merta", icon: "📝" },
    { id: "informasi-dikecualikan", label: "Informasi Dikecualikan", icon: "🚫" },
    { id: "daftar-informasi-publik", label: "Daftar Informasi Publik", icon: "📚" },
  ];

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "informasi-berkala":
        return (
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-education-green">
                <span className="text-2xl">📄</span>
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

              {filteredBerkalaData.length === 0 && (
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
                <span className="text-2xl">🔍</span>
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

              {filteredBerkalaData.length === 0 && (
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
                <span className="text-2xl">📝</span>
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

              {filteredBerkalaData.length === 0 && (
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
                <span className="text-2xl">🚫</span>
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

              {filteredBerkalaData.length === 0 && (
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
                <span className="text-2xl">📚</span>
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

              {filteredBerkalaData.length === 0 && (
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

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="transition-opacity duration-300 ease-in-out">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default DipPage;
