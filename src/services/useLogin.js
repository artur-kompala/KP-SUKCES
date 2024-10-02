import { useMutation, useQueryClient } from "react-query";
import { login as loginApi } from "./apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      navigate('/admin', { replace: true });
    },
    onError: (err) => {
      console.error(err.message);
    },
    });
    
    return { login, isLoading };
}
