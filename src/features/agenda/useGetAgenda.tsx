import { getAgenda } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

function useGetAgenda() {
  const { data, isLoading } = useQuery({
    queryKey: ["agenda"],
    queryFn: getAgenda,
  });

  const agenda = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
    ? data.data
    : Array.isArray(data?.agenda)
    ? data.agenda
    : [];

  return { agenda, isLoading };
}
export default useGetAgenda;
