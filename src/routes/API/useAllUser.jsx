import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAllUser = () => {
  const axiosSecure = useAxiosSecure();
  const {data: users = [],refetch, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return { users, refetch, isLoading };
};

export default useAllUser;
