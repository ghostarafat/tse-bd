import React from "react";

const ClientsSection = () => {
  // Client data array for easy management
  const clients = [
    { name: "MYOB", logo: "https://via.placeholder.com/150?text=myob" },
    { name: "Belimo", logo: "https://via.placeholder.com/150?text=BELIMO" },
    {
      name: "LifeGroups",
      logo: "https://via.placeholder.com/150?text=LifeGroups",
    },
    { name: "Grabyo", logo: "https://via.placeholder.com/150?text=grabyo" },
    { name: "Citrus", logo: "https://via.placeholder.com/150?text=citrus" },
    { name: "Trustly", logo: "https://via.placeholder.com/150?text=Trustly" },
    {
      name: "Oldendorff",
      logo: "https://via.placeholder.com/150?text=oldendorff",
    },
    { name: "Lilly", logo: "https://via.placeholder.com/150?text=Lilly" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 uppercase mb-2">
            CLIENTS
          </h2>
          <div className="w-12 h-0.5 bg-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Some of our valuable clients as follows-
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-l border-t border-gray-200">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
