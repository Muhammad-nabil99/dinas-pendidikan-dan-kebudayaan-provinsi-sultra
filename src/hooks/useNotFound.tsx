import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useNotFound(data, isLoading: boolean, id: string) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && data) {
      const exists = data.some((item) => item.id === Number(id));

      if (!exists) {
        navigate("/not-found", { replace: true });
      }
    }
  }, [data, isLoading, id, navigate]);
}
export default useNotFound;
