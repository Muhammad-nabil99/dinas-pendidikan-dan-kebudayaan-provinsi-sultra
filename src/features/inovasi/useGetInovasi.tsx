import { getInovasi, getNews } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetInovasi() {
  const { data, isLoading } = useQuery({
    queryKey: ["inovasi"],
    queryFn: getInovasi,
  });

  return { data, isLoading };
}
export default useGetInovasi;
