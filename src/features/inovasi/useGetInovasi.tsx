import { getInovasi } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetInovasi() {
  const { data: inovasi, isLoading } = useQuery({
    queryKey: ["inovasi"],
    queryFn: getInovasi,
  });

  return { inovasi, isLoading };
}
export default useGetInovasi;
