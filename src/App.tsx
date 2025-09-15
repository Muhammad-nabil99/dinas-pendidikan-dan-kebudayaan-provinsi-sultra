import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AppLayout from "./layout/AppLayout.js";
// Profil pages
import Sejarah from "./pages/profil/Sejarah";
import VisiMisi from "./pages/profil/VisiMisi";
import TugasFungsi from "./pages/profil/TugasFungsi";
import StrukturOrganisasi from "./pages/profil/StrukturOrganisasiChart.js";

// PPID page
import PPID from "./pages/PPID";

// Galeri pages
import Foto from "./pages/galeri/Foto";
import Video from "./pages/galeri/Video";
import DetailTugasFungsi from "./pages/profil/TugasFungsiTupoksi/DetailTugasFungsi";

import News from "./pages/News";
import DetailBerita from "./pages/Detail/DetailBerita.js";

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
              path="/profil/tugas-fungsi/:id"
              element={<DetailTugasFungsi />}
            />
            <Route
              path="/profil/struktur-organisasi"
              element={<StrukturOrganisasi />}
            />

            {/* PPID Route */}
            <Route path="/ppid" element={<PPID />} />

            {/* Galeri Routes */}
            <Route path="/galeri/foto" element={<Foto />} />
            <Route path="/galeri/video" element={<Video />} />

            {/* News Routes */}
            <Route path="/berita" element={<News />} />
            <Route path="/berita/:id" element={<DetailBerita />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
