import { Button } from "@/components/ui/button";
import headerImage from "../../../assets/be-a-merchant-bg.png"
import rightImage from "../../../assets/location-merchant.png"

const MarchantSection = () => {
    return (
        <div className=" bg-gradient-to-br from-[#0d3b36] to-[#0a2e2a] text-white shadow-xl p-8 md:p-12 lg:mt-12 m-2 md:m-0 relative overflow-hidden rounded-[15px] lg:h-[500px]">
            <div className="absolute top-0 left-0 w-full">
                <img src={headerImage} alt="headerImage" className="w-full block" />
            </div>
            <div className="relative z-10 lg:mt-16 flex flex-col md:flex-row items-center justify-between">
                <div>
                    <h5 className="text-4xl font-bold text-white p-2 lg:pb-6">Merchant and Customer Satisfaction is Our First Priority.</h5>
                    <p className="text-lg text-gray-400 p-2 lg:pb-4">We Offer the lowest delivery charge with the highest value along with a wide range of services. Courier Services are available for all major cities.</p>
                    <div>
                        <Button className="rounded-full p-6 text-black font-bold text-lg md:mb-0 mb-3">Be a Merchant</Button>
                        <Button className="rounded-full p-6 text-black font-bold text-lg">Earn with ZapShift Courier</Button>
                    </div>
                </div>
                <div>
                    <img src={rightImage} alt="image for right content" />
                </div>
            </div>
        </div>
    );
};

export default MarchantSection;
