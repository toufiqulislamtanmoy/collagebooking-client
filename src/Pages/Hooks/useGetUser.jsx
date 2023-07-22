import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";

const useGetUser = () => {
    const {user} = useContext(AuthContext);
    const {data:singleuser = [], isLoading:loading,refetch} = useQuery({
        queryKey:['singleuser'],
        queryFn: async () => {
            const res = await fetch(`https://collagebooking-server.vercel.app/singleuser/${user?.email}`);
            return res.json();
        }
    })
    return [singleuser,refetch,loading];
};

export default useGetUser;