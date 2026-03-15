import React from "react";
import { Calendar, Code, Layout, TrendingUp } from "lucide-react"; // Lucide icons bebohar kora hoyeche

const AboutTSE = () => {
  const stats = [
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: "EST 2014",
      desc: "Years of excellence in the digital world.",
    },
    {
      icon: <Code className="w-8 h-8 text-green-600" />,
      title: "Custom Software",
      desc: "Scalable and efficient business solutions.",
    },
    {
      icon: <Layout className="w-8 h-8 text-green-600" />,
      title: "Brand Design",
      desc: "Graphic design, logo, and brand identity.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Marketplace & SEO",
      desc: "Optimizing your digital presence and growth.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About TSE</h2>
          <p className="text-gray-500 italic mb-8 text-lg">
            "The ones who are crazy enough to think they can change the world,
            are the ones that do."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
            {stats.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 bg-green-50 rounded-lg">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image/Bio Side */}
        <div className="w-full md:w-1/2 relative">
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
            {/* Ekhane apnar image-ti boshate paren */}
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
              alt="TSE Specialist"
              className="w-full h-auto object-cover opacity-90"
            />
          </div>
        </div>
      </div>

      {/* Bottom Description Section */}
      <div className="max-w-6xl mx-auto mt-12 text-gray-600 leading-relaxed border-t pt-8">
        <p>
          At <strong>The Software Engineers</strong>, we are passionate about
          delivering innovative and tailored solutions to help businesses thrive
          in the digital world. Beyond software, we offer a wide range of
          services including graphic design, video editing, and marketplace
          management.
        </p>
      </div>
    </section>
  );
};

export default AboutTSE;
