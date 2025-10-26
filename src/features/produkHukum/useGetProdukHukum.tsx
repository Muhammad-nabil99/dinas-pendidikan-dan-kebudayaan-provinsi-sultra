import { getProdukHukum } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetProdukHukum(){
     const { data : produkHukum, isLoading } = useQuery({
    queryKey: ["produkHukum"],
    queryFn: getProdukHukum,
  });

  return { produkHukum, isLoading };
}
export default useGetProdukHukum