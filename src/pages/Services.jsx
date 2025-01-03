import React from "react";
const ServicesPage = () => {
  const services = [
    {
      title: "Tratamentos Faciais",
      description: "Limpeza de pele, máscaras, tratamentos anti-idade",
      image: "/images/facial.jpg"
    },
    {
      title: "Massagens",
      description: "Relaxante, terapêutica, drenagem linfática",
      image: "/images/massage.jpg"
    },
    {
      title: "Tratamentos Capilares",
      description: "Hidratação profunda, tratamentos específicos",
      image: "/images/hair.jpg"
    },
    {
      title: "Spa Day",
      description: "Experiência completa de relaxamento",
      image: "/images/spa.jpg"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Nossos Serviços</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-mila-beige/5 rounded-lg overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
                <button className="mt-4 bg-mila-sage text-white px-6 py-2 rounded-full
                  hover:bg-opacity-90 transition duration-300">
                  Saiba mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
