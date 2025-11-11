import { getDetailPengumuman } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetDetailPengumuman(id: number) {
  const { data: detailPengumuman, isLoading } = useQuery({
    queryKey: ["pengumuman", id],
    queryFn: () => getDetailPengumuman(id),
    enabled: !!id,
  });

  return { detailPengumuman, isLoading };
}
export default useGetDetailPengumuman;
