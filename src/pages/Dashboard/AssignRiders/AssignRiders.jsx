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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import Swal from "sweetalert2";
const AssignRiders = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedParcel, setSelectedParcel] = useState(null);
  const { data: parcels = [],refetch:refetchParcels } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup",
      );
      return res.data;
    },
  });
  const { data: riders = [] } = useQuery({
    queryKey: ["riders", selectedParcel?.senderDistrict, "available"],
    enabled: !!selectedParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders?status=approved&district=${selectedParcel.senderDistrict}&workStatus=available`,
      );
      return res.data;
    },
  });

  const openAssignRiderModal = (parcel) => {
    setSelectedParcel(parcel);
    // console.log(parcel.senderDistrict);
    // console.log(parcel);
  };

  // Handle Assign RIder function
  const handleAssignRider = async (rider) => {
    const riderAssignInfo = {
      riderId: rider._id,
      riderEmail: rider.email,
      riderName: rider.name,
      parcelId: selectedParcel._id,
      trackingId: selectedParcel.trackingId,
    };
    const res = await axiosSecure.patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Rider Has Been Assigned",
            icon: "success",
            confirmButtonColor: "#56bd1f",
          });
        }
        refetchParcels();
      });
    setSelectedParcel(null);
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
              <TableHead className="w-[70px]">Cost</TableHead>
              <TableHead className="w-[80px]">createdAt</TableHead>
              <TableHead className="w-[60px]">Pickup District</TableHead>
              <TableHead className="w-[100px]">Delivery Status</TableHead>
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
                <TableCell>{parcel?.cost} Tk/-</TableCell>

                <TableCell className="font-medium">
                  {formatDate(parcel?.createdAt)}
                </TableCell>
                <TableCell>{parcel?.senderDistrict}</TableCell>
                <TableCell>{parcel?.deliveryStatus}</TableCell>
                <TableCell className="text-center flex justify-center items-center">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        onClick={() => openAssignRiderModal(parcel)}
                        className="btn btn-primary"
                      >
                        Assign Rider
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="!max-w-[95vw] md:!max-w-[500px] lg:!max-w-[600px] w-full">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Assign Rider</AlertDialogTitle>
                        <AlertDialogDescription asChild>
                          <div className="overflow-x-auto w-full">
                            <Table className="min-w-[400px]">
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="text-xs md:text-sm">
                                    No.
                                  </TableHead>
                                  <TableHead className="text-xs md:text-sm">
                                    Rider Name
                                  </TableHead>
                                  <TableHead className="text-xs md:text-sm">
                                    Contact
                                  </TableHead>
                                  <TableHead className="text-xs md:text-sm">
                                    Rider Email
                                  </TableHead>
                                  <TableHead className="text-xs md:text-sm">
                                    Action
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {riders?.map((rider, index) => (
                                  <TableRow key={rider._id}>
                                    <TableCell className="text-xs md:text-sm">
                                      {index + 1}
                                    </TableCell>
                                    <TableCell className="text-xs md:text-sm">
                                      {rider?.name}
                                    </TableCell>
                                    <TableCell className="text-xs md:text-sm">
                                      {rider?.contact}
                                    </TableCell>
                                    <TableCell className="text-xs md:text-sm truncate max-w-[100px] md:max-w-none">
                                      {rider?.email}
                                    </TableCell>
                                    <TableCell className="text-xs md:text-sm">
                                      <Button
                                        onClick={() => handleAssignRider(rider)}
                                        className="btn btn-primary"
                                      >
                                        Assign
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default AssignRiders;
