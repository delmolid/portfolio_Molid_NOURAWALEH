import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold mb-8 text-gray-900">
            Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Développeur Web Junior passionné par la création d'applications web modernes et intuitives
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