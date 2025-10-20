import { getDetailBerita } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetDetailBerita(id: number) {
  const { data: detailBerita, isLoading } = useQuery({
    queryKey: ["berita", id],
    queryFn: () => getDetailBerita(id),
    enabled: !!id,
  });

  return { detailBerita, isLoading };
}
export default useGetDetailBerita;
