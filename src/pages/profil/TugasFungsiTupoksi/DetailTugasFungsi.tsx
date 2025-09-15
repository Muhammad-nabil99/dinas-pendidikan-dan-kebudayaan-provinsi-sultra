import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useParams } from "react-router-dom";

const unitKerjaDetails = {
  "kepala-dinas": {
    title: "Kepala Dinas Pendidikan",
    description:
      "Bertanggung jawab penuh atas pelaksanaan seluruh urusan pendidikan dan kebudayaan di provinsi.",
    fungsi: {
      description: "",
      points: [],
      dibawahi: [],
    },
  },
  sekretaris: {
    title: "Sekretaris",
    description:
      "Mempunyai tugas merencanakan, menyusun, melaksanakan, membina tugas-tugas kebijakan taktis di bidang pelayanan administratif, perlengkapan, keuangan, kepegawaian, inventarisasi aset, ketatausahaan, protokol, humas, rumah tangga, organisasi dan ketatalaksana, analisa jabatan, dokumentasi peraturan perundang-undangan dan mengkoordinasikan penyelenggaraan tugas-tugas bidang secara terpadu",
    fungsi: {
      description:
        "Dalam melaksanakan tugas pokok sebagaimana dimaksud di atas sekretariat mempunyai fungsi sebagai berikut",
      points: [
        "Pelaksanaan koordinasi perencanaan/penyusunan rencana program dan kegiatan pada sekretariat",
        "Pelaksanaan urusan perencanaan/penyusunan program sekretariat",
        "Pelaksanaan urusan perlengkapan kantor",
        "Pelaksanaan administrasi keuangan",
        "Pelaksanaan urusan keprotokoleran, humas, dan rumah tangga",
        "Pelaksanaan urusan barang milik daerah",
        "Pelaksanaan administrasi kepegawaian",
        "Pelaksanaan urusan hukum dan perundang-undangan",
        "Pelaksanaan urusan ketatausahaan",
        "Pelaksanaan urusan organisasi dan tatalaksana, dokumentasi perundang-undangan, serta analisis jabatan",
        "Pelaporan dan evaluasi pelaksanaan program dan kegiatan sekretariat",
        "Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsi",
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
      "Mengkoordinasikan rencana, program, kegiatan, anggaran, menyusun, mengevaluasi dan melaporkan pelasanaan program kerja, menyusun dan mengevaluasi serta melaporkan pelaksanaan program kerja dan anggaran dinas, mengsinkronkan kebijakan operasional serta program pendidikan dan kebudayaan antar kabupaten/kota dalam Daerah, menyusun perencanaan strategis dinas, menyusun rencana kerja tahunan dinas, menyusun rencana kerja dan anggaran dinas, penyusunan bahan pelaksanaan urusan tugas pembantuan di bidang pendidikan dan kebudayaan, memberikan layanan teknis dibidang perencanaan, melakukan kegiatan pendataan pendidikan dan kebudayaan.",
    fungsi: {
      description:
        "Dalam melaksanakan tugas pokok sebagaimana dimaksud di atas bidang perencanaan dan penganggaran mempunyai fungsi sebagai berikut :",
      points: [
        "Menyusun rencana program dan kegaiatan bidang",
        "Pengkoordinasian penyusunan rencana program, kegiatan, dan anggaran dinas sebagai pedoman pelaksanaan tugas",
        "Penyusunan rencana strategis pendidikan dan kebudayaan sesuai dengan perencanaan strategis pendidikan dan kebudayaan nasional dan perencanaan pembangunan jangka menengah daerah provinsi",
        "Pengkoordinasian, dan penyusunan laporan pelaksanaan program/kegiatan dinas",
        "Pemberian pelayanan teknis di bidang perencanaan dan penganggaran",
        "Pelaporan dan evaluasi pelasanaan program dan kegiatan bidang",
        "Pengkordinasian pelaksanaan pendataan pendidikan dan kebudayaan",
        "Pengkoordinasian dan singkronisasi kebijakan operasional dan program pendidikan dan kebudayaan antar kabupaten/kota dalam provinsi",
        "Pelaksanaan dan/atau fasilitasi penyelenggaraan tugas pembantuan di bidang pendidikan dasar, PAUDNI, dan kebudayaan",
        "Pelaksanaan monitoring, evaluasi dari program dan kegiatan dinas",
        "Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsinya.",
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
      "Merencanakan, mengkoordinasikan, menyelenggarakan fasilitas kebutuhan kurikulum, penilaian, kelembaggaan, sarana prasarana, kesiswaan, dan pendidikan karakter.",
    fungsi: {
      description:
        "Dalam melaksanakan tugas pokok sebagaimana dimaksud di atas bidang perencanaan dan penganggaran mempunyai fungsi sebagai berikut :",
      points: [
        "Melaksanakan penyusunan rencana program dan kegiatan bidang",
        "Penyelenggaraan kegiatan pengembangan kelembangaan dan sarana prasarana",
        "Pelaporan dan evaluasi hasil pelaksanaan program dan kegiatan bidang",
        "Pelaksanaan koordinasi dan pengendalian seksi - seksi",
        "Pelaksanaan koordinasi atas pembangunan dan pengelolaan penyelenggaraan sosialisasi dan pengembangan kerangka dasar dan struktur kurikulum Sekolah Menengah Atas",
        "Pelaksanaan pembinaan dan pengembangan mutu kesiswaan dan pendidikan karakter",
        "Pelaksanaan koordinasi, monitoring, dan evaluasi pelaksanaan, Ujian Nasional, Ujian Sekolah, dan kegiatan akreditasi Sekolah Menengah Atas",
        "Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsinya.",
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
        "Merencanakan, mengkoordinasikan, menyelenggarakan fasilitas kebutuhan kurikulum, penilaian, kelembaggaan, sarana prasarana, kesiswaan, dan pendidikan karakter.",
      fungsi: {
        description:
          "Dalam melaksanakan tugas sebagaimana dimaksud di atas Bidang Pembinaan Sekolah Menengah Atas mepunyai fungsi:",
        points: [
          "Melaksanakan penyusunan rencana program dan kegiatan bidang",
          "Penyelenggaraan kegiatan pengembangan kelembangaan dan sarana prasarana",
          "Pelaporan dan evaluasi hasil pelaksanaan program dan kegiatan bidang",
          "Pelaksanaan koordinasi dan pengendalian seksi - seksi",
          "Pelaksanaan koordinasi atas pembangunan dan pengelolaan penyelenggaraan sosialisasi dan pengembangan kerangka dasar dan struktur kurikulum Sekolah Menengah Atas",
          "Pelaksanaan pembinaan dan pengembangan mutu kesiswaan dan pendidikan karakter",
          "Pelaksanaan koordinasi, monitoring, dan evaluasi pelaksanaan, Ujian Nasional, Ujian Sekolah, dan kegiatan akreditasi Sekolah Menengah Atas",
          "Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsinya.",
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
      "Menyusun kebijakan teknis dan operasional di bidang pencapaian standar pendidik dan tenaga kependidikan/kebudayaan, penyusunan formasi kebutuhan tenaga guru dan kebudayaan, pembinaan disiplin aparatur sipil negara dan tenaga teknis kebudayaan, pemindahan dan pemerataan guru, koordinasi peningkatan kesejahteraan guru, pengelolaan angka kredit jabatan fungsional guru dan tenaga kependidikan lainnya, koordinasi pembinaan karir tenaga guru dan kebudayaan, koordinasi pengembangan kemampuan kompetensi profesionalsime serta pelayanan administrasi kepegawaian kepada guruguru dan tenaga teknis pendidikan dan kebudayaan.",
    fungsi: {
      description:
        "Dalam melaksanakan tugas di atas, Bidang Pembinaan Guru dan Ketenagaan menyelenggarakan fungsi sebagai berikut:",
      points: [
        "Pelaksanaan pengumpulan dan pengelolaan data guru dan tenaga teknis kebudayaan, penyajian dan pelayanan informasi data guru-guru dan tenaga fungsional lain pada pendidikan menengah, pendidikan khusus-layanan khusus, dan tenaga teknis kebudayaan",
        "Penyiapan bahan dan penyusunan formasi, kebutuhan, dan seleksi guru-guru dan tenaga fungsional lain pada pendidikan menengah, pendidikan khusus-layanan khusus, dan tenaga teknis kebudayaan",
        "Penyiapan bahan untuk proses mutasi kepangkatan, mutasi status alih fungsi, alih jenis mutasi penetapan lintas kabupaten/kota dalam satu provinsi",
        "Penyiapan bahan dalam rangka pembinaan, pengembangan karir dan kesejahteraan guru-guru dan tenaga fungsional lain pendidikan menengah, pendidikan khusus dan layanan khusus, dan tenaga kebudayaan",
        "Penyiapan bahan dalam rangka pembinaan, pengembangan kemampuan profesionalisme guru-guru dan tenaga fungsional lain pada pendidikan menengah, pendidikan khusus dan layanan khusus, dan tenaga teknis kebudayaan",
        "Pelayanan administrasi kepegawaian/angka kredit jabatan fungsional guru-guru dan tenaga fungsional lain pendidikan menengah, pendidikan khusus-layana khusus, dan tenaga kebudayaan",
        "Pelaksanaan urusan ketataushaan guru dan tenaga teknis lainnya",
        "Pelaksanaan koordinasi, fasilitasi, monitoring, dan evaluasi kegiatan kebudayaan skala provinsi",
        "Pelaporan dan evaluasi hasil pelaksanaan program dan kegiatan bidang",
        "Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsinya.",
      ],
      dibawahi: [
        "Seksi Pendidik dan Tenaga Kepndidikan Sekolah Menengah Atas",
        "Seksi Pendidik dan Tenaga Kependidikan Sekolah Menegah Kejuruan",
        "Seksi Pendidik dan Tenaga Kependidikan Pendidikan Khusus-Layanan Khusus dan Tenaga Kebudayaan",
      ],
    },
  },
  "bidang-kebudayaan": {
    title: "Bidang Kebudayaan",
    description:
      "Menyusun kebijakan taktis dalam merencanakan, mengkoordinasikan, menyelenggarakan manajemen taktial di bidang upaya perlindungan, pelestarian, dan pemanfaatan warisan budaya benda dan warisan budaya tak benda, program/kegiatan cagar budaya dan permuseuman, sejarah dan tradisi, serta kegiatan kesenian, pembentukan tim ahli cagar budaya skala provinsi, pendataan kebudayaan, pengembangan pendidikan karakter bangsa, pengembangan kompetensi dan sumberdaya seni, penyediaan kebutuhan sarana prasarana budaya, sejarah, dan kesenian.",
    fungsi: {
      description:
        "Dalam melaksanakan tugas sebagaimana dimaksud di atas, bidang kebudayaan menyelenggarakan fungsi sebagai berikut :",
      points: [
        "Pelaksanaan penyusunan rencana program dan kegiatan kebudayaan",
        "Pelaksanaan koordinasi kebudayaan dengan stakeholder kebudayaan pada dinas kabupaten/kota dalam daerah, pada perguruan tinggi dan masyarakat",
        "Pelaksanaan koordinasi atas kegiatan tugas pembantuan bidang kebudayaan skala provinsi",
        "Pelaksanaan koordinasi atas pembinaan, pembangunan, dan pengelolaan/penyelenggaraan kegiatan museum dan cagar budaya skala provinsi",
        "Pelaksanaan koordinasi atas pembinaan, pembangunan, dan pengelolaan/penyelenggaraan kegiatan museum dan cagar budaya skala provinsi",
        "Pelaksanaan koordinasi, fasilitasi, monitoring, dan evaluasi kegiatan kebudayaan skala provinsi",
        "Pelaksanaan fasilitasi kebutuhan sarana prasarana budaya, sejarah, dan kesenian skala provinsi",
        "Pelaksanaan koordinasi atas pengelolaan kegiatan kesenian",
        "Pelaksanaan pembinaan dan pengembangan kompetensi sumber daya seni skala provinsi",
        "Pelaksanaan pendataan kebudayaan, sejarah dan kesenian skala provinsi",
        "Pelaporan dan evaluasi hasil pelaksanaan program dan kegiatan bidang",
        "Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsinya.",
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
      "Unit Pelaksana Teknis Dinas adalah Unsur Pelaksana teknis opersional dan/atau teknis penunjang tertentu. Kepala unit pelaksana teknis dinas berada di bawah dan bertanggung jawab kepada Kepala Dinas,",
    fungsi: {
      description: "",
      points: [
        "UPTD. Museum dan Taman Budaya",
        "UPTD Balai Teknologi Informasi dan Komunikasi Pendidikan",
        "UPTD Penangan Siswa Berkebutuhan Khusus",
      ],
      dibawahi: [],
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
      <div className="my-10 m-auto w-1/2  flex items-center justify-center  bg-slate-300 h-52 rounded-md">
        <p className="text-center font-semibold capitalize">foto/gambar</p>
      </div>

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
