import image1 from "../../../assets/safe-delivery.png"
import image2 from "../../../assets/tiny-deliveryman.png"
import image3 from "../../../assets/customer-top.png"
import image4 from "../../../assets/safe-delivery.png"
const HeroSection = () => {
    const heroData = [
        {image: image1, title: "Live Tracking", description: "Stay updated with the live location of your packages, ensuring you never miss a step. Track your packages in real-time, making sure they reach their destination on time."},
        {image: image2, title: "Fast Delivery", description: "Experience fast and reliable delivery with our service. Our priority is to ensure your packages are delivered on time, every time."},
        {image: image3, title: "Customer Satisfaction", description: "We value your feedback and strive to provide exceptional customer service. Your satisfaction is our top priority."},
        {image: image4, title: "Call Support", description: "Need assistance? Our friendly customer support team is here to help. Reach out to us for any inquiries or concerns."},
    ]
    return (
        <div className="md:m-0 m-2">
            {
                heroData.map((item, index) => <div key={index} className="md:flex items-center justify-between my-6 px-4 md:px-8 py-8 bg-white rounded-[15px]">
                    <div className="w-full md:w-1/4 flex justify-center">
                        <img src={item?.image} alt="image" className="w-48 h-48 md:w-56 md:h-56 object-contain" />
                    </div>
                    <hr />
                    <div className="w-full md:w-3/4">
                        <h1 className="text-3xl font-bold text-left my-4 md:mb-6 text-green-800">{item?.title}</h1>
                        <p className="text-gray-600 text-xl leading-relaxed">{item?.description}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default HeroSection;
