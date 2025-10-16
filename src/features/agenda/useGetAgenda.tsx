import { getAgenda, getNews } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetAgenda() {
  const { data : agenda, isLoading } = useQuery({
    queryKey: ["agenda"],
    queryFn: getAgenda,
  });

  return { agenda, isLoading };
}
export default useGetAgenda;
