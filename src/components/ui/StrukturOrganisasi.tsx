import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import salim from "@/assets/salim.jpg"

interface PersonData {
  id: string;
  name: string;
  title: string;
  nip?: string;
  image?: string;
}

interface DivisionData extends PersonData {
  color: string;
  sections: PersonData[];
}

const OrganizationChart = () => {
  // Kepala Dinas
  const kepalaDinas: PersonData = {
    id: "kepala-dinas",
    name: "Prof. Dr. H. Aris Badara, S.Pd., M.Hum",
    title: "KEPALA DINAS PENDIDIKAN DAN KEBUDAYAAN",
    nip: "NIP. ",
    image: salim
  };

  // Sekretaris Dinas
  const sekretaris: PersonData = {
    id: "sekretaris-dinas",
    name: "Hj. Suhaeny, SE., M.Pd.",
    title: "SEKRETARIS DINAS",
    nip: "NIP. ",
  };

  // Sub Bagian di bawah Sekretaris
  const subBagianData: PersonData[] = [
    {
      id: "kasubag-keuangan-aset",
      name: "Hj. Apriani, SE.",
      title: "Kasubag Keuangan dan Aset",
      nip: "NIP. ",
    },
    {
      id: "kasubag-umum-humas",
      name: "Kamarudin Raiya, S.Pd., M.A.P",
      title: "Kasubag Umum dan Humas",
      nip: "NIP. ",
    },
    {
      id: "kasubag-kepegawaian",
      name: "Surakhman, SE., MM (Plt)",
      title: "Kasubag Kepegawaian",
      nip: "NIP.",
    },
  ];

  // Bidang dan UPTD
  const divisionsData: DivisionData[] = [
    {
      id: "kabid-perencanaan-penganggaran",
      name: "Amriana, SE., M.Si.",
      title: "KABID PERENCANAAN & PENGANGGARAN",
      nip: "NIP. ",
      color: "bg-modern-blue",
      sections: [
        {
          id: "seksi-peny-program-penganggaran",
          name: "Rusmiati Baharudin, S.Pd., M.Pd.",
          title: "Seksi Peny. Program dan Penganggaran",
          nip: "NIP. ",
        },
        {
          id: "seksi-monev-lapangan",
          name: "Arfa Sama, SE.",
          title: "Seksi Monev Lapangan",
          nip: "NIP. ",
        },
        {
          id: "seksi-penyelenggaraan-tp",
          name: "Masri Wati, SE., M.Si.",
          title: "Seksi Penyelenggaraan TP",
          nip: "NIP.",
        },
      ],
    },
    {
      id: "kabid-pembinaan-smk-pklk",
      name: "Johanis Hengkengkona, S.Sos., M.A.P",
      title: "KABID PEMBINAAN SMK DAN PKLK",
      nip: "NIP. ",
      color: "bg-modern-green",
      sections: [
        {
          id: "seksi-kurikulum-penilaian-smk",
          name: "Kosong",
          title: "Seksi Kurikulum dan Penilaian",
          nip: "NIP. ",
        },
        {
          id: "seksi-pd-karakter-smk",
          name: "Ishak Paway, S.Pd., M.A. (Plt)",
          title: "Seksi PD dan Pembinaan Karakter",
          nip: "NIP.",
        },
        {
          id: "seksi-kelembagaan-sarpras-smk",
          name: "La Ode Arfid Alusi, S.Sos",
          title: "Seksi Kelembagaan dan Sarpras",
          nip: "NIP.",
        },
      ],
    },
    {
      id: "kabid-pembinaan-sma",
      name: "Dra. Hj. Ila Nasra Nusuha, M.Pd.",
      title: "KABID PEMBINAAN SMA",
      nip: "NIP. ",
      color: "bg-modern-purple",
      sections: [
        {
          id: "seksi-kurikulum-penilaian-sma",
          name: "Bayanuddin A. Gani, SE. (Plt)",
          title: "Seksi Kurikulum dan Penilaian",
          nip: "NIP.",
        },
        {
          id: "seksi-pd-karakter-sma",
          name: "Muh. Ilyas, SE., M.Pd.",
          title: "Seksi PD dan Pembinaan Karakter",
          nip: "NIP.",
        },
        {
          id: "seksi-kelembagaan-sarpras-sma",
          name: "Firman Saleh, S.Pd. (Plt)",
          title: "Seksi Kelembagaan dan Sarpras",
          nip: "NIP.",
        },
      ],
    },
    {
      id: "kabid-guru-ketenagaan",
      name: "Husrin Haji Hamid, S.Pd.",
      title: "KABID GURU DAN KETENAGAAN",
      nip: "NIP. ",
      color: "bg-modern-orange",
      sections: [
        {
          id: "seksi-ptk-sma",
          name: "Zaini Dahlan, S.Pd., M.Pd. (Plt)",
          title: "Seksi PTK SMA",
          nip: "NIP.",
        },
        {
          id: "seksi-smk",
          name: "Sry Dalbi, SE.",
          title: "Seksi SMK",
          nip: "NIP.",
        },
        {
          id: "seksi-pklk-tenaga-kebudayaan",
          name: "Firman Saleh, S.Pd.",
          title: "Seksi PK-LK dan Tenaga Kebudayaan",
          nip: "NIP.",
        },
      ],
    },
    {
      id: "kabid-kebudayaan",
      name: "Murniati Asmar Lio, SE.",
      title: "KABID KEBUDAYAAN",
      nip: "NIP. ",
      color: "bg-modern-red",
      sections: [
        {
          id: "seksi-cagar-budaya-permusiuman",
          name: "Rusmiati Baharudin, S.Pd., M.Pd. (Plt)",
          title: "Seksi Cagar Budaya dan Permusiuman",
          nip: "NIP.",
        },
        {
          id: "seksi-sejarah-tradisi",
          name: "Mahidi, S.Pd.",
          title: "Seksi Sejarah dan Tradisi",
          nip: "NIP.",
        },
        {
          id: "seksi-kesenian",
          name: "Asniar Lio, S.Pd.",
          title: "Seksi Kesenian",
          nip: "NIP.",
        },
      ],
    },
    // {
    //   id: "uptd-btikp",
    //   name: "H. Jasfol Sambo, SE.",
    //   title: "UPTD BTIKP",
    //   nip: "NIP. ",
    //   color: "bg-modern-teal",
    //   sections: [
    //     {
    //       id: "seksi-p2tip",
    //       name: "Hasruddin Jumain, S.Ip.",
    //       title: "Seksi P2TIP",
    //       nip: "NIP.",
    //     },
    //     {
    //       id: "seksi-p2mp",
    //       name: "Supriyatno, S.Sos.",
    //       title: "Seksi P2MP",
    //       nip: "NIP.",
    //     },
    //     {
    //       id: "kasubag-tu-btikp",
    //       name: "Wa Ita, S.Pd.",
    //       title: "Kasubag TU",
    //       nip: "NIP.",
    //     },
    //   ],
    // },
    // {
    //   id: "uptd-museum-taman-budaya",
    //   name: "Laudin, S.Sos., M.Hum.",
    //   title: "UPTD MUSEUM DAN TAMAN BUDAYA",
    //   nip: "NIP. ",
    //   color: "bg-modern-indigo",
    //   sections: [
    //     {
    //       id: "kasubag-tu-museum",
    //       name: "Dr. W. Syuhida, S.Pd., M.Pd.",
    //       title: "Kepala Sub Bagian Tata Usaha",
    //       nip: "NIP.",
    //     },
    //     {
    //       id: "kasi-permuseuman",
    //       name: "Daud Topa, S. Sos.",
    //       title: "Kepala Seksi Permuseuman",
    //       nip: "NIP.",
    //     },
    //     {
    //       id: "kasi-taman-budaya",
    //       name: "Netiawan, SH., M.Pd.",
    //       title: "Kepala Seksi Taman Budaya",
    //       nip: "NIP.",
    //     },
    //   ],
    // },
  ];

  const additionalUnits = ["SATUAN PENDIDIKAN", "KELOMPOK PENDIDIKAN", "UPTD", "CABANG DINAS"];

  // Person Card Component
  const PersonCard = ({
    person,
    className = "",
    size = "md",
  }: {
    person: PersonData;
    className?: string;
    size?: "sm" | "md" | "lg";
  }) => {
    const sizeClasses = { sm: "p-3", md: "p-4", lg: "p-6" };
    const avatarSizes = { sm: "w-12 h-12", md: "w-16 h-16", lg: "w-20 h-20" };
    const textSizes = {
      sm: { name: "text-sm", title: "text-xs", nip: "text-xs" },
      md: { name: "text-base", title: "text-sm", nip: "text-xs" },
      lg: { name: "text-lg", title: "text-base", nip: "text-sm" },
    };

    return (
      <Card
        className={`bg-white border-2 border-dashed border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}
      >
        <CardContent className={sizeClasses[size]}>
          <div className="flex flex-col items-center text-center space-y-2">
            <div
              className={`${avatarSizes[size]} rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden border-4 border-white shadow-md`}
            >
              {person.image ? (
                <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
              ) : (
                <User className="w-8 h-8 text-gray-500" />
              )}
            </div>
            <div>
              <h3 className={`font-bold text-gray-800 ${textSizes[size].name}`}>{person.name}</h3>
              <p className={`font-medium text-gray-600 mt-1 ${textSizes[size].title}`}>{person.title}</p>
              {person.nip && <p className={`text-gray-500 mt-1 ${textSizes[size].nip}`}>{person.nip}</p>}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  // Connecting Line Component
  const ConnectingLine = ({
    orientation = "vertical",
    length = "short",
    className = "",
  }: {
    orientation?: "vertical" | "horizontal";
    length?: "short" | "medium" | "long";
    className?: string;
  }) => {
    const lengthClasses = {
      short: orientation === "vertical" ? "h-8" : "w-8",
      medium: orientation === "vertical" ? "h-16" : "w-16",
      long: orientation === "vertical" ? "h-24" : "w-24",
    };
    const orientationClasses = orientation === "vertical" ? "w-0.5" : "h-0.5";

    return (
      <div className={`border-dashed border-2 border-gray-400 ${orientationClasses} ${lengthClasses[length]} ${className}`} />
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Kepala Dinas */}
      <div className="flex flex-col items-center space-y-4 mb-8">
        <PersonCard
          person={kepalaDinas}
          size="lg"
          className="bg-gradient-to-br from-blue-500 to-blue-700 text-white border-blue-600"
        />
        <ConnectingLine orientation="vertical" length="medium" />
      </div>

      {/* Sekretaris */}
      <div className="flex flex-col items-center space-y-6 mb-12">
        <PersonCard
          person={sekretaris}
          size="lg"
          className="bg-gradient-to-br from-green-500 to-green-700 text-white border-green-600"
        />

        <div className="flex items-center justify-center w-full">
          <div className="flex-1 max-w-xs border-dashed border-t-2 border-gray-400"></div>
          <div className="w-4 h-4 bg-gray-400 rounded-full mx-2"></div>
          <div className="flex-1 max-w-xs border-dashed border-t-2 border-gray-400"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {subBagianData.map((person) => (
            <div key={person.id} className="flex flex-col items-center">
              <ConnectingLine orientation="vertical" length="short" />
              <PersonCard person={person} className="bg-gradient-to-br from-teal-400 to-teal-600 text-white border-teal-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Bidang dan UPTD */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {divisionsData.map((division) => (
          <div key={division.id} className="space-y-6">
            <div className="flex flex-col items-center">
              <PersonCard
                person={division}
                size="lg"
                className={`${division.color} text-white border-opacity-50`}
              />
              <ConnectingLine orientation="vertical" length="medium" />
            </div>

            <div className="grid grid-cols-1 gap-4">
              {division.sections.map((section) => (
                <PersonCard key={section.id} person={section} size="sm" className="bg-white border-gray-300" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Unit Tambahan */}
      <div className="mt-16">
        <div className="flex items-center justify-center mb-8">
          <div className="flex-1 border-dashed border-t-2 border-gray-400 max-w-md"></div>
          <div className="w-6 h-6 bg-gray-400 rounded-full mx-4"></div>
          <div className="flex-1 border-dashed border-t-2 border-gray-400 max-w-md"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {additionalUnits.map((unit, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-sm">{unit}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizationChart;
