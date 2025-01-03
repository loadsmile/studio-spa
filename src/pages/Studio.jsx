import React from "react";
const Studio = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Nosso Studio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="/images/studio-interior.jpg"
              alt="Interior do studio"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Um espaço pensado para você</h2>
            <p className="text-gray-700">
              Nossa estrutura foi cuidadosamente planejada para proporcionar
              o máximo de conforto e tranquilidade durante sua experiência.
            </p>
            <div className="space-y-4">
              <h3 className="font-bold">Horário de Funcionamento:</h3>
              <p>Segunda a Sábado: 9h às 20h</p>
              <p>Domingo: 10h às 16h</p>
            </div>
            <button className="bg-mila-sage text-white px-8 py-3 rounded-full
              hover:bg-opacity-90 transition duration-300">
              Agendar visita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studio;
