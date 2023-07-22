import { useQuery } from "@tanstack/react-query";


const useUserReview = () => {
    const {data:reviews = [], isLoading:loading,refetch} = useQuery({
        queryKey:['reviews'],
        queryFn: async () => {
            const res = await fetch('https://collagebooking-server.vercel.app/reviews');
            return res.json();
        }
    })
    return [reviews,refetch,loading];
};

export default useUserReview;