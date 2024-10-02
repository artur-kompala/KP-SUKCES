import { useQuery } from "react-query";
import { getCurrentUser } from "./apiAuth";

export function useUser(){
    const {isLoding,data: user} = useQuery({
        queryKey: ['user'], 
        queryFn: getCurrentUser
    })
    return {isLoding,user,isAuthenticated: user?.role === "authenticated"}
}