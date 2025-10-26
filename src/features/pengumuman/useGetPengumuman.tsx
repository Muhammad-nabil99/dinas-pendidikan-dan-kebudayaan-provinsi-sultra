import { getAgenda, getLaporanKegiatan, getNews, getPengumuman } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetPengumuman() {
  const { data : pengumuman, isLoading } = useQuery({
    queryKey: ["pengumuman"],
    queryFn: getPengumuman,
  });

  return { pengumuman, isLoading };
}
export default useGetPengumuman;
