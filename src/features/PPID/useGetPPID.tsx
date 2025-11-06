import {  getPPID } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetPPID() {
  const { data: PPID, isLoading: isLoadingPPID } = useQuery({
      queryFn: () => getPPID(),
    queryKey: ["ppid"],
  });
  return { PPID, isLoadingPPID };
}
export default useGetPPID;
