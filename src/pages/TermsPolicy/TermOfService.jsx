import {
  FaFileContract,
  FaUserShield,
  FaTruck,
  FaBan,
  FaExclamationTriangle,
} from "react-icons/fa";

const sections = [
  {
    icon: <FaUserShield size={24} />,
    title: "User Responsibilities",
    content:
      "Users must provide accurate information when creating delivery requests. Any misuse of the platform may result in account suspension.",
  },
  {
    icon: <FaTruck size={24} />,
    title: "Delivery Services",
    content:
      "We facilitate parcel delivery through independent riders. Delivery times are estimates and may vary depending on traffic, weather, and operational conditions.",
  },
  {
    icon: <FaBan size={24} />,
    title: "Prohibited Items",
    content:
      "Users may not ship illegal, hazardous, explosive, or restricted goods through our platform.",
  },
  {
    icon: <FaExclamationTriangle size={24} />,
    title: "Limitation of Liability",
    content:
      "We are not liable for delays caused by external factors beyond our control. Compensation policies may apply under specific circumstances.",
  },
];

export default function TermOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FaFileContract
            className="mx-auto text-primary mb-6"
            size={60}
          />

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Terms of Service
          </h1>

          <p className="text-base-content/70 max-w-2xl mx-auto">
            Please read these terms carefully before using our delivery
            platform and services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-3xl shadow-lg border border-base-300 p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-primary">{item.icon}</div>

                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>
              </div>

              <p className="text-base-content/70 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Section */}
        <div className="mt-10 bg-primary/10 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Changes to Terms
          </h2>

          <p className="text-base-content/70 leading-relaxed">
            We reserve the right to modify these Terms of Service at any
            time. Continued use of the platform after updates constitutes
            acceptance of the revised terms.
          </p>
        </div>
      </section>
    </div>
  );
}