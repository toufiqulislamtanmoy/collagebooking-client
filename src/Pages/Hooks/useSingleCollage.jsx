import { useQuery } from "@tanstack/react-query";

const useSingleCollage = (collageID) => {
    const {data:collage = [], isLoading:loading,refetch} = useQuery({
        queryKey:['collage'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/collage/${collageID}`);
            return res.json();
        }
    })
    return [collage,refetch,loading];
};

export default useSingleCollage;