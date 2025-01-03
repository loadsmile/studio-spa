import React from 'react';
const About = () => {
  return (
    <div className="bg-white flex-grow">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <h1 className="text-4xl font-bold mb-6">Sobre a MILÂ STUDIO SPA</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <p className="text-gray-700 mb-6">
              O nosso espaço é um refúgio de tranquilidade, projetado para
              proporcionar uma experiência única de bem-estar e relaxamento.
            </p>
            <p className="text-gray-700 mb-6">
              Combinamos técnicas tradicionais com tecnologias modernas para
              oferecer os melhores tratamentos estéticos e terapêuticos.
            </p>
            <p className="text-gray-700">
              Proporcionamos uma experiência única de Head Spa, um tratamento inspirado em técnicas milenares de massagem oriental que surgiu no Japão há cerca de 20 anos como uma terapia para reduzir tensão muscular e stress acumulado. Através de movimentos capilares e da aplicação de pontos de pressão estratégicos na cabeça, proporciona uma sensação de relaxamento instantâneo.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-[500px]">
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
