import { getLaporanKegiatan } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetLaporanKegiatan() {
  const { data: laporanKegiatan, isLoading } = useQuery({
    queryKey: ["laporanKegiatan"],
    queryFn: getLaporanKegiatan,
  });

  return { laporanKegiatan, isLoading };
}
export default useGetLaporanKegiatan;
