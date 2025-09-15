import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AppLayout from "./layout/AppLayout.js";

// Profil pages
import Sejarah from "./pages/profil/Sejarah";
import VisiMisi from "./pages/profil/VisiMisi";
import TugasFungsi from "./pages/profil/TugasFungsi";
import StrukturOrganisasi from "./pages/profil/StrukturOrganisasi";

// Pelayanan pages
import VisiMisiPelayanan from "./pages/pelayanan/VisiMisiPelayanan";
import MottoPelayanan from "./pages/pelayanan/MottoPelayanan";
import PinjamRuang from "./pages/pelayanan/PinjamRuang";
import SOP from "./pages/pelayanan/SOP";
import SaranaPrasarana from "./pages/pelayanan/SaranaPrasarana";
import StandarPelayanan from "./pages/pelayanan/StandarPelayanan";
import Pengaduan from "./pages/pelayanan/Pengaduan";
import Prestasi from "./pages/pelayanan/Prestasi";
import KlinikPendidikan from "./pages/pelayanan/KlinikPendidikan";

// PPID page
import PPID from "./pages/PPID";

// Galeri pages
import Foto from "./pages/galeri/Foto";
import Video from "./pages/galeri/Video";
import DetailTugasFungsi from "./pages/profil/TugasFungsiTupoksi/DetailTugasFungsi";

import News from "./pages/News";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            {/* Profil Routes */}
            <Route path="/profil/sejarah" element={<Sejarah />} />
            <Route path="/profil/visi-misi" element={<VisiMisi />} />
            <Route path="/profil/tugas-fungsi" element={<TugasFungsi />} />
            <Route
              path="/profil/struktur-organisasi"
              element={<StrukturOrganisasi />}
            >
              {/* <Route path="/:id" element={<DetailTugasFungsi />} /> */}
            </Route>

            {/* Pelayanan Routes */}
            <Route
              path="/pelayanan/visi-misi"
              element={<VisiMisiPelayanan />}
            />
            <Route path="/pelayanan/motto" element={<MottoPelayanan />} />
            <Route path="/pelayanan/pinjam-ruang" element={<PinjamRuang />} />
            <Route path="/pelayanan/sop" element={<SOP />} />
            <Route
              path="/pelayanan/sarana-prasarana"
              element={<SaranaPrasarana />}
            />
            <Route
              path="/pelayanan/standar-pelayanan"
              element={<StandarPelayanan />}
            />
            <Route path="/pelayanan/pengaduan" element={<Pengaduan />} />
            <Route path="/pelayanan/prestasi" element={<Prestasi />} />
            <Route path="/pelayanan/klinik" element={<KlinikPendidikan />} />

            {/* PPID Route */}
            <Route path="/ppid" element={<PPID />} />

            {/* Galeri Routes */}
            <Route path="/galeri/foto" element={<Foto />} />
            <Route path="/galeri/video" element={<Video />} />

            <Route path="/news" element={<News />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
