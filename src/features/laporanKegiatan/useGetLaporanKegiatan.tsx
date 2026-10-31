import { getLaporanKegiatan } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetLaporanKegiatan() {
  const { data, isLoading } = useQuery({
    queryKey: ["laporanKegiatan"],
    queryFn: getLaporanKegiatan,
  });

  const laporanKegiatan = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
    ? data.data
    : [];

  return { laporanKegiatan, isLoading };
}
export default useGetLaporanKegiatan;
