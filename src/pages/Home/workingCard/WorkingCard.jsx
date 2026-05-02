import { BsCashCoin } from "react-icons/bs";
import { MdCorporateFare } from "react-icons/md";
import { SiFlathub } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";


const WorkingCard = () => {
    const workCard =[
        {icon:<TbTruckDelivery />,title:'Booking Pick Drop',text:'From personal packages to business shipments, we have a wide range of services to choose from.'},
        {icon:<BsCashCoin />,title:'Cash On Delivery',text:'From personal packages to business shipments, we have a wide range of services to choose from.'},
        {icon:<SiFlathub />,title:'Delivery Hub',text:'From personal packages to business shipments, we have a wide range of services to choose from.'},
        {icon:<MdCorporateFare />,title:'Booking SME & Corporate',text:'From personal packages to business shipments, we have a wide range of services to choose from.'},
    ]
    return (
        <div className=" mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-left mb-12 text-green-800">How It Works</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {workCard.map((item,index)=>(
                        <div key={index} className="bg-white  p-10 rounded-4xl hover:shadow-lg hover:scale-105 transition-shadow duration-500">
                            <div className="text-4xl text-primary mb-4">{item?.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item?.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item?.text}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default WorkingCard;