import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

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
  // Head of Department
  const kepalaDinas: PersonData = {
    id: "kepala-dinas",
    name: "Prof. Dr. H. Aris Badara, S.Pd., M.Hum",
    title: "Kepala Dinas",
    nip: "NIP. 19750503 200003 1 003",
  };

  // Secretary
  const sekretaris: PersonData = {
    id: "sekretaris", 
    name: "H. Anwaril Hamka, SE, M.SI",
    title: "Sekretaris",
    nip: "NIP. 196708 199203 1 004",
  };

  // Sub-departments under Secretary
  const subBagianData: PersonData[] = [
    {
      id: "sub-bag-umum",
      name: "Suherman, S.Sos, M.PD",
      title: "Sub Bagian Umum dan Kepegawaian",
      nip: "NIP. 197006 200604 1 010"
    },
    {
      id: "sub-bag-keuangan", 
      name: "Rahmat, SE, M.PD",
      title: "Sub Bagian Keuangan",
      nip: "NIP. 198305 200912 1 002"
    },
    {
      id: "sub-bag-program",
      name: "Suharno, S.Sos, M.Si",
      title: "Sub Bagian Program dan Pelaporan", 
      nip: "NIP. 197112 199203 1 004"
    }
  ];

  // Main divisions with sections
  const divisionsData: DivisionData[] = [
    {
      id: "bidang-pendidikan-dasar",
      name: "Drs. La Ode Sabaruddin, M.Pd",
      title: "Bidang Pendidikan Dasar",
      nip: "NIP. 196408 198903 1 017",
      color: "bg-modern-blue",
      sections: [
        {
          id: "seksi-kurikulum-sd",
          name: "Wa Ode Rusdiana S.Pd, M.Pd",
          title: "Seksi Kurikulum dan Penilaian SD",
          nip: "NIP. 197009 200604 1 009"
        },
        {
          id: "seksi-peserta-didik-sd",
          name: "Hayatun Nufus, S.Pd, M.Pd",
          title: "Seksi Peserta Didik dan Pembangunan Karakter SD", 
          nip: "NIP. 198201 200801 2 010"
        },
        {
          id: "seksi-kelembagaan-sd",
          name: "Drs. Haeruddin, M.Pd",
          title: "Seksi Kelembagaan dan Sarana Prasarana SD",
          nip: "NIP. 196512 199203 1 008"
        }
      ]
    },
    {
      id: "bidang-pendidikan-menengah",
      name: "La Sanusi, S.Pd, M.Pd",
      title: "Bidang Pendidikan Menengah",
      nip: "NIP. 197203 200312 1 004",
      color: "bg-modern-green",
      sections: [
        {
          id: "seksi-kurikulum-smp",
          name: "Drs. La Djafar, M.Pd",
          title: "Seksi Kurikulum dan Penilaian SMP",
          nip: "NIP. 196808 199412 1 003"
        },
        {
          id: "seksi-peserta-didik-smp",
          name: "Wa Ode Sitti Hajar, S.Pd, M.Pd",
          title: "Seksi Peserta Didik dan Pembangunan Karakter SMP",
          nip: "NIP. 198105 200502 2 003"
        },
        {
          id: "seksi-kelembagaan-smp", 
          name: "Samsu, S.Pd, M.Pd",
          title: "Seksi Kelembagaan dan Sarana Prasarana SMP",
          nip: "NIP. 197812 200801 1 008"
        }
      ]
    },
    {
      id: "bidang-guru-tenaga",
      name: "Drs. Syamsul Bachri, M.Pd",
      title: "Bidang Guru dan Tenaga Kependidikan", 
      nip: "NIP. 196711 199412 1 002",
      color: "bg-modern-purple",
      sections: [
        {
          id: "seksi-pengembangan-karir",
          name: "Dra. Wa Ode Sumiati, M.Pd",
          title: "Seksi Pengembangan Karir Guru",
          nip: "NIP. 196808 199412 2 002"
        },
        {
          id: "seksi-pelatihan-guru",
          name: "Drs. Abd. Gani Busthan, M.Pd", 
          title: "Seksi Peningkatan dan Pelatihan Guru",
          nip: "NIP. 196312 199003 1 004"
        }
      ]
    },
    {
      id: "bidang-kebudayaan",
      name: "Drs. La Ode Sahabuddin, M.Pd",
      title: "Bidang Kebudayaan",
      nip: "NIP. 196408 198903 1 017", 
      color: "bg-modern-orange",
      sections: [
        {
          id: "seksi-kesenian",
          name: "Drs. La Saniru Laga",
          title: "Seksi Kesenian dan Perfilman",
          nip: "NIP. 196709 199203 1 004"
        },
        {
          id: "seksi-sejarah",
          name: "Drs. Muh. Saleh A.S, M.Si",
          title: "Seksi Sejarah dan Kepurbakalaan",
          nip: "NIP. 196304 199203 1 004"
        }
      ]
    }
  ];

  const additionalUnits = [
    "SATUAN PENDIDIKAN",
    "KELOMPOK PENDIDIKAN", 
    "UPTD",
    "CABANG DINAS"
  ];

  // Person Card Component
  const PersonCard = ({ person, className = "", size = "md" }: { 
    person: PersonData; 
    className?: string; 
    size?: "sm" | "md" | "lg" 
  }) => {
    const sizeClasses = {
      sm: "p-3",
      md: "p-4", 
      lg: "p-6"
    };

    const avatarSizes = {
      sm: "w-12 h-12",
      md: "w-16 h-16",
      lg: "w-20 h-20"
    };

    const textSizes = {
      sm: { name: "text-sm", title: "text-xs", nip: "text-xs" },
      md: { name: "text-base", title: "text-sm", nip: "text-xs" },
      lg: { name: "text-lg", title: "text-base", nip: "text-sm" }
    };

    return (
      <Card className={`bg-white border-2 border-dashed border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
        <CardContent className={sizeClasses[size]}>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className={`${avatarSizes[size]} rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden border-4 border-white shadow-md`}>
              {person.image ? (
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-8 h-8 text-gray-500" />
              )}
            </div>
            <div>
              <h3 className={`font-bold text-gray-800 ${textSizes[size].name}`}>
                {person.name}
              </h3>
              <p className={`font-medium text-gray-600 mt-1 ${textSizes[size].title}`}>
                {person.title}
              </p>
              {person.nip && (
                <p className={`text-gray-500 mt-1 ${textSizes[size].nip}`}>
                  {person.nip}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  // Connecting Line Component
  const ConnectingLine = ({ orientation = "vertical", length = "short", className = "" }: {
    orientation?: "vertical" | "horizontal";
    length?: "short" | "medium" | "long";
    className?: string;
  }) => {
    const lengthClasses = {
      short: orientation === "vertical" ? "h-8" : "w-8",
      medium: orientation === "vertical" ? "h-16" : "w-16", 
      long: orientation === "vertical" ? "h-24" : "w-24"
    };

    const orientationClasses = orientation === "vertical" ? "w-0.5" : "h-0.5";

    return (
      <div className={`border-dashed border-2 border-gray-400 ${orientationClasses} ${lengthClasses[length]} ${className}`} />
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Head of Department */}
      <div className="flex flex-col items-center space-y-4 mb-8">
        <PersonCard person={kepalaDinas} size="lg" className="bg-gradient-to-br from-blue-500 to-blue-700 text-white border-blue-600" />
        <ConnectingLine orientation="vertical" length="medium" />
      </div>

      {/* Secretary */}
      <div className="flex flex-col items-center space-y-6 mb-12">
        <PersonCard person={sekretaris} size="lg" className="bg-gradient-to-br from-green-500 to-green-700 text-white border-green-600" />
        
        {/* Horizontal line to sub-departments */}
        <div className="flex items-center justify-center w-full">
          <div className="flex-1 max-w-xs border-dashed border-t-2 border-gray-400"></div>
          <div className="w-4 h-4 bg-gray-400 rounded-full mx-2"></div>
          <div className="flex-1 max-w-xs border-dashed border-t-2 border-gray-400"></div>
        </div>

        {/* Sub-departments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {subBagianData.map((person, index) => (
            <div key={person.id} className="flex flex-col items-center">
              <ConnectingLine orientation="vertical" length="short" />
              <PersonCard person={person} className="bg-gradient-to-br from-teal-400 to-teal-600 text-white border-teal-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Divisions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {divisionsData.map((division) => (
          <div key={division.id} className="space-y-6">
            {/* Division Head */}
            <div className="flex flex-col items-center">
              <PersonCard 
                person={division} 
                size="lg" 
                className={`${division.color} text-white border-opacity-50`} 
              />
              <ConnectingLine orientation="vertical" length="medium" />
            </div>

            {/* Division Sections */}
            <div className="grid grid-cols-1 gap-4">
              {division.sections.map((section) => (
                <PersonCard 
                  key={section.id} 
                  person={section} 
                  size="sm"
                  className="bg-white border-gray-300"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Units */}
      <div className="mt-16">
        <div className="flex items-center justify-center mb-8">
          <div className="flex-1 border-dashed border-t-2 border-gray-400 max-w-md"></div>
          <div className="w-6 h-6 bg-gray-400 rounded-full mx-4"></div>
          <div className="flex-1 border-dashed border-t-2 border-gray-400 max-w-md"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {additionalUnits.map((unit, index) => (
            <Card key={index} className="bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4">
                <div className="text-center">
                  <h3 className="font-semibold text-sm">{unit}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizationChart;