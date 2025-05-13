import React from 'react';
import ContactForm from './ContactForm';

class Profile extends React.Component {
    state = {
        isPreviewOpen: false
    };

    handleDownloadCV = () => {
        // Chemin vers votre fichier CV dans le dossier public
        const cvPath = '/CV_MolidNOURAWALEH_AlternanceADA.pdf';
        
        // Créer un élément <a> temporaire
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'CV_MolidNOURAWALEH_AlternanceADA.pdf'; // Nom du fichier lors du téléchargement
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    togglePreview = () => {
        this.setState(prevState => ({
            isPreviewOpen: !prevState.isPreviewOpen
        }));
    };

    render() {
        return (
            <>
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <h2 className="text-4xl font-bold mb-6">À propos de moi</h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    Fort de cinq années d'expérience en biologie-santé, j'ai entrepris une 
                                    reconversion vers le développement d'applications, un domaine qui me passionne.
                                </p>
                                <p className="text-lg text-gray-600 mb-6">
                                    Je suis actuellement à la recherche d'une alternance d'un an à partir de juin 2025, 
                                    (4 jours en entreprise et 1 jour en formation).
                                </p>
                                <div className="flex space-x-4">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button 
                                            onClick={this.handleDownloadCV}
                                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            Télécharger mon CV
                                        </button>
                                        <button 
                                            onClick={this.togglePreview}
                                            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 flex items-center gap-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                            </svg>
                                            Prévisualiser mon CV
                                        </button>
                                    </div>
                                    <ContactForm />
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

                {/* Modal de prévisualisation */}
                {this.state.isPreviewOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col">
                            <div className="p-4 border-b flex justify-between items-center">
                                <h3 className="text-xl font-semibold">Prévisualisation du CV</h3>
                                <button 
                                    onClick={this.togglePreview}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1 p-4">
                                <iframe
                                    src="/CV_MolidNOURAWALEH_AlternanceADA.pdf"
                                    className="w-full h-full rounded-lg"
                                    title="CV Preview"
                                />
                            </div>
                            <div className="p-4 border-t flex justify-end gap-4">
                                <button 
                                    onClick={this.togglePreview}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                >
                                    Fermer
                                </button>
                                <button 
                                    onClick={this.handleDownloadCV}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Télécharger
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default Profile;