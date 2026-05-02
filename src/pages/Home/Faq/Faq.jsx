import { useState } from "react";

const faqData = [
  {
    question: "How does ZapShift delivery system work?",
    answer:
      "ZapShift is a real-time delivery platform where users can place orders through the app or website. Once an order is confirmed, our system automatically finds the nearest available delivery rider using location-based matching. The rider then picks up the parcel from the sender and delivers it to the receiver with live tracking updates. Throughout the entire process, users can monitor the delivery status in real time, ensuring transparency and reliability."
  },
  {
    question: "Can I track my delivery in real time?",
    answer:
      "Yes, ZapShift provides full real-time tracking for every delivery. After your order is assigned to a rider, you will receive a tracking ID. Using this ID, you can see live updates such as when the parcel is picked up, the rider’s current location, estimated arrival time, and final delivery confirmation. This ensures complete visibility and peace of mind throughout the delivery journey."
  },
  {
    question: "How long does delivery usually take?",
    answer:
      "Delivery time depends on several factors including distance, traffic conditions, weather, and rider availability. However, most deliveries within city limits are completed within 30 to 90 minutes. For longer distances or high-demand hours, it may take slightly more time. Our smart routing system always tries to select the fastest and most efficient path for every delivery."
  },
  {
    question: "What happens if my parcel is delayed?",
    answer:
      "If your delivery is delayed due to unexpected issues like traffic, weather conditions, or operational challenges, you will receive instant notifications through the platform. Additionally, our support team actively monitors delayed orders and works to resolve them as quickly as possible. You can also contact customer support at any time for live assistance regarding your parcel status."
  },
  {
    question: "Is my parcel safe during delivery?",
    answer:
      "Absolutely. At ZapShift, parcel safety is our top priority. All riders go through strict verification before joining the platform. In addition, each delivery is tracked in real time, reducing the risk of loss or misplacement. We also ensure secure handling procedures so that your items reach the destination safely and in the same condition they were sent."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 ">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 rounded-[15px]">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border  bg-white shadow-sm overflow-hidden rounded-[15px]"
          >
            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="font-medium text-gray-800">
                {item.question}
              </span>

              <span
                className={`text-2xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>

            {/* Answer */}
            <div
              className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100 pb-5"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;