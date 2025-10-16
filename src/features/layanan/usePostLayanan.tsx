import { postApiLayanan } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function usePostLayanan() {
  const queryClient = useQueryClient();
  const { mutateAsync: postLayanan, isPending : isLoading } = useMutation({
    mutationFn: postApiLayanan,
    mutationKey: ["layanan"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["layanan"] });
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  return { postLayanan, isLoading };
}
export default usePostLayanan;
