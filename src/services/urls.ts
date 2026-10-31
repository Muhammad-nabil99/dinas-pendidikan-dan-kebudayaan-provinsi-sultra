export const BACKEND_BASE_URL = "https://dashboard-profil.btikpsultra.online";
export const API_BASE_URL = `${BACKEND_BASE_URL}/api`;

export const getStorageUrl = (path?: string | null): string => {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;

  return `${BACKEND_BASE_URL}/storage/${path.replace(/^\/+/, "")}`;
};
