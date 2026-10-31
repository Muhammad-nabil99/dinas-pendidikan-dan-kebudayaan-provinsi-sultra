import {
  GaleriResponse,
  MediaFile,
  Album,
} from "@/features/galeri/useGetGaleri";
import { getStorageUrl } from "@/services/urls";

// Transform API data to Album format
export const transformGaleriToAlbums = (
  galeriData: GaleriResponse | undefined
): Album[] => {
  if (!galeriData) return [];

  const allItems = [
    ...galeriData.berita,
    ...galeriData.inovasi,
    ...galeriData.agenda,
    ...galeriData.pengumuman,
  ];

  return allItems.map((item) => {
    // Determine category based on file types
    const hasVideo = item.medias?.file?.some(
      (f: MediaFile) => f.type === "video"
    );
    const category: "foto" | "video" = hasVideo ? "video" : "foto";

    // Transform media files
    const media =
      item.medias?.file?.map((mediaFile: MediaFile, index: number) => {
        const url = getStorageUrl(mediaFile.file);
        const thumbnail = getStorageUrl(mediaFile.file);
        return {
          id: `${item.id}-${index}`,
          type: mediaFile.type,
          url,
          thumbnail,
          title: `${item.judul} - Media ${index + 1}`,
          description: item.deskripsi || "",
        };
      }) || [];

    return {
      id: `${item.tabel}-${item.id}`,
      title: item.judul,
      category,
      instansi: item.instansi.toUpperCase() as "SMA" | "SMK" | "SLB",
      coverImage: getStorageUrl(item.coverImage),
      mediaCount: item.medias?.file?.length || 0,
      date: item.created_at,
      location: item.lokasi,
      description: item.deskripsi,
      media,
    };
  });
};
