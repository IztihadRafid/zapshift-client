import { formatDate } from "@/CustomComponents/FormateDate";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FiCheckCircle, FiPackage, FiPhone, FiXCircle } from "react-icons/fi";
import { TbScan } from "react-icons/tb";
import Swal from "sweetalert2";

const AssignedDeliveries = () => {
  const { user, isLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`,
      );
      return res.data;
    },
  });
  const handleDeliveryStatusUpdate = (parcel, status) => {
    const statusInfo = { deliveryStatus: status ,riderId:parcel.riderId, trackingId:parcel.trackingId};
    let message = `Parcel Status Updated to ${status.split("_").join(" ")}`;
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: `${message}`,
            icon: "success",
          });
          refetch();
        }
      });
  };
  return (
    <div>
      <div>
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-lime-700 md:p-8 p-4 bg-green-100 rounded-4xl">
          Assigned Deliveries
        </h1>
        <p className="lg:text-4xl md:text-3xl text-2xl font-bold text-lime-700 md:p-8">
          Total Parcels: {parcels.length}
        </p>
      </div>

      {/* card section */}
      {parcels.length === 0 ? (
        <div className="flex justify-center items-center ">
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <FiPackage size={36} className="mb-2 opacity-40" />
            <p className="text-xl">No Delivery Assigned</p>
          </div>
        </div>
      ) : (
        <div className="p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {parcels.map((parcel) => (
            <div
              key={parcel._id}
              className="overflow-hidden rounded-[15px] border border-gray-200 bg-white"
            >
              {/* Tracking + badges */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-green-50 px-2.5 py-1 font-mono text-xs font-medium text-green-700">
                    <TbScan size={12} />
                    {parcel.trackingId}
                  </span>
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    <span className="rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-800">
                      {parcel.deliveryStatus
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </span>
                    <span className="rounded-md bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-800">
                      {parcel.paymentStatus === "paid" ? "✓ Paid" : "Unpaid"}
                    </span>
                  </div>
                </div>

                {/* Parcel info */}
                <p className="text-base font-semibold text-gray-900">
                  {parcel.parcelName}
                </p>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="text-xs text-gray-500">
                    {parcel.parcelWeight} kg
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-xs text-gray-500">
                    {parcel.documentType}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-800">
                    ৳ {parcel.cost}
                  </span>
                </div>

                <hr className="my-3 border-gray-100" />

                {/* Route */}
                <div className="flex gap-3">
                  <div className="flex flex-col items-center pt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <div className="w-px flex-1 min-h-6 bg-gray-200 my-1" />
                    <div className="w-2 h-2 rounded-full bg-green-600" />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div>
                      <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-0.5">
                        Pickup from
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {parcel.senderName}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {parcel.senderAddress}, {parcel.senderDistrict},{" "}
                        {parcel.senderRegion}
                      </p>
                      <a
                        href={`tel:${parcel.senderContact}`}
                        className="inline-flex items-center gap-1 text-xs text-blue-600 mt-1"
                      >
                        <FiPhone size={11} /> {parcel.senderContact}
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-0.5">
                        Deliver to
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {parcel.receiverName}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {parcel.receiverAddress}, {parcel.receiverDistrict},{" "}
                        {parcel.receiverRegion}
                      </p>
                      <a
                        href={`tel:${parcel.receiverContact}`}
                        className="inline-flex items-center gap-1 text-xs text-blue-600 mt-1"
                      >
                        <FiPhone size={11} /> {parcel.receiverContact}
                      </a>
                    </div>
                  </div>
                </div>

                <hr className="my-3 border-gray-100" />

                {/* Extra details */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[11px] text-gray-400 mb-0.5">
                      Pickup instruction
                    </p>
                    <p className="text-xs font-medium text-gray-800">
                      {parcel.pickupInstruction || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 mb-0.5">
                      Delivery instruction
                    </p>
                    <p className="text-xs font-medium text-gray-800">
                      {parcel.deliveryInstruction || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 mb-0.5">
                      Sender email
                    </p>
                    <p className="text-xs font-medium text-gray-800 break-all">
                      {parcel.senderEmail}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 mb-0.5">
                      Receiver email
                    </p>
                    <p className="text-xs font-medium text-gray-800 break-all">
                      {parcel.receiverEmail}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 mb-0.5">Rider</p>
                    <p className="text-xs font-medium text-gray-800">
                      {parcel.riderName}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 mb-0.5">
                      Created at
                    </p>
                    <p className="text-xs font-medium text-gray-800">
                      {formatDate(parcel.createdAt)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Accept / Reject buttons */}
              <div className="border-t border-gray-100 flex flex-col gap-2">
                {/*  Accept */}
                {parcel.deliveryStatus === "driver_assigned" ? (
                  <button
                    onClick={() =>
                      handleDeliveryStatusUpdate(parcel, "rider_arriving")
                    }
                    className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold text-white bg-primary hover:bg-green-800 transition-colors"
                  >
                    <FiCheckCircle size={15} /> Accept
                  </button>
                ) : (
                  <p className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold bg-green-900 text-white">
                    <FiCheckCircle size={15} /> Accepted
                  </p>
                )}

                {/*  Mark as Picked Up */}
                {parcel.deliveryStatus === "rider_arriving" ? (
                  <button
                    onClick={() =>
                      handleDeliveryStatusUpdate(parcel, "parcel_picked")
                    }
                    className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold text-white bg-primary hover:bg-green-800 transition-colors"
                  >
                    <FiXCircle size={15} /> Mark As Picked Up
                  </button>
                ) : parcel.deliveryStatus === "parcel_picked" ||
                  parcel.deliveryStatus === "parcel_delivered" ? (
                  <p className="flex items-center justify-center gap-1.5  py-3 text-sm font-semibold bg-green-900 text-white">
                    <FiCheckCircle size={15} /> Picked Up
                  </p>
                ) : (
                  <p className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold bg-gray-200 text-gray-400">
                    <FiXCircle size={15} /> Mark As Picked Up
                  </p>
                )}

                {/* Mark as Delivered */}
                {parcel.deliveryStatus === "parcel_picked" ? (
                  <button
                    onClick={() =>
                      handleDeliveryStatusUpdate(parcel, "parcel_delivered")
                    }
                    className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold text-white bg-primary hover:bg-green-800 transition-colors"
                  >
                    <FiXCircle size={15} /> Mark As Delivered
                  </button>
                ) : parcel.deliveryStatus === "parcel_delivered" ? (
                  <p className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold bg-green-900 text-white">
                    <FiCheckCircle size={15} /> Delivered
                  </p>
                ) : (
                  <p className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold bg-gray-200 text-gray-400">
                    <FiXCircle size={15} /> Mark As Delivered
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssignedDeliveries;
