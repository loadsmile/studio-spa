import React from 'react';
const Studio = () => {
  return (
    <div className="bg-white flex-grow">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <h1 className="text-4xl font-bold mb-6">O Nosso Studio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <img
              src="/images/studio-interior.jpg"
              alt="Interior do studio"
              className="w-full h-[500px] object-cover rounded-2xl shadow-sm"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Um espaço pensado para você</h2>
            <p className="text-gray-700">
              O nosso studio spa foi cuidadosamente planeado para proporcionar
              o máximo de conforto e tranquilidade durante sua experiência.
            </p>
            <div className="space-y-4">
              <h3 className="font-bold">Horário de Funcionamento:</h3>
              <p>Segunda a Sábado: 7h às 21h</p>
              <p>Alguns domingos e feriados também!</p>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=351912030345&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-mila-sage text-white px-8 py-3 rounded-full
                hover:bg-opacity-90 transition duration-300"
            >
              Agendar visita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studio;
