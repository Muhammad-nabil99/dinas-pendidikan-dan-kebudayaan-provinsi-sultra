import { getAgenda, getLaporanKegiatan, getNews } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetLaporanKegiatan() {
  const { data, isLoading } = useQuery({
    queryKey: ["laporanKegiatan"],
    queryFn: getLaporanKegiatan,
  });

  return { data, isLoading };
}
export default useGetLaporanKegiatan;
