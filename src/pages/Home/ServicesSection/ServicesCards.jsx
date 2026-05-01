import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { SiAftership } from "react-icons/si";
import { TbPackage, TbTruckDelivery } from "react-icons/tb";
import { WiDayCloudyGusts } from "react-icons/wi";

const ServicesCards = () => {
    const services = [
        { icon: <TbTruckDelivery />, title: 'Express & Standard Delivery', text: 'From personal packages to business shipments, we have a wide range of services to choose from.' },
        { icon: <TbPackage />, title: 'Package Shipping', text: 'We offer reliable and affordable package shipping services for all your needs.' },
        { icon: <FaShippingFast />, title: 'Pallet Shipping', text: 'Our pallet shipping services are designed for businesses that need to transport large quantities of goods.' },
        { icon: <SiAftership />, title: 'Freight Shipping', text: 'We offer freight shipping services for businesses that need to transport heavy or oversized loads.' },
        { icon: <WiDayCloudyGusts />, title: 'Same-Day Delivery', text: 'Need something delivered quickly? Our same-day delivery service is fast and reliable.' },
        { icon: <GiReturnArrow />, title: 'Return Shipping', text: 'We make it easy to return your packages with our reliable and affordable return shipping services.' },
    ];
    return (
        <div className="bg-gradient-to-br from-[#0d3b36] to-[#0a2e2a] text-white rounded-4xl  shadow-xl lg:p-16 md:p-12 relative overflow-hidden">
            <div className="text-center py-8 max-w-7xl lg:mx-auto">
                <h3 className="text-3xl text-primary text-center font-bold">Our Services</h3>
                <p>Enjoy fast, reliable parcel delivery with real time tracking and zero hassle. From perosnal package to business shipments - We deliver on time, every time.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-7xl mx-auto">
                {services.map((item,idx)=>(
                    <div key={idx} className=" lg:w-96 bg-white p-10 rounded-4xl hover:scale-105 hover:duration-500">
                        <div className="text-4xl text-primary mb-4">{item?.icon}</div>
                        <h3 className="text-xl text-gray-800 font-semibold mb-2">{item?.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item?.text}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ServicesCards;