import {
  FaShieldAlt,
  FaLock,
  FaDatabase,
  FaUserSecret,
  FaCookieBite,
  FaCheckCircle,
} from "react-icons/fa";

const policies = [
  {
    icon: <FaDatabase />,
    title: "Information Collection",
    description:
      "We collect only the information necessary to provide delivery, rider assignment, tracking, and account management services.",
  },
  {
    icon: <FaLock />,
    title: "Data Security",
    description:
      "Your information is protected using industry-standard security measures, encryption, and secure authentication systems.",
  },
  {
    icon: <FaUserSecret />,
    title: "Data Sharing",
    description:
      "We do not sell your personal information. Data may be shared only with trusted service providers when necessary.",
  },
  {
    icon: <FaCookieBite />,
    title: "Cookies & Analytics",
    description:
      "Cookies help improve user experience, remember preferences, and analyze platform performance.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <FaShieldAlt className="text-6xl text-primary mx-auto mb-6" />

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-base-content/70">
            We value your privacy and are committed to protecting your personal
            information.
          </p>
        </div>
      </section>

      {/* Policy Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {policies.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-lg border border-base-300 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-primary text-4xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-base-content/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-base-200 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-base-100 rounded-3xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold mb-6">
              Our Commitment
            </h2>

            <p className="text-base-content/70 leading-8">
              We are committed to maintaining transparency regarding how your
              information is collected, stored, and used. Your trust is
              essential to our platform's success.
            </p>

            <div className="mt-8 flex items-center gap-3 text-success">
              <FaCheckCircle />
              <span>
                Your data remains protected and handled responsibly.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;