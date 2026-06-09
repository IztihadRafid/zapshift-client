import useAxios from "@/hooks/useAxios";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Truck,
  Package,
  Clock,
  MapPin,
  ShieldCheck,
  Bike,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Parcel Delivery",
    description:
      "Fast and secure parcel delivery with real-time tracking.",
  },
  {
    icon: Bike,
    title: "Express Rider Service",
    description:
      "Quick rider assignment for urgent deliveries across the city.",
  },
  {
    icon: Truck,
    title: "Bulk Shipping",
    description:
      "Efficient logistics solutions for businesses and e-commerce stores.",
  },
  {
    icon: Clock,
    title: "Same Day Delivery",
    description:
      "Deliver packages on the same day with our rapid delivery network.",
  },
  {
    icon: MapPin,
    title: "Live Tracking",
    description:
      "Track every shipment in real time from pickup to delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Handling",
    description:
      "Your packages are protected and handled with maximum care.",
  },
];

export default function ServicesPage() {
    const axiosInstance = useAxios();
    const {data: riders=[],isLoading}=useQuery({
    queryKey:["riders"],
    queryFn: async () => {
        const res = await axiosInstance.get("/riders");
        return res.data;
    }
})
const {data: parcels=[]}=useQuery({
    queryKey:["parcels"],
    queryFn: async () => {
        const res = await axiosInstance.get("/parcels");
        return res.data;
    }
})

// console.log(riders,parcels)
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Fast & Reliable Delivery Services
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering parcels quickly, securely, and efficiently through our
            trusted rider network.
          </p>

          <button className="btn btn-primary mt-8">
            Get Started
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4">
            Everything you need for reliable delivery operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border bg-background p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-muted/40 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="mt-5 text-xl font-semibold">
                Place Order
              </h3>
              <p className="mt-3 text-muted-foreground">
                Create a delivery request within minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="mt-5 text-xl font-semibold">
                Rider Assigned
              </h3>
              <p className="mt-3 text-muted-foreground">
                The nearest available rider gets assigned instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="mt-5 text-xl font-semibold">
                Delivered
              </h3>
              <p className="mt-3 text-muted-foreground">
                Package reaches its destination safely and on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border p-8 text-center">
            <h3 className="text-4xl font-bold">{parcels.length}+</h3>
            <p className="text-muted-foreground mt-2">
              Deliveries
            </p>
          </div>

          <div className="rounded-3xl border p-8 text-center">
            <h3 className="text-4xl font-bold">{riders.length}+</h3>
            <p className="text-muted-foreground mt-2">
              Riders
            </p>
          </div>

          <div className="rounded-3xl border p-8 text-center">
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="text-muted-foreground mt-2">
              Support
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-content py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Ready to Ship Faster?
          </h2>

          <p className="mt-5 text-lg opacity-90">
            Join thousands of customers who trust our delivery network every
            day.
          </p>

          <button className="btn btn-secondary mt-8">
            Book Delivery Now
          </button>
        </div>
      </section>
    </div>
  );
}