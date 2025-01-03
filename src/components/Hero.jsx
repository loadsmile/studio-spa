import React from 'react';
const Hero = () => {
  return (
    <div className="relative h-screen">
      <img
        src="/images/spa-hero.jpg"
        alt="Spa ambiente"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 max-w-4xl">
          Corpo leve, mente tranquila e amor puro.
        </h1>
        <a
          href="https://api.whatsapp.com/send/?phone=351912030345&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-mila-sage/90 hover:bg-mila-sage px-8 py-3 rounded-full
            transition duration-300 cursor-pointer"
        >
          Agendar uma sessão
        </a>
      </div>
    </div>
  );
}

export default Hero;
