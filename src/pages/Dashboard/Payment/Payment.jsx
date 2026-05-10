import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const Payment = () => {
    const {parcelId}= useParams()
    const axiosSecure = useAxiosSecure();
    const {data:parcel,isLoading} =useQuery({
        queryKey: ['parcels',parcelId],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    })
    if(isLoading){
        return <progress className="progress w-56"></progress>
    }
    const handlePayment=async()=>{
        const paymentInfo={
            cost: parcel?.cost,
            parcelName: parcel?.parcelName,
            parcelId: parcel?._id,
            senderEmail: parcel?.senderEmail,
        }
        const res =  await axiosSecure.post('/create-checkout-session',paymentInfo);
        console.log(res.data)
        window.location.href=res.data.url
    }
    return (
        <div className="p-10">
            <h1>Please Pay {parcel?.cost} for Parcel: {parcel?.parcelName}</h1>
            <button onClick={handlePayment} className="bg-primary px-4 py-2 text-white rounded-4xl">Pay</button>
        </div>
    );
};

export default Payment;