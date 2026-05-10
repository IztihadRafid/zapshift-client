import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyParcels = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: parcels = [], isLoading } = useQuery({
    queryKey: ["myParcels", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      if (isLoading) return <p>Loading...</p>;
    },
  });
  return (
    <div className="overflow-hidden rounded-md border">
      {parcels.length}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        {parcels?.map((data, index) => (
          <TableBody key={index}>
            <TableRow>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="font-medium">{data?.senderName}</TableCell>
              <TableCell>{data?.cost}</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">
                <button className="btn btn-primary">Details</button>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </div>
  );
};

export default MyParcels;
