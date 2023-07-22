import { useQuery } from "@tanstack/react-query";

const useAllCollageData = () => {
    const {data:collages = [], isLoading:loading,refetch} = useQuery({
        queryKey:['collages'],
        queryFn: async () => {
            const res = await fetch('https://collagebooking-server.vercel.app/collages');
            return res.json();
        }
    })
    return [collages,refetch,loading];
};

export default useAllCollageData;