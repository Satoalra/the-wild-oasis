import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,

    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from user's email adress."
      );
    },
  });

  return { signup, isPending };
}
