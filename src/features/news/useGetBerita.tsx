import { getBerita } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetBerita() {
  const { data, isLoading } = useQuery({
    queryKey: ["berita"],
    queryFn: getBerita,
  });

  const berita = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
    ? data.data
    : Array.isArray(data?.berita)
    ? data.berita
    : [];

  return { berita, isLoading };
}
export default useGetBerita;
