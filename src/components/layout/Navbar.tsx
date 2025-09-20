import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    // Jalankan logika scroll hanya jika berada di halaman beranda (/)
    if (location.pathname === "/") {
      const handleScroll = () => {
        const heroSection = document.getElementById("hero"); // Pastikan Hero Section punya id="hero"
        if (heroSection) {
          const heroHeight = heroSection.offsetHeight;
          setScrolled(window.scrollY > heroHeight - 80);
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // jalankan sekali saat load
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Jika bukan halaman beranda, navbar selalu solid
      setScrolled(true);
    }
  }, [location.pathname]);

  const navItems = [
    { href: "/", label: "Beranda" },
    {
      label: "Profil",
      subItems: [
        { href: "/profil/sejarah", label: "Sejarah" },
        { href: "/profil/visi-misi", label: "Visi Misi" },
        { href: "/profil/tugas-fungsi", label: "Tugas Pokok & Fungsi" },
        { href: "/profil/struktur-organisasi", label: "Struktur Organisasi" },
        { href: "/profil/produk-hukum", label: "Produk Hukum" },
        { href: "/profil/laporan-kegiatan", label: "Laporan Kegiatan" },
      ],
    },
    { href: "/ppid", label: "PPID" },
    { href: "/inovasi", label: "Inovasi" },
    { href: "/galeri", label: "Galeri" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-transparent backdrop-blur-sm border-b border-white/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img loading="lazy" src="./logo.png" alt="logo dinas pendidikan" />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`text-lg font-bold ${
                  scrolled ? "text-government-blue" : "text-white"
                }`}
              >
                Dinas Pendidikan
              </h1>
              <p
                className={`text-sm ${
                  scrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                Sulawesi Tenggara
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`flex items-center space-x-1 ${
                          scrolled
                            ? "text-government-blue hover:text-gold hover:bg-gray-100"
                            : "text-white hover:text-gold hover:bg-white/10"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-56 bg-white/95 backdrop-blur-md"
                    >
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem key={subItem.href} asChild>
                          <Link
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-government-blue hover:bg-muted cursor-pointer"
                          >
                            {subItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? scrolled
                          ? "text-gold bg-gray-100"
                          : "text-gold bg-white/10"
                        : scrolled
                        ? "text-government-blue hover:text-gold hover:bg-gray-100"
                        : "text-white hover:text-gold hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={scrolled ? "text-government-blue" : "text-white"}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-government-blue/95 backdrop-blur-md border-t border-blue-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <div key={item.label}>
                  {item.subItems ? (
                    <div>
                      {/* Trigger utama */}
                      <button
                        className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-white hover:text-gold"
                        onClick={() =>
                          setOpenMenu(openMenu === index ? null : index)
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transform transition-transform ${
                            openMenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Submenu, hanya muncul kalau openMenu === index */}
                      {openMenu === index && (
                        <div className="ml-4 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className="block px-3 py-2 text-sm text-white hover:text-gold"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-sm font-medium ${
                        isActive(item.href)
                          ? "text-gold bg-blue-900/40"
                          : "text-white hover:text-gold"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
