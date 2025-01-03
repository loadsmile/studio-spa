import React from 'react';
const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Sobre a MILÂ STUDIO SPA</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-700 mb-6">
              Nosso espaço é um refúgio de tranquilidade, projetado para
              proporcionar uma experiência única de bem-estar e relaxamento.
            </p>
            <p className="text-gray-700 mb-6">
              Combinamos técnicas tradicionais com tecnologias modernas para
              oferecer os melhores tratamentos estéticos e terapêuticos.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/spa-interior.jpg"
              alt="Interior do spa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
