import { useQuery } from "@tanstack/react-query";

const useAllCollageData = () => {
    const {data:collages = [], isLoading:loading,refetch} = useQuery({
        queryKey:['collages'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/collages');
            return res.json();
        }
    })
    return [collages,refetch,loading];
};

export default useAllCollageData;