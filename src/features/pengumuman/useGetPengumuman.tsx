import { getAgenda, getLaporanKegiatan, getNews, getPengumuman } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetPengumuman() {
  const { data, isLoading } = useQuery({
    queryKey: ["pengumuman"],
    queryFn: getPengumuman,
  });

  return { data, isLoading };
}
export default useGetPengumuman;
