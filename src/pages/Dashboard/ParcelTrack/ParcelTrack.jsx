import { formatDate } from "@/CustomComponents/FormateDate";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import {
  FiCreditCard,
  FiUserCheck,
  FiTruck,
  FiPackage,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

const STATUS_META = {
  "pending-pickup": {
    label: "Payment confirmed",
    sub: "Parcel registered and awaiting pickup",
    Icon: FiCreditCard,
    color: "info",
  },
  driver_assigned: {
    label: "Rider assigned",
    sub: "A rider has been assigned to your parcel",
    Icon: FiUserCheck,
    color: "warning",
  },
  rider_arriving: {
    label: "Rider accepted",
    sub: "Rider is on the way to pick up the parcel",
    Icon: FiTruck,
    color: "warning",
  },
  parcel_picked: {
    label: "Parcel picked up",
    sub: "Parcel collected from sender, in transit",
    Icon: FiPackage,
    color: "warning",
  },
  parcel_delivered: {
    label: "Delivered",
    sub: "Parcel handed to receiver successfully",
    Icon: FiCheckCircle,
    color: "success",
  },
};
const colorMap = {
  info: { dot: "bg-blue-50 border-blue-200", icon: "text-blue-500" },
  warning: { dot: "bg-amber-50 border-amber-200", icon: "text-amber-500" },
  success: { dot: "bg-green-50 border-green-200", icon: "text-green-500" },
  secondary: { dot: "bg-gray-100 border-gray-200", icon: "text-gray-400" },
};
const ParcelTrack = () => {
  const { trackingId } = useParams();
  const axiosInstance = useAxios();
  console.log("trackid", trackingId);
  const { data: trackings = [], isLoading } = useQuery({
    queryKey: ["tracking", trackingId],
    queryFn: async () => {
      const res = await axiosInstance.get(`/trackings/${trackingId}/logs`);
      return res.data;
    },
  });
  console.log(trackings);
  return (
    <div>
      <div>
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-lime-700 md:p-8 p-4 bg-green-100 rounded-4xl">
          Parcel Tracking
        </h1>
      </div>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
              <FiPackage size={14} className="text-gray-400" />
              <span className="font-mono text-sm font-medium text-gray-800 tracking-wide">
                {trackingId}
              </span>
            </div>
            <span className="text-md text-green-600">
              {trackings.length} checkpoints
            </span>
          </div>

          {/* States */}
          {isLoading ? (
            <p className="text-sm text-gray-400">Loading...</p>
          ) : trackings.length === 0 ? (
            <p className="text-sm text-gray-400">
              No tracking information found.
            </p>
          ) : (
            <ol className="relative">
              {trackings.map((log, i) => {
                const isLast = i === trackings.length - 1;
                const meta = STATUS_META[log.status] || {
                  label: log.details,
                  sub: "",
                  Icon: FiPackage,
                  color: "secondary",
                };
                const colors = colorMap[meta.color];
                const { Icon } = meta;

                return (
                  <li key={log._id} className="flex gap-4">
                    {/* Dot + connecting line */}
                    <div className="flex flex-col items-center flex-shrink-0 w-8">
                      <div
                        className={`w-10 h-10 rounded-full border flex items-center justify-center z-10 ${colors.dot}`}
                      >
                        <Icon size={25} className={colors.icon} />
                      </div>
                      {!isLast && (
                        <div className="w-px flex-1 bg-gray-200 mt-1 min-h-7" />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`flex-1 pt-1 ${!isLast ? "pb-7" : ""}`}>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-xl font-semibold text-gray-900">
                          {meta.label}
                        </p>
                        {isLast && (
                          <span className=" font-lg bg-green-50 text-green-600 px-2 py-0.5 rounded-md">
                            Completed
                          </span>
                        )}
                      </div>
                      <p className="text-md text-gray-500 mt-0.5">{meta.sub}</p>
                      <p className=" text-gray-400 mt-1.5 flex items-center gap-1">
                        <FiClock size={11} />
                        {formatDate(log.createdAt)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParcelTrack;
