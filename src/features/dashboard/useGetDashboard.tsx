import { getDashboard } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetDashboard() {
  const { data : dashboard, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
  }); 

  return { dashboard, isLoading };
}
export default useGetDashboard;
