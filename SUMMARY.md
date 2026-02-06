    # Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara - Website

    Dokumentasi lengkap project website resmi Dinas Pendidikan dan Kebudayaan (Dikbud) Provinsi Sulawesi Tenggara.

    ## 📋 Daftar Isi

    1. [Deskripsi Project](#deskripsi-project)
    2. [Struktur Folder](#struktur-folder)
    3. [Tech Stack](#tech-stack)
    4. [Dependencies](#dependencies)
    5. [Fitur Utama](#fitur-utama)
    6. [Struktur Routing](#struktur-routing)
    7. [Komponen Utama](#komponen-utama)
    8. [Fitur/Fitur (Features)](#fiturfitur-features)
    9. [Services & API](#services--api)
    10. [Konfigurasi](#konfigurasi)
    11. [Penjelasan Teknis](#penjelasan-teknis)

    ---

    ## 📝 Deskripsi Project

    Website resmi Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara dibangun sebagai portal informasi dan layanan publik untuk masyarakat Sulawesi Tenggara. Website ini menyediakan informasi lengkap tentang dinas, berita, pengumuman, layanan PPID (Pejabat Pengelola Informasi dan Dokumentasi), galeri kegiatan, serta berbagai layanan digital lainnya.

    **Tujuan Utama:**
    - Menyediakan informasi pendidikan dan Kebudayaan yang akurat dan terkini
    - Memberikan layanan publik berbasis digital
    - Memfasilitasi transparansi melalui sistem PPID
    - Mempermudah masyarakat dalam mengakses layanan pendidikan

    ---

    ## 📂 Struktur Folder

    ```
    dinas-pendidikan-dan-kebudayaan-provinsi-sultra/
    ├── public/                    # File statis (gambar, logo, dll)
    │   ├── avatar.png
    │   ├── logo.png
    │   ├── logo1.png
    │   ├── logo2.jpeg
    │   ├── placeholder.svg
    │   └── robots.txt
    ├── src/
    │   ├── assets/               # Asset internal (gambar, icon, dll)
    │   │   ├── avatar.png
    │   │   ├── kadis-dikbud.jpg
    │   │   └── tracking.jpg
    │   ├── components/           # Komponen React yang dapat reused
    │   │   ├── layout/           # Komponen layout (Navbar, Footer)
    │   │   ├── sections/         # Komponen section untuk halaman
    │   │   ├── ui/               # Komponen UI dasar (shadcn/ui)
    │   │   ├── gallery/          # Komponen galeri
    │   │   └── ppid/             # Komponen khusus PPID
    │   ├── features/             # Feature-based architecture
    │   │   ├── agenda/           # Fitur agenda
    │   │   ├── dashboard/        # Fitur dashboard
    │   │   ├── galeri/           # Fitur galeri
    │   │   ├── inovasi/          # Fitur inovasi
    │   │   ├── laporanKegiatan/  # Fitur laporan kegiatan
    │   │   ├── layanan/          # Fitur layanan
    │   │   ├── news/             # Fitur berita
    │   │   ├── pengumuman/       # Fitur pengumuman
    │   │   ├── PPID/             # Fitur PPID
    │   │   └── produkHukum/      # Fitur produk hukum
    │   ├── hooks/                # Custom React hooks
    │   ├── layout/               # Layout utama aplikasi
    │   ├── lib/                  # Utility functions
    │   ├── pages/                # Halaman aplikasi
    │   │   ├── agenda/           # Halaman agenda
    │   │   ├── berita/           # Halaman berita
    │   │   ├──inovasi/           # Halaman inovasi
    │   │   ├── ppid/             # Halaman PPID
    │   │   ├── profil/           # Halaman profil
    │   │   ├── laporanKegiatan/  # Halaman laporan kegiatan
    │   │   └── pengumuman/       # Halaman pengumuman
    │   ├── services/             # Konfigurasi API
    │   ├── utils/                # Utility functions
    │   ├── App.tsx               # Main application component
    │   ├── main.tsx              # Entry point
    │   ├── index.css             # Global styles
    │   └── vite-env.d.ts         # Vite environment types
    ├── index.html                # HTML entry point
    ├── package.json              # Dependencies dan scripts
    ├── tailwind.config.ts        # Konfigurasi Tailwind CSS
    ├── vite.config.ts            # Konfigurasi Vite
    ├── tsconfig.json             # TypeScript configuration
    └── postcss.config.js         # PostCSS configuration
    ```

    ---

    ## 🛠 Tech Stack

    | Kategori | Teknologi |
    |----------|-----------|
    | **Framework** | React 18.3.1 |
    | **Language** | TypeScript 5.8 |
    | **Build Tool** | Vite 5.4 |
    | **Styling** | Tailwind CSS 3.4 |
    | **UI Components** | shadcn/ui + Radix UI |
    | **State Management** | TanStack Query (React Query) 5.90 |
    | **Routing** | React Router DOM 6.30 |
    | **Form Handling** | React Hook Form 7.61 + Zod 3.25 |
    | **Icons** | Lucide React |
    | **Charts** | Recharts 2.15 |
    | **Carousel** | Embla Carousel |
    | **Date Handling** | date-fns 3.6 |
    | **Toast Notifications** | Sonner 1.7 |
    | **Animations** | Tailwind CSS Animate |

    ---

    ## 📦 Dependencies

    ### Core Dependencies

    ```json
    {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.1",
    "@tanstack/react-query": "^5.90.3"
    }
    ```

    ### UI Components (Radix UI)

    ```json
    {
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-tooltip": "^1.2.7"
    }
    ```

    ### Utility Libraries

    ```json
    {
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "lucide-react": "^0.462.0",
    "recharts": "^2.15.4",
    "date-fns": "^3.6.0",
    "zod": "^3.25.76",
    "react-hook-form": "^7.61.1"
    }
    ```

    ### Dev Dependencies

    ```json
    {
    "typescript": "^5.8.3",
    "vite": "^5.4.19",
    "tailwindcss": "^3.4.17",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.32.0"
    }
    ```

    ---

    ## ✨ Fitur Utama

    ### 1. Beranda (Homepage)

    Halaman utama website yang menampilkan informasi penting secara ringkas.

    **Section yang tersedia:**
    - **Hero Section** - Banner utama dengan slideshow gambar dan animasi typing multi-bahasa (sambutan dalam bahasa daerah Sulawesi Tenggara)
    - **Pengumuman Section** - Menampilkan pengumuman terbaru dengan scroll otomatis
    - **News Section** - Menampilkan berita terbaru dalam carousel
    - **Gallery Section** - Galeri foto kegiatan
    - **Tracking Section** - Sistem pelacakan laporan/permohonan
    - **FAQ Section** - Pertanyaan yang sering diajukan
    - **Contact Section** - Informasi kontak dan peta lokasi

    ### 2. Profil Dinas

    Halaman-halaman profil organisasi:

    | Halaman | Route | Deskripsi |
    |---------|-------|-----------|
    | Sambutan | `/profil/sambutan` | Kata Sambutan Kepala Dinas |
    | Sejarah | `/profil/sejarah` | Sejarah singkat Dinas Pendidikan |
    | Visi Misi | `/profil/visi-misi` | Visi dan Misi organisasi |
    | Tugas Fungsi | `/profil/tugas-fungsi` | Tugas Pokok dan Fungsi (Tupoksi) |
    | Struktur Organisasi | `/profil/struktur-organisasi` | Diagram struktur organisasi |
    | Produk Hukum | `/profil/produk-hukum` | Dokumen produk hukum |

    ### 3. Publikasi

    Halaman-halaman publikasi dan informasi:

    | Halaman | Route | Deskripsi |
    |---------|-------|-----------|
    | Agenda | `/agenda` | Jadwal kegiatan Dinas |
    | Inovasi | `/inovasi` | Program inovasi Dinas |
    | Produk Hukum | `/profil/produk-hukum` | Regulasi dan produk hukum |
    | Laporan Kegiatan | `/laporan-kegiatan` | Laporan kegiatan Dinas |

    ### 4. PPID (Pejabat Pengelola Informasi dan Dokumentasi)

    Sistem transparansi dan keterbukaan informasi publik:

    | Halaman | Route | Deskripsi |
    |---------|-------| PPID | `/-----------|
    | Profilppid/profil` | Profil PPID Dinas |
    | Mekanisme Layanan | `/ppid/mekanisme` | Formulir permohonan informasi publik |
    | DIP | `/ppid/dip` | Daftar Informasi Publik |

    **Kategori DIP:**
    - Informasi Berkala
    - Informasi Setiap Saat
    - Informasi Serta Merta
    - Informasi Dikecualikan
    - Daftar Informasi Publik

    ### 5. Galeri

    Halaman galeri foto kegiatan: `/galeri`

    **Fitur:**
    - Album galeri
    - Galeri modal dengan lightbox
    - Pagination galeri

    ### 6. Berita

    Sistem manajemen berita:

    | Halaman | Route | Deskripsi |
    |---------|-------|-----------|
    | Daftar Berita | `/berita` | Daftar semua berita |
    | Detail Berita | `/berita/:id` | Halaman detail berita |

    ### 7. Tracking Laporan

    Sistem pelacakan laporan/permohonan:

    **Fitur:**
    - Input nomor tracking
    - Status tracking (Diterima, Diproses, Selesai, Ditolak)
    - Modal popup hasil tracking

    ---

    ## 🛣 Struktur Routing

    ```typescript
    // Main Layout Routes
    <Route element={<AppLayout />}>
    {/* Home */}
    <Route path="/" element={<Index />} />
    
    {/* Profil Routes */}
    <Route path="/profil/sambutan" element={<Sambutan />} />
    <Route path="/profil/sejarah" element={<Sejarah />} />
    <Route path="/profil/visi-misi" element={<VisiMisi />} />
    <Route path="/profil/tugas-fungsi" element={<TugasFungsi />} />
    <Route path="/profil/tugas-fungsi/:id" element={<DetailTugasFungsi />} />
    <Route path="/profil/struktur-organisasi" element={<StrukturOrganisasi />} />
    <Route path="/profil/produk-hukum" element={<ProdukHukum />} />
    
    {/* PPID Routes */}
    <Route path="/ppid/profil" element={<PPIDProfil />} />
    <Route path="/ppid/mekanisme" element={<PPIDMekanisme />} />
    <Route path="/ppid/dip" element={<PPIDDip />} />
    
    {/* Publikasi Routes */}
    <Route path="/agenda" element={<Agenda />} />
    <Route path="/agenda/:id" element={<DetailAgenda />} />
    <Route path="/inovasi" element={<Inovasi />} />
    <Route path="/inovasi/:id" element={<DetailInovasi />} />
    <Route path="/laporan-kegiatan" element={<LaporanKegiatan />} />
    
    {/* Galeri Route */}
    <Route path="/galeri" element={<Galery />} />
    
    {/* News Routes */}
    <Route path="/berita" element={<News />} />
    <Route path="/berita/:id" element={<DetailBerita />} />
    
    {/* Pengumuman Route */}
    <Route path="/pengumuman/:id" element={<DetailPengumuman />} />
    
    {/* 404 Not Found */}
    <Route path="*" element={<NotFound />} />
    </Route>
    ```

    ---

    ## 🧩 Komponen Utama

    ### Layout Components

    | Komponen | Lokasi | Deskripsi |
    |----------|--------|-----------|
    | `AppLayout` | `src/layout/AppLayout.tsx` | Layout utama dengan Navbar dan Footer |
    | `Navbar` | `src/components/layout/Navbar.tsx` | Navigasi utama dengan dropdown menu |
    | `Footer` | `src/components/layout/Footer.tsx` | Footer dengan informasi kontak |

    ### Section Components

    | Komponen | Lokasi | Deskripsi |
    |----------|--------|-----------|
    | `HeroSection` | `src/components/sections/HeroSection.tsx` | Hero banner dengan slideshow dan animasi |
    | `NewsSection` | `src/components/sections/NewsSection.tsx` | Section berita dengan carousel |
    | `PengumumanSection` | `src/components/sections/PengumumanSection.tsx` | Section pengumuman dengan marquee |
    | `GallerySection` | `src/components/sections/GallerySection.tsx` | Section galeri foto |
    | `TrackingSection` | `src/components/sections/TrackingSection.tsx` | Section tracking laporan |
    | `FAQSection` | `src/components/sections/FAQSection.tsx` | Section FAQ dengan accordion |
    | `ContactSection` | `src/components/sections/ContactSection.tsx` | Section informasi kontak |

    ### UI Components (shadcn/ui)

    | Komponen | Deskripsi |
    |----------|-----------|
    | `Button` | Komponen button dengan variant (default, destructive, outline, secondary, ghost, link) |
    | `Card` | Container card untuk konten |
    | `Dialog` | Modal dialog |
    | `Input` | Input field |
    | `Textarea` | Textarea field |
    | `Select` | Dropdown select |
    | `Tabs` | Tab navigation |
    | `Table` | Tabel data |
    | `Badge` | Label/badge |
    | `Avatar` | Gambar avatar |
    | `Toast` | Notifikasi toast |
    | `Tooltip` | Tooltip hover |
    | `Accordion` | Accordion expandable |
    | `Form` | Form dengan validasi |
    | `Skeleton` | Loading skeleton |

    ### Helper Components

    | Komponen | Lokasi | Deskripsi |
    |----------|--------|-----------|
    | `LoadingSpinner` | `src/components/LoadingSpinner.tsx` | Spinner loading |
    | `CardLoadingSkeleton` | `src/components/CardLoadingSkeleton.tsx` | Skeleton untuk card |
    | `DetailLoadingSkeleton` | `src/components/DetailLoadingSkeleton.tsx` | Skeleton untuk detail |
    | `SuccessModal` | `src/components/SuccessModal.tsx` | Modal sukses |
    | `CooldownModal` | `src/components/CooldownModal.tsx` | Modal cooldown |
    | `TrackingModal` | `src/components/TrackingModal.tsx` | Modal tracking |
    | `GalleryModal` | `src/components/gallery/GalleryModal.tsx` | Modal galeri |
    | `TrackingStatusList` | `src/components/TrackingStatusList.tsx` | List status tracking |

    ### PPID Components

    | Komponen | Lokasi | Deskripsi |
    |----------|--------|-----------|
    | `Tabs` | `src/components/ppid/Tabs.tsx` | Tab navigation PPID |
    | `TableInformasi` | `src/components/ppid/TableInformasi.tsx` | Tabel informasi DIP |
    | `SearchInput` | `src/components/ppid/SearchInput.tsx` | Input pencarian |
    | `MekanismeForm` | `src/components/ppid/MekanismeForm.tsx` | Formulir permohonan |
    | `DipList` | `src/components/ppid/DipList.tsx` | List dokumen DIP |
    | `PPIDSkeleton` | `src/components/ppid/PPIDSkeleton.tsx` | Skeleton loading PPID |

    ---

    ## 🔧 Features

    ### News Feature

    **Hooks:**
    - `useGetBerita()` - Mengambil daftar berita
    - `useGetDetailBerita(id)` - Mengambil detail berita

    **Endpoints API:**
    ```
    GET /api/berita
    GET /api/berita/:id
    ```

    ### Pengumuman Feature

    **Hooks:**
    - `useGetPengumuman()` - Mengambil daftar pengumuman
    - `useGetDetailPengumuman(id)` - Mengambil detail pengumuman

    **Endpoints API:**
    ```
    GET /api/pengumuman
    GET /api/pengumuman/:id
    ```

    ### Agenda Feature

    **Hooks:**
    - `useGetAgenda()` - Mengambil daftar agenda
    - `useGetDetailAgenda(id)` - Mengambil detail agenda

    **Endpoints API:**
    ```
    GET /api/agenda
    GET /api/agenda/:id
    ```

    ### Inovasi Feature

    **Hooks:**
    - `useGetInovasi()` - Mengambil daftar inovasi
    - `useGetDetailInovasi(id)` - Mengambil detail inovasi

    **Endpoints API:**
    ```
    GET /api/inovasi
    GET /api/inovasi/:id
    ```

    ### Galeri Feature

    **Hooks:**
    - `useGetGaleri()` - Mengambil daftar galeri

    **Endpoints API:**
    ```
    GET /api/galeri
    ```

    ### PPID Feature

    **Hooks:**
    - `useGetPPID()` - Mengambil data PPID dan DIP

    **Endpoints API:**
    ```
    GET /api/ppid/profil
    GET /api/ppid/dip
    GET /api/ppid/mekanisme
    ```

    ### Layanan Feature

    **Hooks:**
    - `usePostLayanan(data)` - Mengirim permohonan layanan/PPID

    **Endpoints API:**
    ```
    POST /api/layanan
    POST /api/ppid/permohonan
    ```

    ### Dashboard Feature

    **Hooks:**
    - `useGetDashboard()` - Mengambil data dashboard (logo, hero images, statistik)

    **Endpoints API:**
    ```
    GET /api/dashboard
    ```

    ### Laporan Kegiatan Feature

    **Hooks:**
    - `useGetLaporanKegiatan()` - Mengambil laporan kegiatan

    **Endpoints API:**
    ```
    GET /api/laporan-kegiatan
    ```

    ### Produk Hukum Feature

    **Hooks:**
    - `useGetProdukHukum()` - Mengambil produk hukum

    **Endpoints API:**
    ```
    GET /api/produk-hukum
    ```

    ---

    ## 🔌 Services & API

    ### API Configuration

    **File:** `src/services/api.ts`

    Konfigurasi axios instance untuk komunikasi dengan backend:

    ```typescript
    import axios from "axios";

    const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "/api",
    headers: {
        "Content-Type": "application/json",
    },
    });

    // Request interceptor
    api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
    );

    // Response interceptor
    api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
        // Handle unauthorized
        localStorage.removeItem("token");
        }
        return Promise.reject(error);
    }
    );

    export default api;
    ```

    ### Available API Functions

    | Function | Description |
    |----------|-------------|
    | `getTrackingStatus(trackingNumber)` | Mendapatkan status tracking |
    | `getDashboard()` | Mendapatkan data dashboard |
    | `getPPID()` | Mendapatkan data PPID |
    | `postLayanan(data)` | Mengirim permohonan layanan |

    ---

    ## ⚙️ Konfigurasi

    ### Tailwind Configuration

    **File:** `tailwind.config.ts`

    Konfigurasi tema warna khusus:

    ```typescript
    const config = {
    theme: {
        extend: {
        colors: {
            government-blue: "#1e3a8a",
            education-green: "#059669",
            gold: "#f59e0b",
            "light-gold": "#fbbf24",
        },
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
        },
    },
    };
    ```

    ### Vite Configuration

    **File:** `vite.config.ts`

    ```typescript
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react-swc";
    import path from "path";

    export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
        "@": path.resolve(__dirname, "./src"),
        },
    },
    });
    ```

    ### TypeScript Configuration

    **File:** `tsconfig.json` & `tsconfig.app.json`

    Konfigurasi untuk path alias dan type checking.

    ---

    ## 📖 Penjelasan Teknis

    ### 1. State Management dengan React Query

    Project menggunakan TanStack Query (React Query) untuk state management server-side:

    ```typescript
    // Contoh penggunaan useQuery
    const { data, isLoading, error } = useGetBerita();

    // Contoh penggunaan useMutation
    const { mutate, isLoading } = usePostLayanan();
    ```

    **Keuntungan:**
    - Automatic caching
    - Background refetching
    - Loading states
    - Error handling
    - Optimistic updates

    ### 2. Routing dengan React Router DOM

    ```typescript
    // Programmatic navigation
    import { useNavigate } from "react-router-dom";
    const navigate = useNavigate();
    navigate("/berita/123");

    // Link component
    import { Link } from "react-router-dom";
    <Link to="/profil/sambutan">Sambutan</Link>;
    ```

    ### 3. Form Handling dengan React Hook Form + Zod

    ```typescript
    import { useForm } from "react-hook-form";
    import { zodResolver } from "@hookform/resolvers/zod";
    import { z } from "zod";

    const schema = z.object({
    nama: z.string().min(3, "Nama minimal 3 karakter"),
    email: z.string().email("Email tidak valid"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    });
    ```

    ### 4. UI Components dengan shadcn/ui

    shadcn/ui adalah library UI yang menyediakan komponen accessible:

    ```typescript
    import { Button } from "@/components/ui/button";
    import { Card, CardContent, CardHeader } from "@/components/ui/card";

    <Button variant="primary">Click me</Button>
    <Card>
    <CardHeader>Title</CardHeader>
    <CardContent>Content</CardContent>
    </Card>
    ```

    ### 5. Lazy Loading dengan React Lazy Load Image

    ```typescript
    import { LazyLoadImage } from "react-lazy-load-image-component";

    <LazyLoadImage
    src={imageUrl}
    effect="blur"
    loading="lazy"
    />
    ```

    ### 6. Animasi dan Transisi

    Tailwind CSS animate untuk animasi:

    ```html
    <!-- Blinking cursor -->
    <span className="animate-pulse">|</span>

    <!-- Fade in -->
    <div className="animate-fade-in">
    ```

    ### 7. Responsive Design

    Breakpoints Tailwind CSS:

    | Prefix | Breakpoint |
    |--------|------------|
    | `sm` | ≥ 640px |
    | `md` | ≥ 768px |
    | `lg` | ≥ 1024px |
    | `xl` | ≥ 1280px |
    | `2xl` | ≥ 1536px |

    ### 8. Toast Notifications dengan Sonner

    ```typescript
    import { toast } from "sonner";

    toast.success("Berhasil disimpan!");
    toast.error("Gagal menyimpan!");
    ```

    ---

    ## 🚀 Cara Menjalankan

    ### Prerequisites
    - Node.js 18+
    - npm atau bun

    ### Installation

    ```bash
    # Clone repository
    git clone <repository-url>

    # Install dependencies
    npm install
    # atau
    bun install
    ```

    ### Development

    ```bash
    npm run dev
    # atau
    bun run dev
    ```

    ### Build

    ```bash
    npm run build
    # atau
    bun run build
    ```

    ### Preview Production Build

    ```bash
    npm run preview
    # atau
    bun run preview
    ```

    ---

    ## 📄 Lisensi

    Project ini adalah bagian dari sistem informasi Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara.

    ---

    ## 👥 Kontributor

    Dikembangkan oleh TIM IT Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara.

    ---

    **Terakhir diperbarui:** Juni 2025

