import deliveryMan from "@/assets/big-deliveryman.png";
import { FaRegHandshake } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";
import { TbPackage, TbRoute, TbTruckDelivery, TbUserCheck } from "react-icons/tb";

const AboutUs = () => {
    const processSteps = [
        {
            icon: <TbPackage />,
            title: "Book Your Parcel",
            text: "Place a delivery request with pickup, receiver, and parcel details in a few simple steps.",
        },
        {
            icon: <TbUserCheck />,
            title: "Rider Picks Up",
            text: "A verified ZapShift rider arrives at your pickup location and collects your parcel safely.",
        },
        {
            icon: <TbTruckDelivery />,
            title: "Secure Delivery",
            text: "Your parcel is transported with care and delivered to the receiver on time.",
        },
    ];

    const benefits = [
        { icon: <TbTruckDelivery />, title: "Fast Delivery", text: "Quick pickup and on-time drop-off for personal and business parcels." },
        { icon: <TbUserCheck />, title: "Verified Riders", text: "Reliable delivery partners who handle every parcel with responsibility." },
        { icon: <MdOutlineSecurity />, title: "Secure Handling", text: "Careful parcel management from pickup until final delivery." },
        { icon: <FiMapPin />, title: "Live Tracking", text: "Stay informed with transparent delivery status and tracking support." },
    ];

    return (
        <div className="bg-gray-50 px-4 py-10 md:px-8 lg:py-16 rounded-[15px]">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                    <span className="inline-flex rounded-[20px] bg-primary/15 px-4 py-2 text-sm font-semibold text-green-800">
                        About ZapShift Parcel Delivery
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-green-900">
                        Fast, safe, and reliable delivery for every parcel.
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed text-gray-600">
                        Welcome to ZapShift Parcel Delivery, your trusted partner for modern logistics. We make parcel delivery simple, efficient, and stress-free for individuals, merchants, and growing businesses.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-gray-600">
                        Whether you are sending a personal package or managing business shipments, our team helps your parcel reach its destination securely, transparently, and on time.
                    </p>

                    <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                        <div className="rounded-[15px] bg-white p-4 text-center shadow-sm">
                            <p className="text-2xl font-bold text-primary">24/7</p>
                            <p className="text-xs sm:text-sm text-gray-500">Support</p>
                        </div>
                        <div className="rounded-[15px] bg-white p-4 text-center shadow-sm">
                            <p className="text-2xl font-bold text-primary">Fast</p>
                            <p className="text-xs sm:text-sm text-gray-500">Pickup</p>
                        </div>
                        <div className="rounded-[15px] bg-white p-4 text-center shadow-sm">
                            <p className="text-2xl font-bold text-primary">Safe</p>
                            <p className="text-xs sm:text-sm text-gray-500">Parcel Care</p>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-[15px] bg-gradient-to-br from-[#0d3b36] to-[#0a2e2a] p-6 shadow-[0_22px_45px_rgba(132,204,22,0.22)]">
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(135deg,rgba(132,204,22,0.28)_25%,transparent_25%),linear-gradient(225deg,rgba(101,163,13,0.28)_25%,transparent_25%)] bg-[length:42px_42px]" />
                    <img src={deliveryMan} alt="ZapShift delivery rider" className="relative z-10 mx-auto max-h-[390px] w-full object-contain" />
                </div>
            </section>

            {/* Process Section */}
            <section className="max-w-7xl mx-auto py-14 md:py-20">
                <div className="mb-8 max-w-2xl">
                    <h2 className="text-3xl font-bold text-green-900">How We Deliver</h2>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Our process is straightforward from the moment you request delivery until the parcel reaches the receiver.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {processSteps.map((step, index) => (
                        <div key={index} className="rounded-[15px] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[15px] bg-primary/15 text-4xl text-primary">
                                {step.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-900">{step.title}</h3>
                            <p className="text-sm leading-relaxed text-gray-600">{step.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="max-w-7xl mx-auto rounded-[15px] bg-white p-6 shadow-sm md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-green-900">Why Choose Us?</h2>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            ZapShift combines speed, verified riders, secure parcel handling, and an easy booking experience so delivery feels dependable every time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:col-span-2">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="rounded-[15px] border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:border-primary/40 hover:bg-primary/5">
                                <div className="mb-4 text-4xl text-primary">{benefit.icon}</div>
                                <h3 className="mb-2 text-lg font-bold text-gray-900">{benefit.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-600">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="max-w-7xl mx-auto mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-[15px] bg-gradient-to-br from-[#0d3b36] to-[#0a2e2a] p-8 text-white shadow-xl md:p-10">
                    <div className="mb-5 text-5xl text-primary">
                        <FaRegHandshake />
                    </div>
                    <h2 className="mb-4 text-3xl font-bold">Built On Trust</h2>
                    <p className="leading-relaxed text-gray-300">
                        At ZapShift, delivery is not only about moving parcels. It is about building trust between sender and receiver through clear communication, careful handling, and dependable service.
                    </p>
                </div>

                <div className="rounded-[15px] bg-primary/15 p-8 md:p-10">
                    <div className="mb-5 text-5xl text-green-800">
                        <TbRoute />
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-green-900">Our Mission</h2>
                    <p className="leading-relaxed text-gray-700">
                        Our mission is to connect people and businesses through a reliable delivery network that saves time, reduces hassle, and gives every customer confidence from pickup to delivery.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;


