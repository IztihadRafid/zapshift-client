
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const SendParcel = () => {
  

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [serviceCenters, setServiceCenters] = useState([]);
 // fetching data
    useEffect(() => {
        fetch("/data/warehouses.json")
            .then(res => res.json())
            .then(data => {
                setServiceCenters(data)
                
            });
    }, []);

    const regionDuplicate = serviceCenters.map(c => c.region)
    const regions = [...new Set(regionDuplicate)]
    const handleSendParcel = (data) => {
        console.log(data)
    }


    return (
        <div className="bg-white rounded-[15px] p-10 md:p-20 m-2">
            <h1 className="lg:text-5xl text-4xl text-primary font-bold text-left mb-6">Send A Parcel</h1>
            <h2 className="lg:text-3xl md:text-2xl font-bold text-left mb-2">Enter Your Parcel Details</h2>
            <hr />

            <form onSubmit={handleSubmit(handleSendParcel)}>
                {/* Document fields */}
                <div className="flex">
                    <div className="my-6">
                        <label className="mr-2">
                            <input className="mr-2" type="radio" {...register('documentType')} value="document" defaultChecked />
                            Document
                        </label>
                    </div>
                    <div className="my-6">
                        <label className="mr-2">
                            <input className="mr-2" type="radio" {...register('documentType')} value="non-document" />
                            Non-Document
                        </label>
                    </div>
                </div>
                {/* parcel info */}
                <div className="grid grid-cols-1  md:grid-cols-2 gap-6 text-black mb-8">
                    <div>
                        <label className="block mb-1 font-medium">Parcel Name</label>
                        <input
                            {...register("parcelName", { required: true })}
                            type="text"
                            placeholder="Enter Parcel Name"
                            className="w-full px-4 py-2 border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-lime-500"
                        />
                        {errors.parcelName?.type === 'required' && <p className="text-red-500 text-sm font-bold my-1">Parcel Name is required</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Parcel Weight (KG)</label>
                        <input
                            {...register("parcelWeight", { required: true })}
                            type="text"
                            placeholder="Enter Parcel Weight"
                            className="w-full px-4 py-2 border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-lime-500"
                        />
                        {errors.parcelWeight?.type === 'required' && <p className="text-red-500 text-sm font-bold my-1">Parcel Weight is required</p>}
                    </div>
                </div>
                <hr />

                {/* tow columnm */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-black mt-20">

                    {/* Sender */}
                    <div className="lg:border-r lg:pr-6 border-gray-300">
                        <h3 className="text-2xl font-bold mb-8 text-primary">Sender Details</h3>

                        <div className="mb-6">
                            <label className="block mb-1 font-medium">Sender Name</label>
                            <input
                                {...register("senderName", { required: true })}
                                type="text"
                                placeholder="Enter Sender Name"
                                className="w-full px-4 py-2 border rounded-[20px]"
                            />
                            {errors.senderName && <p className="text-red-500 text-sm">Required</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 font-medium">Sender Address</label>
                            <input
                                {...register("senderAddress", { required: true })}
                                type="text"
                                placeholder="Enter Sender Address"
                                className="w-full px-4 py-2 border rounded-[20px]"
                            />
                            {errors.senderAddress && <p className="text-red-500 text-sm">Required</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 font-medium">Sender Contact</label>
                            <input
                                {...register("senderContact", { required: true })}
                                type="number"
                                placeholder="Enter Contact"
                                className="w-full px-4 py-2 border rounded-[20px]"
                            />
                             {errors.senderContact && <p className="text-red-500 text-sm">Required</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 font-medium">Sender Region</label>
                            <select
                                {...register("senderRegion", { required: true })}
                                defaultValue=""
                                className="w-full px-4 py-2 border rounded-[20px]"
                            >
                                <option value="" disabled>Select Region</option>
                                {regions.map(region => (
                                    <option key={region} value={region}>{region}</option>
                                ))}
                            </select>
                            {errors.senderRegion && <p className="text-red-500 text-sm">Required</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 font-medium">Sender District</label>
                            <input
                                {...register("senderDistrict", { required: true })}
                                type="text"
                                placeholder="Enter District"
                                className="w-full px-4 py-2 border rounded-[20px]"
                            />
                            {errors.senderDistrict && <p className="text-red-500 text-sm">Required</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 font-medium">Pickup Instruction</label>
                            <textarea
                                {...register("pickupInstruction")}
                                placeholder="Instruction"
                                className="w-full px-4 py-2 border rounded-[20px]"
                            />
                        </div>
                    </div>

                    {/* Receiver */}
                    <div className="lg:pl-6">
                        <h3 className="text-2xl font-bold mb-8 text-primary">Receiver Details</h3>

                        <div className="mb-6">
                            <label className="block mb-1 font-medium">Receiver Name</label>
                            <input
                                {...register("receiverName", { required: true })}
                                type="text"
                                placeholder="Enter Receiver Name"
                                className="w-full px-4 py-2 border rounded-[20px]"
                            />
                              {errors.receiverName && <p className="text-red-500 text-sm">Required</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 font-medium">Receiver Address</label>
                            <input
                                {...register("receiverAddress", { required: true })}
                                type="text"
                                placeholder="Enter Receiver Address"
                                className="w-full px-4 py-2 border rounded-[20px]"
                            />
                              {errors.receiverAddress && <p className="text-red-500 text-sm">Required</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 font-medium">Receiver Contact</label>
                            <input
                                {...register("receiverContact", { required: true })}
                                type="number"
                                placeholder="Enter Contact"
                                className="w-full px-4 py-2 border rounded-[20px]"
                            />
                             {errors.receiverContact && <p className="text-red-500 text-sm">Required</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 font-medium">Receiver Region</label>
                            <select
                                {...register("receiverRegion", { required: true })}
                                defaultValue=""
                                className="w-full px-4 py-2 border rounded-[20px]"
                            >
                                <option value="" disabled>Select Region</option>
                                {regions.map(region => (
                                    <option key={region} value={region}>{region}</option>
                                ))}
                            </select>
                            {errors.receiverRegion && <p className="text-red-500 text-sm">Required</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 font-medium">Receiver District</label>
                            <input
                                {...register("receiverDistrict", { required: true })}
                                type="text"
                                placeholder="Enter District"
                                className="w-full px-4 py-2 border rounded-[20px]"
                            />
                             {errors.receiverDistrict && <p className="text-red-500 text-sm">Required</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 font-medium">Delivery Instruction</label>
                            <textarea
                                {...register("deliveryInstruction")}
                                placeholder="Instruction"
                                className="w-full px-4 py-2 border rounded-[20px]"
                            />
                        </div>
                    </div>

                </div>

                <input className="bg-primary hover:bg-lime-600 duration-150 text-white px-4 py-2 rounded-[15px] " type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default SendParcel;
