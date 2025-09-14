import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car } from "lucide-react";
import { Link } from "react-router-dom";

const fungsiDinas = [
  "Perumusan kebijakan teknis dan operasional di bidang pendidikan dan kebudayaan sesuai dengan kewenangan",
  "Penyelenggaraan urusan pemerintahan dan pelayanan umum di bidang pendidikan dan kebudayaan",
  "Pelaksanaan koordinasi dan sinkronisasi kebijakan teknis operasional program pendidikan dan kebudayaan antar kabupaten/kota dalam daerah",
  "Pelaksanaan fungsi lain yang diberikan oleh Gubernur sesuai tugas dan fungsi dinas",
];

type UnitKerja = {
  nama: string;
  unit: string;
  id: string;
};
const unitKerja: UnitKerja[] = [
  {
    nama: "nama",
    unit: "Kepala Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara",
    id: "kepala-dinas",
  },
  {
    nama: "nama",
    unit: "Sekretaris",
    id: "sekretaris",
  },
  {
    nama: "nama",
    unit: "Bidang Perencanaan dan Penganggaran",
    id: "bidang-perencanaan-dan-penganggaran",
  },
  {
    nama: "nama",
    unit: "Bidang Pembinaan Sekolah Menengah Atas",
    id: "bidang-pembinaan-sekolah-menengah-atas",
  },
  {
    nama: "nama",
    unit: "Bidang Pembinaan Sekolah Menengah Kejuruan dan Pendidikan Khusus-Layanan Khusus",
    id: "bidang-pembinaan-sekolah-menengah-kejuruan-dan-pendidikan-khusus-layanan-khusus",
  },
  {
    nama: "nama",
    unit: "Bidang Pembinaan Guru dan Ketenagaan",
    id: "bidang-pembinaan-guru-dan-ketenagaan",
  },
  {
    nama: "nama",
    unit: "Bidang Kebudayaan",
    id: "bidang-kebudayaan",
  },
  {
    nama: "nama",
    unit: "Unit Pelaksana Teknis Dinas (UPTD)",
    id: "unit-pelaksana-teknis-dinas-uptd",
  },
];

const TugasFungsi = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-government-blue ">
            Tugas Pokok & Fungsi
          </h1>
          <p className=" text-muted-foreground text-md my-1.5">
            Peran dan Tanggung Jawab Dinas Pendidikan
          </p>

          <p className="my-5">
            Dinas Pendidikan Dan Kebudayaan Provinsi Sulawesi Tenggara adalah
            salah satu Dinas Daerah di lingkungan Pemerintah Provinsi Sulawesi
            Tenggara yang merupakan unsur pelaksana otonomi daerah, dipimpin
            oleh seorang Kepala Dinas yang berada di bawah dan bertanggung jawab
            kepada Gubernur melalui Sekretaris Daerah.
          </p>
        </div>

        <div>
          <h1 className="my-10 text-2xl text-center capitalize font-bold text-government-blue mb-4">
            Tugas
          </h1>

          <p className="text-center">
            Berdasarkan Peraturan Daerah Provinsi Sulawesi Tenggara nomor 13
            Tahun 2016, tentang Pembentukan dan Susunan Perangkat Daerah
            Provinsi Provinsi Sulawesi Tenggara, didalamnya menyebutkan bahwa
            “Dinas Pendidikan dan Kebudayaan mempunyai tugas membantu Gubernur
            melaksanakan urusan pemerintahan yang menjadi kewenangan daerah dan
            tugas pembantuan di bidang pendidikan dan kebudayaan.”
          </p>
        </div>
        <div>
          <h1 className="my-10 text-2xl text-center capitalize font-bold text-government-blue mb-4">
            Fungsi
          </h1>
          <p className="text-center">
            Untuk menyelenggarakan tugas sebagaimana dimaksud di atas Dinas
            Pendidikan Dan Kebudayaan Provinsi Sulawesi Tenggara memiliki fungsi
          </p>

          <ol className="my-5 ml-10">
            {fungsiDinas?.map((item, index) => (
              <li key={index} className="py-1">
                {index + 1}. {item}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h1 className="my-20 text-2xl text-center capitalize font-bold text-government-blue mb-4">
            Tugas pokok dan fungsi masing – masing unit kerja
          </h1>

          <div className="flex">
            {unitKerja?.map((item, index) => (
              <Link
                to={`/profil/tugas-fungsi/${item.link}`}
                key={index}
                className="text-center flex flex-col gap-2 flex-1"
              >
                <div className="w-32  h-32 rounded-md  bg-gray-300"></div>
                <h1 className="font-bold capitalize">{item.nama}</h1>
                <h2>{item.unit}</h2>
              </Link>
            ))}
          </div>
        </div>

        {/* <Tabs defaultValue="tugas" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tugas">Tugas Pokok</TabsTrigger>
              <TabsTrigger value="fungsi">Fungsi</TabsTrigger>
            </TabsList>

            <TabsContent value="tugas">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">📋</span>
                    Tugas Pokok Dinas Pendidikan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Perumusan Kebijakan",
                        items: [
                          "Merumuskan kebijakan teknis pendidikan",
                          "Menyusun rencana strategis pendidikan",
                          "Mengembangkan standar pendidikan"
                        ]
                      },
                      {
                        title: "Pelaksanaan Program",
                        items: [
                          "Melaksanakan program pendidikan dasar dan menengah",
                          "Menyelenggarakan pendidikan non formal",
                          "Mengkoordinasikan program pendidikan"
                        ]
                      },
                      {
                        title: "Pembinaan dan Pengawasan",
                        items: [
                          "Melakukan pembinaan satuan pendidikan",
                          "Mengawasi pelaksanaan standar pendidikan",
                          "Mengevaluasi kinerja pendidikan"
                        ]
                      }
                    ].map((section, index) => (
                      <div key={index} className="border-l-4 border-government-blue pl-6">
                        <h3 className="text-xl font-semibold text-government-blue mb-3">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <span className="text-education-green mt-1">•</span>
                              <span className="text-muted-foreground">[Template - {item}]</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fungsi">
              <div className="grid gap-6">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-government-blue">
                      <span className="text-2xl">⚙️</span>
                      Fungsi Utama
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          icon: "🎓",
                          title: "Pendidikan Formal",
                          functions: [
                            "Pengelolaan pendidikan dasar",
                            "Pembinaan pendidikan menengah",
                            "Pengembangan kurikulum"
                          ]
                        },
                        {
                          icon: "📚",
                          title: "Pendidikan Non Formal",
                          functions: [
                            "Program keaksaraan",
                            "Pendidikan keterampilan",
                            "Pendidikan kesetaraan"
                          ]
                        },
                        {
                          icon: "👨‍🏫",
                          title: "Tenaga Pendidik",
                          functions: [
                            "Pengembangan kompetensi guru",
                            "Sertifikasi pendidik",
                            "Penilaian kinerja guru"
                          ]
                        },
                        {
                          icon: "🏫",
                          title: "Sarana Prasarana",
                          functions: [
                            "Pembangunan gedung sekolah",
                            "Pengadaan peralatan",
                            "Pemeliharaan fasilitas"
                          ]
                        }
                      ].map((item, index) => (
                        <Card key={index} className="bg-gradient-primary/5">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <span className="text-2xl">{item.icon}</span>
                              {item.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {item.functions.map((func, funcIndex) => (
                                <li key={funcIndex} className="flex items-start gap-2">
                                  <span className="text-education-green mt-1">•</span>
                                  <span className="text-sm text-muted-foreground">[Template - {func}]</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs> */}
      </div>
    </main>
  );
};

export default TugasFungsi;
