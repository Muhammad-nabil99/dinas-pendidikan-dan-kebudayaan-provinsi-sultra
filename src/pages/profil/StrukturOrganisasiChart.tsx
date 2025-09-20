import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OrganizationChart from "@/components/ui/StrukturOrganisasi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, Clock, Search, Filter } from "lucide-react";
import BgImage from '@/assets/tracking.jpg';

const StrukturOrganisasi = () => {
  return (
    <main>
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
                  Struktur Organisasi
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                Struktur Organisasi
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
                Susunan Organisasi Dinas Pendidikan Sulawesi Tenggara
              </p>
            </div>
          </div>
        </section>
      <div>
        <OrganizationChart />
      </div>
    </main>
  );
};

export default StrukturOrganisasi;

// <div className="space-y-6">
//   {/* Kepala Dinas */}
//   <Card className="shadow-elegant border-l-4 border-government-blue">
//     <CardContent className="p-6">
//       <div className="text-center">
//         <div className="bg-government-blue text-white rounded-lg p-6 mb-4">
//           <h2 className="text-xl font-bold">KEPALA DINAS</h2>
//           <p className="text-sm opacity-90">[Nama Kepala Dinas]</p>
//         </div>
//       </div>
//     </CardContent>
//   </Card>

//   {/* Sekretariat */}
//   <Card className="shadow-elegant">
//     <CardHeader>
//       <CardTitle className="text-center text-government-blue">
//         SEKRETARIAT
//       </CardTitle>
//     </CardHeader>
//     <CardContent>
//       <div className="grid md:grid-cols-3 gap-4">
//         {[
//           "Sub Bagian Umum dan Kepegawaian",
//           "Sub Bagian Keuangan",
//           "Sub Bagian Program dan Pelaporan",
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="bg-education-green/10 p-4 rounded-lg text-center"
//           >
//             <h3 className="font-semibold text-education-green mb-2">
//               {item}
//             </h3>
//             <p className="text-sm text-muted-foreground">
//               [Template - Nama Kepala Sub Bagian]
//             </p>
//           </div>
//         ))}
//       </div>
//     </CardContent>
//   </Card>

//   {/* Bidang-bidang */}
//   <div className="grid md:grid-cols-2 gap-6">
//     {[
//       {
//         title: "BIDANG PENDIDIKAN DASAR",
//         color: "bg-blue-500",
//         subBagian: [
//           "Seksi Kurikulum dan Penilaian SD",
//           "Seksi Peserta Didik dan Pembangunan Karakter SD",
//           "Seksi Kelembagaan dan Sarana Prasarana SD",
//         ],
//       },
//       {
//         title: "BIDANG PENDIDIKAN MENENGAH",
//         color: "bg-green-500",
//         subBagian: [
//           "Seksi Kurikulum dan Penilaian SMP",
//           "Seksi Peserta Didik dan Pembangunan Karakter SMP",
//           "Seksi Kelembagaan dan Sarana Prasarana SMP",
//         ],
//       },
//       {
//         title: "BIDANG GURU DAN TENAGA KEPENDIDIKAN",
//         color: "bg-purple-500",
//         subBagian: [
//           "Seksi Pengembangan Karir Guru",
//           "Seksi Penghargaan dan Perlindungan Guru",
//           "Seksi Tenaga Kependidikan",
//         ],
//       },
//       {
//         title: "BIDANG KEBUDAYAAN",
//         color: "bg-orange-500",
//         subBagian: [
//           "Seksi Kesenian dan Perfilman",
//           "Seksi Sejarah dan Kepurbakalaan",
//           "Seksi Nilai Budaya dan Diplomasi Budaya",
//         ],
//       },
//     ].map((bidang, index) => (
//       <Card key={index} className="shadow-elegant">
//         <CardHeader>
//           <CardTitle
//             className={`text-white text-center p-4 rounded-lg ${bidang.color}`}
//           >
//             {bidang.title}
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-3">
//             <div className="text-center mb-4">
//               <p className="font-semibold text-muted-foreground">
//                 [Template - Nama Kepala Bidang]
//               </p>
//             </div>
//             {bidang.subBagian.map((seksi, seksiIndex) => (
//               <div
//                 key={seksiIndex}
//                 className="bg-muted/50 p-3 rounded-lg"
//               >
//                 <h4 className="font-medium text-sm text-government-blue">
//                   {seksi}
//                 </h4>
//                 <p className="text-xs text-muted-foreground">
//                   [Template - Nama Kepala Seksi]
//                 </p>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     ))}
//   </div>

//   {/* Unit Pelaksana Teknis */}
//   <Card className="shadow-elegant border-l-4 border-accent-gold">
//     <CardHeader>
//       <CardTitle className="text-center text-government-blue">
//         UNIT PELAKSANA TEKNIS
//       </CardTitle>
//     </CardHeader>
//     <CardContent>
//       <div className="grid md:grid-cols-4 gap-4">
//         {[
//           "LPMP Sulawesi Tenggara",
//           "Balai Bahasa Sulawesi Tenggara",
//           "Museum Negeri Sulawesi Tenggara",
//           "Taman Budaya Sulawesi Tenggara",
//         ].map((upt, index) => (
//           <div
//             key={index}
//             className="bg-accent-gold/10 p-4 rounded-lg text-center"
//           >
//             <h3 className="font-semibold text-accent-gold mb-2">
//               {upt}
//             </h3>
//             <p className="text-sm text-muted-foreground">
//               [Template - Nama Kepala UPT]
//             </p>
//           </div>
//         ))}
//       </div>
//     </CardContent>
//   </Card>
// </div>
