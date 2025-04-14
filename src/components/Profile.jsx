import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-4xl font-bold mb-6">À propos de moi</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Fort de quatre années d'expérience en biologie santé, j'ai entrepris une 
                                reconversion vers le développement d'applications, un domaine qui me passionne 
                                et qui correspond à ma curiosité pour le développement des applications.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                Je suis actuellement en quête d'une alternance d'un an dès juin 2024, 
                                en contrat de professionnalisation (4 jours en entreprise et 1 jour en formation).
                            </p>
                            <div className="flex space-x-4">
                                <a href="/cv" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                                    Télécharger mon CV
                                </a>
                                <a href="/contact" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                                    Me contacter
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <img 
                                src="https://raw.githubusercontent.com/delmolid/portfolio_Molid_NOURAWALEH/7a7254304d429f547aeb450d9a8dcb2b7e79ca28/assets/Image%20CV%20-%20Moyenne_preview_rev_1.JPG" 
                                alt="Molid NOUR AWALEH" 
                                className="rounded-full w-64 h-64 object-cover shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Profile;