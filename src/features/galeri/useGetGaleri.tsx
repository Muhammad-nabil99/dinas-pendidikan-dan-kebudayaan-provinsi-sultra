import { getGaleri } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export interface MediaFile {
  file: string;
  url?: string;
  type: "foto" | "video";
}

interface Medias {
  id: number;
  file: MediaFile[];
  created_at: string;
  updated_at: string;
}

export interface GaleriItem {
  id: number;
  medias_id: number;
  judul: string;
  deskripsi: string;
  coverImage: string;
  cover_image?: string;
  cover_image_url?: string;
  coverImage_url?: string;
  lokasi: string;
  instansi: string;
  category: string | null;
  penyelenggara?: string;
  tabel: string;
  medias: Medias;
  created_at: string;
  updated_at: string;
}

export interface GaleriResponse {
  berita?: GaleriItem[];
  inovasi?: GaleriItem[];
  agenda?: GaleriItem[];
  pengumuman?: GaleriItem[];
  data?: GaleriItem[] | GaleriResponse;
}

// Album interface for display
export interface Album {
  id: string;
  title: string;
  category: "foto" | "video";
  instansi: string;
  coverImage: string;
  mediaCount: number;
  date: string;
  location: string;
  description: string;
  media: {
    id: string;
    type: "foto" | "video";
    url: string;
    thumbnail: string;
    title: string;
    description: string;
  }[];
}

function useGetGaleri() {
  const { data: galeri, isLoading } = useQuery<GaleriResponse>({
    queryKey: ["galeri"],
    queryFn: getGaleri,
  });

  return { galeri, isLoading };
}

export default useGetGaleri;
