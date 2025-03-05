import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <section className="h-screen space-y-20 items-center text-center">
          <h2 className="text-4xl font-bold">Bienvenue sur mon portfolio</h2>
          <p className="mt-4 text-lg">Je suis Molid NOUR AWALEH, développeur junior passionné.</p>
          <p className="text-xl text-center inline-block">
            Fort de quatre années d'expérience en biologie santé, j'ai entrepris une reconversion vers le développement d'applications, un domaine qui me passionne et qui correspond à ma curiosité pour le développement des applications. Je suis actuellement en quête d'une alternance d'un an dès juin 2024, en contrat de professionnalisation (4 jours en entreprise et 1 jour en formation). Autonome, rigoureux et enthousiaste, je suis déterminé à contribuer activement au succès des projets de votre entreprise tout en consolidant mes compétences.
          </p>

          <section className="btns-container space-y-10 inline-block items-center space-x-80">
            <a href="/" target="_blank" className="bg-rose-200 text-black py-2 px-4 rounded-xl border-black cursor-pointer touch-manipulation">
              Mes Formations
            </a>
            <a href="/" target="_blank" className="bg-cyan-500 text-black py-2 px-4 rounded-xl border-black cursor-pointer touch-manipulation">
              Experiences professionnelles
            </a>
          </section>

          <section id="listes_projets" className="flex space-y-16 space-x-20 text-center font-semibold">
            <h3 className="text-4xl font-bold">Projets</h3>
            <a className="items-center space-x-4" href="https://delmolid.github.io">
              <img
                className="w-96 h-auto border border-gray-400 rounded"
                alt="IMAGE DU PROJET"
                src="https://raw.githubusercontent.com/delmolid/portfolio_Molid_NOURAWALEH/main/output.webp"
              />
              <p>Description</p>
            </a>

            <a className="items-center space-x-4" href="https://github.com/delmolid/Coffee-Menu.git">
              <img 
                className="w-96 h-auto border border-solid border-gray-400" 
                alt="IMAGE DU PROJET"
                src="https://raw.githubusercontent.com/delmolid/Coffee-Menu/refs/heads/main/output.webp"
              />
              <p>Description</p>
            </a>

            <a className="items-center space-x-4" href="https://delmolid.github.io/projet-collectif-nantes-quizz-geo-quizzzz/accueil.html">
              <img 
                className="w-96 h-auto border border-solid border-gray-400" 
                alt="IMAGE DU PROJET"
                src="https://raw.githubusercontent.com/delmolid/portfolio_Molid_NOURAWALEH/refs/heads/main/output.webp"
              />
              <p>Description</p>
            </a>
          </section>
        </section>
      </div>
    );
  }
}

export default Portfolio; 