import { getAgenda, getLaporanKegiatan, getPengumuman } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetPengumuman() {
  const { data, isLoading } = useQuery({
    queryKey: ["pengumuman"],
    queryFn: getPengumuman,
  });

  const pengumuman = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
    ? data.data
    : Array.isArray(data?.pengumuman)
    ? data.pengumuman
    : [];

  return { pengumuman, isLoading };
}
export default useGetPengumuman;
