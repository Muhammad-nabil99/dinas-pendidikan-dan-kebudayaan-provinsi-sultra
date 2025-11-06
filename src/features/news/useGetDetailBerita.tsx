import { getDetailBerita } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetDetailBerita(slug: string) {
  const { data: detailBerita, isLoading } = useQuery({
    queryKey: ["berita", slug],
    queryFn: () => getDetailBerita(slug),
    enabled: !!slug,
  });

  return { detailBerita, isLoading };
}
export default useGetDetailBerita;
