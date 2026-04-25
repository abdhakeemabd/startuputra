import { ShieldCheck, Zap, Users } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Team",
      description:
        "Experienced consultants with proven industry knowledge.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Fast Process",
      description:
        "Quick and efficient certification and consulting services.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Trusted Service",
      description:
        "Trusted by businesses across multiple industries.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose Us?</h2>
      <p className="text-gray-500 mb-12 max-w-2xl mx-auto">We deliver quality, speed, and trust to help your business grow with confidence.</p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}