import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: () => logoutApi(),

    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },

    onError: err => {
      console.log("Error", err);
      toast.error("Cant logout");
    },
  });
  return { logout, isPending };
}
