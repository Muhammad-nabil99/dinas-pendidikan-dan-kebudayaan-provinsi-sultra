import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Download, FileText } from "lucide-react";

interface DipItem {
  id: number;
  kategori: string;
  jumlah: string;
  update: string;
  akses: string;
  deskripsi?: string;
}

interface BerkalaItem {
  id: number;
  nama_dokumen: string;
  tahun: string;
  file_url: string;
}

const DipList = () => {
  const [activeTab, setActiveTab] = useState("informasi-berkala");
  const [dipData, setDipData] = useState<DipItem[]>([]);
  const [berkalaData, setBerkalaData] = useState<BerkalaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBerkala, setSearchBerkala] = useState("");

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchDipData = async () => {
      try {
        // TODO: Replace with actual API call
        // const response = await getDipData();
        // setDipData(response.data);

        // Mock data for DIP
        const mockData: DipItem[] = [
          {
            id: 1,
            kategori: "Organisasi dan Kepegawaian",
            jumlah: "25 Dokumen",
            update: "Januari 2024",
            akses: "Terbuka",
            deskripsi: "Informasi tentang struktur organisasi, daftar pegawai, dan kepegawaian"
          },
          {
            id: 2,
            kategori: "Program dan Kegiatan",
            jumlah: "38 Dokumen",
            update: "Februari 2024",
            akses: "Terbuka",
            deskripsi: "Dokumentasi program pendidikan dan kegiatan yang telah dilaksanakan"
          },
          {
            id: 3,
            kategori: "Kinerja dan Capaian",
            jumlah: "15 Dokumen",
            update: "Maret 2024",
            akses: "Terbuka",
            deskripsi: "Laporan kinerja, capaian target, dan evaluasi program"
          },
          {
            id: 4,
            kategori: "Keuangan dan Anggaran",
            jumlah: "20 Dokumen",
            update: "Maret 2024",
            akses: "Terbuka",
            deskripsi: "Laporan keuangan, APBD, dan penggunaan anggaran"
          },
          {
            id: 5,
            kategori: "Pengadaan Barang dan Jasa",
            jumlah: "12 Dokumen",
            update: "April 2024",
            akses: "Terbuka",
            deskripsi: "Dokumen pengadaan barang dan jasa sesuai peraturan"
          },
        ];

        // Mock data for Informasi Berkala
        const mockBerkala: BerkalaItem[] = [
          {
            id: 1,
            nama_dokumen: "Profil Dinas Pendidikan",
            tahun: "2024",
            file_url: "#"
          },
          {
            id: 2,
            nama_dokumen: "Rencana Strategis (Renstra)",
            tahun: "2023",
            file_url: "#"
          },
          {
            id: 3,
            nama_dokumen: "Laporan Kinerja (LAKIP)",
            tahun: "2023",
            file_url: "#"
          },
          {
            id: 4,
            nama_dokumen: "Laporan Keuangan",
            tahun: "2023",
            file_url: "#"
          },
          {
            id: 5,
            nama_dokumen: "Data Statistik Pendidikan",
            tahun: "2024",
            file_url: "#"
          },
        ];

        setDipData(mockData);
        setBerkalaData(mockBerkala);
      } catch (error) {
        console.error("Error fetching DIP data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDipData();
  }, []);

  const filteredDipData = dipData.filter(item =>
    item.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.deskripsi?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBerkalaData = berkalaData.filter(item =>
    item.nama_dokumen.toLowerCase().includes(searchBerkala.toLowerCase())
  );

  const informasiBerkala = [
    "Profil Dinas Pendidikan",
    "Rencana Strategis (Renstra)",
    "Laporan Kinerja (LAKIP)",
    "Laporan Keuangan",
    "Data Statistik Pendidikan",
    "Program dan Kegiatan",
  ];

  const informasiSertaMerta = [
    "Kebijakan pendidikan mendesak",
    "Peringatan keamanan sekolah",
    "Perubahan jadwal ujian nasional",
    "Informasi bencana alam",
    "Kebijakan COVID-19 pendidikan",
    "Pengumuman darurat",
  ];

  const informasiSetiapSaat = [
    "Daftar informasi publik",
    "Hasil keputusan rapat",
    "SOP pelayanan publik",
    "Daftar penerima bantuan",
    "Jadwal pelayanan",
    "Kontak informasi",
  ];

  const informasiDikecualikan = [
    "Rahasia negara",
    "Rahasia pribadi",
    "Rahasia dagang",
    "Hak cipta",
    "Informasi yang sedang dalam proses",
  ];

  const tabs = [
    { id: "informasi-berkala", label: "Informasi Berkala", icon: "📄" },
    { id: "informasi-setiap-saat", label: "Informasi Setiap Saat", icon: "🔍" },
    { id: "informasi-serta-merta", label: "Informasi Serta Merta", icon: "📝" },
    { id: "informasi-dikecualikan", label: "Informasi Dikecualikan", icon: "🚫" },
    { id: "daftar-informasi-publik", label: "Daftar Informasi Publik", icon: "📚" },
  ];

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

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

              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Cari nama dokumen..."
                    value={searchBerkala}
                    onChange={(e) => setSearchBerkala(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-2 text-left">No</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Nama Dokumen</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Tahun</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBerkalaData.map((item, index) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-2">{index + 1}</td>
                        <td className="border border-gray-200 px-4 py-2">{item.nama_dokumen}</td>
                        <td className="border border-gray-200 px-4 py-2">{item.tahun}</td>
                        <td className="border border-gray-200 px-4 py-2">
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => window.open(item.file_url, '_blank')}
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Unduh
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

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
              <p className="text-sm text-muted-foreground mb-3">
                Informasi yang tersedia setiap saat diminta
              </p>
              <ul className="space-y-2 text-sm">
                {informasiSetiapSaat.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent-gold">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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
              <p className="text-sm text-muted-foreground mb-3">
                Informasi yang dapat mengancam hajat hidup orang banyak
              </p>
              <ul className="space-y-2 text-sm">
                {informasiSertaMerta.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-government-blue">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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
              <p className="text-sm text-muted-foreground mb-3">
                Informasi yang dikecualikan dari keterbukaan
              </p>
              <ul className="space-y-2 text-sm">
                {informasiDikecualikan.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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
              {/* Search */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Cari kategori atau deskripsi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* DIP List */}
              <div className="space-y-4">
                {filteredDipData.map((dip) => (
                  <div key={dip.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-government-blue mb-2">
                          {dip.kategori}
                        </h4>
                        {dip.deskripsi && (
                          <p className="text-sm text-muted-foreground mb-2">
                            {dip.deskripsi}
                          </p>
                        )}
                        <div className="grid md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                          <span>📄 {dip.jumlah}</span>
                          <span>📅 Update: {dip.update}</span>
                          <span>
                            🔓 Status:{" "}
                            <Badge variant={dip.akses === "Terbuka" ? "default" : "secondary"}>
                              {dip.akses}
                            </Badge>
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button size="sm" variant="outline">
                          <FileText className="w-4 h-4 mr-1" />
                          Detail
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredDipData.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  Tidak ada data yang ditemukan
                </div>
              )}

              <div className="text-center mt-6">
                <Button className="bg-government-blue hover:bg-government-blue/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download DIP Lengkap
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span className={activeTab === tab.id ? "text-white" : "text-gray-400"}>
              {tab.icon}
            </span>
            <span className="text-sm font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default DipList;
