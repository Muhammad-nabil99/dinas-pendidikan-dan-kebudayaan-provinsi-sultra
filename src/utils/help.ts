import {
  GaleriItem,
  GaleriResponse,
  MediaFile,
  Album,
} from "@/features/galeri/useGetGaleri";
import { getStorageUrl } from "@/services/urls";

const toArray = (value: unknown): GaleriItem[] => {
  if (Array.isArray(value)) return value as GaleriItem[];
  if (
    value &&
    typeof value === "object" &&
    Array.isArray((value as { data?: unknown }).data)
  ) {
    return (value as { data: GaleriItem[] }).data;
  }
  return [];
};

const parseMediaFiles = (rawFiles: unknown): MediaFile[] => {
  if (Array.isArray(rawFiles)) return rawFiles as MediaFile[];
  if (typeof rawFiles === "string") {
    try {
      const parsed = JSON.parse(rawFiles);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
};

// Transform API data to Album format
export const transformGaleriToAlbums = (
  galeriData: GaleriResponse | GaleriItem[] | undefined | null
): Album[] => {
  if (!galeriData || typeof galeriData !== "object") return [];

  const payload =
    "data" in galeriData &&
    galeriData.data &&
    typeof galeriData.data === "object" &&
    !Array.isArray(galeriData.data)
      ? (galeriData.data as GaleriResponse)
      : (galeriData as GaleriResponse);

  const allItems: GaleriItem[] = Array.isArray(galeriData)
    ? galeriData
    : "data" in galeriData && Array.isArray(galeriData.data)
    ? (galeriData.data as GaleriItem[])
    : [
        ...toArray(payload.berita),
        ...toArray(payload.inovasi),
        ...toArray(payload.agenda),
        ...toArray(payload.pengumuman),
      ];

  return allItems.map((item, itemIndex) => {
    const mediaFiles = parseMediaFiles(item?.medias?.file);

    // Determine category based on file types
    const hasVideo = mediaFiles.some((f: MediaFile) => f?.type === "video");
    const category: "foto" | "video" = hasVideo ? "video" : "foto";

    // Transform media files
    const media = mediaFiles.map((mediaFile: MediaFile, index: number) => {
      const fileOrUrl = mediaFile?.file || mediaFile?.url;
      const url = getStorageUrl(fileOrUrl);
      const thumbnail = getStorageUrl(fileOrUrl);
      return {
        id: `${item?.id ?? itemIndex}-${index}`,
        type: mediaFile?.type ?? "foto",
        url,
        thumbnail,
        title: `${item?.judul || "Album"} - Media ${index + 1}`,
        description: item?.deskripsi || "",
      };
    });

    return {
      id: `${item?.tabel || "galeri"}-${item?.id ?? itemIndex}`,
      title: item?.judul || "",
      category,
      instansi: (item?.instansi || "").toUpperCase() as "SMA" | "SMK" | "SLB",
      coverImage: getStorageUrl(
        item?.coverImage ||
          item?.cover_image ||
          item?.coverImage_url ||
          item?.cover_image_url
      ),
      mediaCount: mediaFiles.length,
      date: item?.created_at || "",
      location: item?.lokasi || "",
      description: item?.deskripsi || "",
      media,
    };
  });
};
