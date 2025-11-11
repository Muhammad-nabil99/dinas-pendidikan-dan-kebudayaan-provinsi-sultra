import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useParams } from "react-router-dom";
import AvatarImage from '@/assets/avatar.png';

const unitKerjaDetails = {
  "kepala-dinas": {
    title: "Kepala Dinas Pendidikan dan Kebudayaan",
    description:
      "Memimpin, membina, mengkoordinasikan, merencanakan, melaksanakan kebijakan dan program strategis, serta mengendalikan seluruh kegiatan bidang pendidikan dan kebudayaan. Kepala Dinas bertanggung jawab atas terlaksananya seluruh tugas dan fungsi dinas.",
    fungsi: {
      description: "Utama",
      points: [
        "Mengendalikan seluruh kegiatan bidang pendidikan dan kebudayaan.",
        "Bertanggung jawab atas pelaksanaan tugas dinas."
      ],
      dibawahi: [
        "Seluruh bidang",
        "Sekretariat",
        "UPTD",
        "KCD",
      ],
    },
  },
  sekretaris: {
    title: "Sekretaris",
    description:
      // "Mempunyai tugas merencanakan, menyusun, melaksanakan, membina tugas-tugas kebijakan taktis di bidang pelayanan administratif, perlengkapan, keuangan, kepegawaian, inventarisasi aset, ketatausahaan, protokol, humas, rumah tangga, organisasi dan ketatalaksana, analisa jabatan, dokumentasi peraturan perundang-undangan dan mengkoordinasikan penyelenggaraan tugas-tugas bidang secara terpadu",
      "Mengelola pelayanan administratif, perlengkapan, keuangan, kepegawaian, aset, ketatausahaan, protokol, humas, rumah tangga, organisasi, dokumentasi peraturan, serta mengoordinasikan pelaksanaan tugas bidang secara terpadu.",
    fungsi: {
      description:
        "Dalam melaksanakan tugas pokok sebagaimana dimaksud di atas sekretariat mempunyai fungsi sebagai berikut",
      points: [
        "Koordinasi perencanaan dan penyusunan program sekretariat.",
        "Administrasi perlengkapan, keuangan, kepegawaian, dan barang milik daerah.",
        "Pelaksanaan urusan hukum, organisasi, ketatausahaan, serta dokumentasi perundangan.",
        "Pelaporan dan evaluasi program sekretariat.",
        "Melaksanakan fungsi lain dari Kepala Dinas.",
        // "Pelaksanaan urusan barang milik daerah",
        // "Pelaksanaan administrasi kepegawaian",
        // "Pelaksanaan urusan hukum dan perundang-undangan",
        // "Pelaksanaan urusan ketatausahaan",
        // "Pelaksanaan urusan organisasi dan tatalaksana, dokumentasi perundang-undangan, serta analisis jabatan",
        // "Pelaporan dan evaluasi pelaksanaan program dan kegiatan sekretariat",
        // "Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsi",
      ],
      dibawahi: [
        "Sub Bagian Kepegawaian",
        "Sub Bagian Keuangan dan Aset",
        "Sub Bagian Umum dan Hubungan Masyarakat.",
      ],
    },
  },
  "bidang-perencanaan-dan-penganggaran": {
    title: "Bidang Perencanaan dan Penganggaran",
    description:
      // "Mengkoordinasikan rencana, program, kegiatan, anggaran, menyusun, mengevaluasi dan melaporkan pelasanaan program kerja, menyusun dan mengevaluasi serta melaporkan pelaksanaan program kerja dan anggaran dinas, mengsinkronkan kebijakan operasional serta program pendidikan dan kebudayaan antar kabupaten/kota dalam Daerah, menyusun perencanaan strategis dinas, menyusun rencana kerja tahunan dinas, menyusun rencana kerja dan anggaran dinas, penyusunan bahan pelaksanaan urusan tugas pembantuan di bidang pendidikan dan kebudayaan, memberikan layanan teknis dibidang perencanaan, melakukan kegiatan pendataan pendidikan dan kebudayaan.",
      "Mengkoordinasikan perencanaan, program, kegiatan, anggaran, monitoring, evaluasi, serta sinkronisasi kebijakan pendidikan dan kebudayaan antar kabupaten/kota.",
    fungsi: {
      description:
        "Dalam melaksanakan tugas pokok sebagaimana dimaksud di atas bidang perencanaan dan penganggaran mempunyai fungsi sebagai berikut :",
      points: [
        "Penyusunan program, kegiatan, rencana strategis, dan anggaran dinas.",
        "Pelayanan teknis perencanaan dan penganggaran.",
        "Monitoring, evaluasi, dan pelaporan kegiatan.",
        "Pelaksanaan pendataan pendidikan dan kebudayaan.",
        "Sinkronisasi kebijakan pendidikan dan kebudayaan tingkat provinsi.",
        // "Pelaporan dan evaluasi pelasanaan program dan kegiatan bidang",
        // "Pengkordinasian pelaksanaan pendataan pendidikan dan kebudayaan",
        // "Pengkoordinasian dan singkronisasi kebijakan operasional dan program pendidikan dan kebudayaan antar kabupaten/kota dalam provinsi",
        // "Pelaksanaan dan/atau fasilitasi penyelenggaraan tugas pembantuan di bidang pendidikan dasar, PAUDNI, dan kebudayaan",
        // "Pelaksanaan monitoring, evaluasi dari program dan kegiatan dinas",
        // "Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsinya.",
      ],
      dibawahi: [
        "Seksi Penyusunan Rencana Program dan Penganggaran",
        "Seksi Pendataan, Monitoring, Evaluasi dan Pelaporan",
        "Seksi Penyelenggaraan Tugas Pembantuan.",
      ],
    },
  },
  "bidang-pembinaan-sekolah-menengah-atas": {
    title: "Bidang Pembinaan Sekolah Menengah Atas",
    description:
      "Mengelola kurikulum, penilaian, kelembagaan, sarana prasarana, kesiswaan, serta pendidikan karakter pada jenjang SMA.",
    fungsi: {
      description:
        "Dalam melaksanakan tugas pokok sebagaimana dimaksud di atas bidang perencanaan dan penganggaran mempunyai fungsi sebagai berikut :",
      points: [
        "Penyusunan program dan kegiatan bidang.",
        "Pengembangan kelembagaan dan sarana prasarana SMA.",
        "Pembinaan mutu kesiswaan dan pendidikan karakter.",
        "Monitoring, evaluasi, dan pelaporan pelaksanaan kegiatan.",
        "Koordinasi pelaksanaan ujian dan akreditasi SMA.",
        // "Pelaksanaan pembinaan dan pengembangan mutu kesiswaan dan pendidikan karakter",
        // "Pelaksanaan koordinasi, monitoring, dan evaluasi pelaksanaan, Ujian Nasional, Ujian Sekolah, dan kegiatan akreditasi Sekolah Menengah Atas",
        // "Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsinya.",
      ],
      dibawahi: [
        "Seksi Kurikulum dan Penilaian",
        "Seksi Kelembagaan dan Sarana Prasarana",
        "Seksi Kesiswaan dan Pendidikan Karakter.",
      ],
    },
  },
  "bidang-pembinaan-sekolah-menengah-kejuruan-dan-pendidikan-khusus-layanan-khusus":
    {
      title:
        "Bidang Pembinaan Sekolah Menengah Kejuruan dan Pendidikan Khusus-Layanan Khusus",
      description:
        "Mengelola kurikulum, penilaian, kelembagaan, sarana prasarana, kesiswaan, pendidikan karakter, serta pembinaan pendidikan khusus/layanan khusus.",
      fungsi: {
        description:
          "Dalam melaksanakan tugas sebagaimana dimaksud di atas Bidang Pembinaan Sekolah Menengah Atas mepunyai fungsi:",
        points: [
          "Penyusunan program dan kegiatan bidang.",
          "Pembinaan kelembagaan dan sarana prasarana SMK/PKLK.",
          "Pembinaan lomba, seni, olahraga, dan kompetensi siswa.",
          "Monitoring, evaluasi, pelaksanaan ujian, dan akreditasi SMK.",
          // "Pelaksanaan koordinasi atas pembangunan dan pengelolaan penyelenggaraan sosialisasi dan pengembangan kerangka dasar dan struktur kurikulum Sekolah Menengah Atas",
          // "Pelaksanaan pembinaan dan pengembangan mutu kesiswaan dan pendidikan karakter",
          // "Pelaksanaan koordinasi, monitoring, dan evaluasi pelaksanaan, Ujian Nasional, Ujian Sekolah, dan kegiatan akreditasi Sekolah Menengah Atas",
          // "Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsinya.",
        ],
        dibawahi: [
          "Seksi Kurikulum dan Penilaian",
          "Seksi Kelembagaan dan Sarana Prasarana",
          "Seksi Kesiswaan dan Pendidikan Karakter.",
        ],
      },
    },
  "bidang-pembinaan-guru-dan-ketenagaan": {
    title: "Bidang Pembinaan Guru dan Ketenagaan",
    description:
      "Menyusun kebijakan teknis terkait standar pendidik dan tenaga kependidikan, kebutuhan formasi guru, pembinaan disiplin, mutasi, angka kredit jabatan, kesejahteraan, karir, serta kompetensi profesionalisme guru.",
    fungsi: {
      description:
        "Dalam melaksanakan tugas di atas, Bidang Pembinaan Guru dan Ketenagaan menyelenggarakan fungsi sebagai berikut:",
      points: [
        "Pengelolaan data guru dan tenaga teknis kebudayaan.",
        "Penyusunan kebutuhan formasi dan seleksi guru.",
        "Pembinaan karir, kesejahteraan, dan profesionalisme guru.",
        "Pelayanan administrasi kepegawaian dan angka kredit.",
        "Monitoring, evaluasi, dan pelaporan kegiatan bidang.",
        // "Pelayanan administrasi kepegawaian/angka kredit jabatan fungsional guru-guru dan tenaga fungsional lain pendidikan menengah, pendidikan khusus-layana khusus, dan tenaga kebudayaan",
        // "Pelaksanaan urusan ketataushaan guru dan tenaga teknis lainnya",
        // "Pelaksanaan koordinasi, fasilitasi, monitoring, dan evaluasi kegiatan kebudayaan skala provinsi",
        // "Pelaporan dan evaluasi hasil pelaksanaan program dan kegiatan bidang",
        // "Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsinya.",
      ],
      dibawahi: [
        "Seksi Pendidik dan Tenaga Kependidikan Sekolah Menengah Atas",
        "Seksi Pendidik dan Tenaga Kependidikan Sekolah Menegah Kejuruan",
        "Seksi Pendidik dan Tenaga Kependidikan Pendidikan Khusus-Layanan Khusus dan Tenaga Kebudayaan",
      ],
    },
  },
  "bidang-kebudayaan": {
    title: "Bidang Kebudayaan",
    description:
      "Merencanakan, mengkoordinasikan, dan melaksanakan upaya perlindungan, pelestarian, dan pemanfaatan warisan budaya, museum, sejarah, tradisi, kesenian, serta pengembangan karakter bangsa.",
    fungsi: {
      description:
        "Dalam melaksanakan tugas sebagaimana dimaksud di atas, bidang kebudayaan menyelenggarakan fungsi sebagai berikut :",
      points: [
        "Penyusunan program dan kegiatan kebudayaan.",
        "Koordinasi kebudayaan dengan kabupaten/kota dan stakeholder.",
        "Pembinaan museum, cagar budaya, dan kesenian.",
        "Fasilitasi sarana prasarana budaya dan seni.",
        "Pendataan dan pengembangan kompetensi sumber daya seni.",
        // "Pelaksanaan koordinasi, fasilitasi, monitoring, dan evaluasi kegiatan kebudayaan skala provinsi",
        // "Pelaksanaan fasilitasi kebutuhan sarana prasarana budaya, sejarah, dan kesenian skala provinsi",
        // "Pelaksanaan koordinasi atas pengelolaan kegiatan kesenian",
        // "Pelaksanaan pembinaan dan pengembangan kompetensi sumber daya seni skala provinsi",
        // "Pelaksanaan pendataan kebudayaan, sejarah dan kesenian skala provinsi",
        // "Pelaporan dan evaluasi hasil pelaksanaan program dan kegiatan bidang",
        // "Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsinya.",
      ],
      dibawahi: [
        "Seksi Cagar Budaya dan Permuseuman",
        "Seksi Sejarah dan Tradisi",
        "Seksi Kesenian",
      ],
    },
  },
  "unit-pelaksana-teknis-dinas-uptd": {
    title: "Unit Pelaksana Teknis Dinas (UPTD)",
    description:
      "UPTD adalah unsur pelaksana teknis operasional/penunjang tertentu yang berada di bawah dan bertanggung jawab kepada Kepala Dinas.",
    fungsi: {
      description: "",
      points: [],
      dibawahi: [
        "UPTD. Museum dan Taman Budaya",
        "UPTD Balai Teknologi Informasi dan Komunikasi Pendidikan",
        "UPTD Penanganan Siswa Berkebutuhan Khusus",
      ],
    },
  },
  "kantor-cabang-dinas": {
    title: "Kantor Cabang Dinas (KCD)",
    description:
      "KCD merupakan perpanjangan tangan dinas pada wilayah tertentu untuk membantu pelaksanaan tugas pendidikan dan kebudayaan di daerah.",
    fungsi: {
      description: "Membantu pelaksanaan tugas pendidikan dan kebudayaan di daerah.",
      points: [],
      dibawahi: [
        "KCD Bau Bau dan Buton Selatan",
        "KCD Wakatobi",
        "KCD Buton",
        "KCD Buton Utara",
        "KCD Muna Barat Buton Tengah",
        "KCD Muna",
        "KCD Bombana",
        "KCD Kolaka dan Kolaka Timur",
        "KCD Kolaka Utara",
        "KCD Konawe dan Konawe Utara",
        "KCD Konawe Selatan",
        "KCD Konawe Kepulauan",
      ],
    },
  },
};
function DetailTugasFungsi() {
  const { id } = useParams<{ id: string }>();
  const detail = unitKerjaDetails[id as keyof typeof unitKerjaDetails];

  if (!detail) {
    return <p className="text-center mt-10">Data tidak ditemukan</p>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Button variant="outline" onClick={() => window.history.back()}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Halaman Sebelumnya
      </Button>
      <div className="my-10 m-auto w-1/4 flex items-center justify-center bg-slate-300 h-52 rounded-md">
          <img src={AvatarImage} alt="Avatar" className="max-h-full max-w-full object-contain" />
      </div>
      {/* <div 
       className="bg w-full h-60 rounded-md bg-cover bg-center rounded-md"
       style={{ backgroundImage: `url(/avatar.png)` }}
       ></div> */}

      <h1 className="text-xl text-center my-2 font-bold capitalize">
        {detail.title}
      </h1>
      <div className="w-11/12 m-auto">
        <p className="my-10 ">{detail.description}</p>
        <p className="capitalize">fungsi : {detail.fungsi.description}</p>
        {detail.fungsi.description && (
          <ol className="list-decimal list-inside my-3">
            {detail.fungsi.points.map((item: string, index: number) => (
              <li key={index} className="py-1">
                {item}
              </li>
            ))}
          </ol>
        )}
        {detail.fungsi.dibawahi && (
          <div>
            <p>{detail.title} terdiri atas : </p>
            <ul className="list-disc list-inside my-3 ">
              {detail.fungsi.dibawahi.map((item: string, index: number) => (
                <li className="py-1" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
export default DetailTugasFungsi;
