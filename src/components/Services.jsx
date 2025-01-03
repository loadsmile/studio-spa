import React from "react";
const Services = () => {
  const services = [
    {
      title: "Tratamentos Faciais",
      image: "/images/facial.jpg",
      alt: "Tratamento facial"
    },
    {
      title: "Massagens",
      image: "/images/massage.jpg",
      alt: "Massagem relaxante"
    },
    {
      title: "Head Spa",
      image: "/images/hair.jpg",
      alt: "Head Spa"
    }
  ];

  return (
    <section className="py-16 bg-mila-beige/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">O que oferecemos:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <div className="text-center mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
