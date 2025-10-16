import { getBerita } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetBerita() {
  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: getBerita,
  });

  return { data, isLoading };
}
export default useGetBerita;
