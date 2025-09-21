import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-government-blue text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo dan Deskripsi */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                <img
                loading="lazy"
                  src="./logo.png"
                  alt="logo dinas pendidikan"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">Dinas Pendidikan</h2>
                <p className="text-blue-200">Provinsi Sulawesi Tenggara</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Melayani dan mengembangkan sistem pendidikan yang berkualitas
              untuk mencerdaskan kehidupan bangsa di Provinsi Sulawesi Tenggara.
            </p>
            <div className="flex items-center space-x-4 text-blue-200">
              <Clock className="w-5 h-5" />
              <div>
                <p className="font-medium">Jam Pelayanan</p>
                <p className="text-sm">Senin - Jumat: 08:00 - 16:00 WITA</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/profil/sejarah"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Profil
                </Link>
              </li>
              <li>
                <Link
                  to="/profil/laporan-kegiatan"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Laporan Kegiatan
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/pelayanan/visi-misi"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Pelayanan
                </Link>
              </li> */}
              <li>
                <Link
                  to="/ppid"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  PPID
                </Link>
              </li>
              <li>
                <Link
                  to="/inovasi"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Inovasi
                </Link>
              </li>
              <li>
                <Link
                  to="/galeri"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div className="text-blue-200">
                  <p className="text-sm">
                    Jalan Ahmad Yani No. 2, Kendari, Sulawesi Tenggara 93117
                    <br />
                    Sulawesi Tenggara 93117
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <span className="text-blue-200 text-sm">(0401) 321234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-300" />
                <span className="text-blue-200 text-sm">
                  info@disdik.sultraprov.go.id
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400/30 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 Dinas Pendidikan Provinsi Sulawesi Tenggara. Hak Cipta
            Dilindungi Undang-Undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
