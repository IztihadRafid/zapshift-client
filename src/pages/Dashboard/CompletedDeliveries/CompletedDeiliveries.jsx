import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/CustomComponents/FormateDate";
import { Button } from "@/components/ui/button";
const CompletedDeiliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user?.email, "delivery_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=parcel_delivered`,
      );
      return res.data;
    },
  });

  //   Calculate Payout for rider
  const calculatePayout = (parcel) => {
    if (parcel?.senderDistrict === parcel?.receiverDistrict) {
      return parcel?.cost * 0.8;
    } else {
      return parcel?.cost * 0.6;
    }
  };
  return (
    <div>
      <div>
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-lime-700 md:p-8 p-4 bg-green-100 rounded-4xl">
          Assign Riders
        </h1>
        <p className="lg:text-4xl md:text-3xl text-2xl font-bold text-lime-700 md:p-8 ">
          Total Users: {parcels.length}
        </p>
      </div>
      <div className="m-10 overflow-hidden rounded-[15px] bg-white p-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">No.</TableHead>
              <TableHead className="w-[100px]">Parcel Name</TableHead>
              <TableHead className="w-[80px]">createdAt</TableHead>
              <TableHead className="w-[60px]">Pickup District</TableHead>
              <TableHead className="w-[60px]">Delivery District</TableHead>
              <TableHead className="w-[100px]">Delivery Status</TableHead>
              <TableHead className="w-[70px]">Cost</TableHead>
              <TableHead className="w-[70px]">Payout</TableHead>
              <TableHead className="text-center w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>

          {parcels?.map((parcel, index) => (
            <TableBody key={parcel._id}>
              <TableRow>
                <TableCell className="font-medium">{index + 1}</TableCell>

                <TableCell className="font-medium">
                  {parcel?.parcelName}
                </TableCell>

                <TableCell className="font-medium">
                  {formatDate(parcel?.createdAt)}
                </TableCell>
                <TableCell>{parcel?.senderDistrict}</TableCell>
                <TableCell>{parcel?.receiverDistrict}</TableCell>
                <TableCell>{parcel?.deliveryStatus}</TableCell>
                <TableCell>{parcel?.cost} Tk/-</TableCell>
                <TableCell>{calculatePayout(parcel)} Tk/-</TableCell>
                <TableCell className="text-center">
                  <Button className="btn btn-primary">Cash Out</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default CompletedDeiliveries;
