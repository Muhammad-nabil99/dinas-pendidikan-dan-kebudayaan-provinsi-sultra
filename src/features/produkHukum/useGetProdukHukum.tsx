import { getProdukHukum } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetProdukHukum(){
  const { data, isLoading } = useQuery({
    queryKey: ["produkHukum"],
    queryFn: getProdukHukum,
  });

  const produkHukum = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
    ? data.data
    : [];

  return { produkHukum, isLoading };
}
export default useGetProdukHukum