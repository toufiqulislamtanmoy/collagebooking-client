import { useQuery } from "@tanstack/react-query";

const useSingleCollage = (collageID) => {
    const {data:collage = [], isLoading:loading,refetch} = useQuery({
        queryKey:['collage'],
        queryFn: async () => {
            const res = await fetch(`https://collagebooking-server.vercel.app/collage/${collageID}`);
            return res.json();
        }
    })
    return [collage,refetch,loading];
};

export default useSingleCollage;