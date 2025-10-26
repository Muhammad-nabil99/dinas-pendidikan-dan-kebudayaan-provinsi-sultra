import { getDetailAgenda } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetDetailAgenda(id: number) {
  const { data: detailAgenda, isLoading } = useQuery({
    queryKey: ["agenda", id],
    queryFn: () => getDetailAgenda(id),
  });

  return { detailAgenda, isLoading };
}
export default useGetDetailAgenda;
