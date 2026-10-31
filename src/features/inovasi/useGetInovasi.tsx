import { getInovasi } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetInovasi() {
  const { data, isLoading } = useQuery({
    queryKey: ["inovasi"],
    queryFn: getInovasi,
  });

  const inovasi = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
    ? data.data
    : Array.isArray(data?.inovasi)
    ? data.inovasi
    : [];

  return { inovasi, isLoading };
}
export default useGetInovasi;
