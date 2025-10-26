import { getDetailInovasi } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetDetailInovasi(id: number) {
  const { data: detailInovasi, isLoading } = useQuery({
    queryKey: ["inovasi", id],
    queryFn: () => getDetailInovasi(id),
  });

  return { detailInovasi, isLoading };
}
export default useGetDetailInovasi;
