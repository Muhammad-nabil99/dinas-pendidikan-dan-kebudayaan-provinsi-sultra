export const BACKEND_BASE_URL = "https://dashboard-profil.btikpsultra.online";
export const API_BASE_URL = `${BACKEND_BASE_URL}/api`;

export const getStorageUrl = (path?: string | null): string => {
  if (!path) return "";

  if (/^https?:\/\//i.test(path)) {
    const storageMatch = path.match(/\/storage\/(.+)$/i);
    if (storageMatch?.[1]) {
      return `${BACKEND_BASE_URL}/storage/${storageMatch[1].replace(/^\/+/, "")}`;
    }
    return path;
  }

  const cleanPath = path.replace(/^\/+/, "").replace(/^storage\/+/i, "");
  return `${BACKEND_BASE_URL}/storage/${cleanPath}`;
};
