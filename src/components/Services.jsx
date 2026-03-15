import React from "react";

import { Activity, Radio, Presentation, LayoutGrid } from "lucide-react";

const services = [
  {
    icon: <Activity className="w-10 h-10 text-blue-400" />,
    bgColor: "bg-blue-50",
    title: "Software Development",
    description:
      "We deliver custom software solutions tailored to your business needs, ensuring efficiency, scalability, and innovation. From concept to deployment, our expert developers craft reliable, user-friendly applications that drive growth and streamline operations.",
  },
  {
    icon: <Radio className="w-10 h-10 text-orange-400" />,
    bgColor: "bg-orange-50",
    title: "Web Solution",
    description:
      "Our web solutions include responsive website design, development, and maintenance to enhance your online presence. We create fast, secure, and SEO-friendly websites that engage visitors and boost your brand's digital impact.",
  },
  {
    icon: <Presentation className="w-10 h-10 text-emerald-400" />,
    bgColor: "bg-emerald-50",
    title: "Multimedia Solution",
    description:
      "We provide creative multimedia services like graphic design, video production, and animation to captivate your audience. Our solutions combine technology and artistry to deliver impactful visual storytelling for your brand.",
  },
  {
    icon: <LayoutGrid className="w-10 h-10 text-red-400" />,
    bgColor: "bg-red-50",
    title: "Digital Marketing",
    description:
      "Our digital marketing strategies maximize your reach through SEO, social media, PPC, and content marketing. We help grow your audience, increase conversions, and build lasting customer relationships online.",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Services we offer
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              {/* Circular Icon Area */}
              <div
                className={`flex-shrink-0 w-44 h-44 md:w-52 md:h-52 flex items-center justify-center rounded-full ${service.bgColor} transition-transform duration-300 hover:scale-105 shadow-sm`}
              >
                <div className="transform scale-125">{service.icon}</div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
                  {service.description}
                </p>

                {/* Details Button */}
                <div className="mt-auto">
                  <button className="px-7 py-2.5 bg-red-500 hover:bg-red-700 text-white font-semibold rounded shadow-md transition-all duration-200">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
