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
      title: "Tratamentos Capilares",
      image: "/images/hair.jpg",
      alt: "Tratamento capilar"
    },
    {
      title: "Spa Day",
      image: "/images/spa.jpg",
      alt: "Spa day"
    }
  ];

  return (
    <section className="py-16 bg-mila-beige/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
