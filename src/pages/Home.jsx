import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';  // Make sure this points to the component version
import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Welcome />
      <Services />  {/* This will render the grid view */}
      <Reviews />
    </div>
  );
}

const Welcome = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Bem-vindo à MILÂ STUDIO SPA</h2>
        <p className="text-gray-700">
          Nosso espaço é um refúgio de tranquilidade. Aqui, você encontra tratamentos faciais,
          corporais e capilares que promovem a saúde e a beleza de dentro para fora. Além disso,
          temos uma linha exclusiva de produtos naturais para cuidados diários.
        </p>
      </div>
    </section>
  );
}

export default Home;
