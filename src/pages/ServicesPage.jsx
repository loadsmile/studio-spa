import React from "react";
const ServicesPage = () => {
  const services = [
    {
      title: "Massagens",
      description: "Oferecemos diversos tipos de massagens especializadas:",
      types: [
        {
          name: "Massagem Relaxante",
          info: "Libera ocitocina, combate tensão muscular, auxilia fluxo intestinal e diminui estresse. Promove relaxamento profundo e diminui dores musculares."
        },
        {
          name: "Massagem Terapêutica",
          info: "Indicada para dores musculares, contraturas e alívio de dores posturais. Pressão mais forte focada em necessidades específicas."
        },
        {
          name: "Massagem Modeladora",
          info: "Movimentos intensos e profundos para reorganizar camadas de gordura e harmonizar contornos corporais."
        },
        {
          name: "Massagem Gestacional",
          info: "Recomendada após 12 semanas de gestação. Combina drenagem linfática com foco em lombar e ciático."
        },
        {
          name: "Drenagem Linfática",
          info: "Combate inchaço e celulite, melhora circulação e elimina toxinas com movimentos suaves e rítmicos."
        },
        {
          name: "Ventosa Terapêutica",
          info: "Tratamento com ventosas para melhorar circulação sanguínea e oxigenação dos tecidos."
        },
        {
          name: "Terapia com Pedras Quentes",
          info: "Massagem relaxante combinando movimentos manuais com pedras quentes para acalmar mente e corpo."
        },
        {
          name: "Reflexologia com SPA dos Pés",
          info: "Massagem em pontos específicos dos pés combinada com esfoliação, máscara de argila e hidratação."
        }
      ],
      prices: [
        { duration: "40min", price: "39€" },
        { duration: "60min", price: "49€" },
        { duration: "80min", price: "59€" }
      ],
      image: "/images/massage.jpg"
    },
    {
      title: "Limpeza de Pele Facial",
      description: "Um dos tratamentos estéticos mais realizados no mundo! A limpeza de pele tem como objetivo remover os cravos e as impurezas, desobstruir os poros e melhorar a capacidade de absorção da pele. Inclui: Higienização, Vapor de ozônio, Esfoliação, Extração de cravos, Máscara, Hidratação facial e labial, Protetor solar.",
      prices: [
        { duration: "60min", price: "65€" },
        { duration: "90min", price: "85€" }
      ],
      image: "/images/facial.jpg"
    },
    {
      title: "Head Spa Shu Uemura",
      description: "A técnica surgiu no Japão e é popular em outros países asiáticos. Consiste em massagens ao couro cabeludo que uniram o tratamento capilar e um ambiente relaxante em prol do bem-estar. Deitada em uma maca, a pessoa recebe um tratamento de SPA com a melhor máscara hidratante da linha Shu Uemura!",
      prices: [
        { duration: "30min", price: "49€", subtitle: "Experiência Head Spa" },
        { duration: "60min", price: "69€", subtitle: "Experiência Head Spa + Facial" },
        { duration: "90min", price: "89€", subtitle: "Experiência Head Spa + Facial + Massagem" }
      ],
      image: "/images/hair.jpg"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Os Nossos Serviços</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-mila-beige/5 rounded-2xl overflow-hidden shadow-sm">
              <div className="aspect-w-16 aspect-h-9 rounded-t-2xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>

                {service.types && (
                  <div className="mb-4 space-y-3">
                    {service.types.map((type, idx) => (
                      <div key={idx} className="border-b border-gray-200 pb-2">
                        <h4 className="font-semibold text-mila-sage">{type.name}</h4>
                        <p className="text-sm text-gray-600">{type.info}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-2">
                  {service.prices.map((price, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-gray-200 py-2">
                      <div>
                        <span className="font-medium">{price.duration}</span>
                        {price.subtitle && (
                          <p className="text-sm text-gray-600">{price.subtitle}</p>
                        )}
                      </div>
                      <span className="font-bold text-mila-sage">{price.price}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://api.whatsapp.com/send/?phone=351912030345&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-mila-sage text-white px-6 py-2 rounded-full
                    hover:bg-opacity-90 transition duration-300 inline-block"
                >
                  Agendar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
