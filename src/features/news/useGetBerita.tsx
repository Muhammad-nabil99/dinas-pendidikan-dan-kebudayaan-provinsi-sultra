import { getBerita } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetBerita() {
  const { data: berita, isLoading } = useQuery({
    queryKey: ["berita"],
    queryFn: getBerita,
  });

  return { berita, isLoading };
}
export default useGetBerita;
