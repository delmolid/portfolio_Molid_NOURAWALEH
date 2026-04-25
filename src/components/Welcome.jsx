import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Molid Nour Awaleh
          </h1>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Développeur Logiciel
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Développeur issu d'une reconversion, j'ai choisi le développement pour ce qu'il a 
            de concret : comprendre un besoin ou analyser un problème, trouver une solution et 
            la mettre en œuvre. Je recherche un CDI à partir de septembre 2026 dans une équipe 
            où je pourrai continuer à progresser et contribuer concrètement, aussi bien en 
            développement qu'en projet et en maintenance applicative.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Voir mes projets
            </a>
            <a href="#contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50">
              Me contacter
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;