import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ContactContext } from '../context/ContactContext';

class Profile extends React.Component {
    static contextType = ContactContext;

    state = {
        isPreviewOpen: false
    };

    handleDownloadCV = () => {
        const cvPath = '/CV_MolidNOURAWALEH_AlternanceCDA.pdf';
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'CV_MolidNOURAWALEH_AlternanceCDA.pdf';
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
                <section className="py-20 bg-gray-50 mt-16">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Card 
                                    title="À propos de moi" 
                                    subTitle="Apprenant Développeur Full Stack" 
                                    className="shadow-lg"
                                >
                                    <div className="flex items-center mb-6">
                                        <p className="text-xl text-gray-600 mr-4">Retrouvez-moi sur :</p>
                                        <div className="flex space-x-6">
                                            <a 
                                                href="https://www.linkedin.com/in/molidnourawaleh/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="transform hover:scale-110 transition-transform duration-300"
                                            >
                                                <img 
                                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                                                    alt="LinkedIn" 
                                                    className="w-10 h-10"
                                                />
                                            </a>
                                            <a 
                                                href="https://github.com/delmolid" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="transform hover:scale-110 transition-transform duration-300"
                                            >
                                                <img 
                                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                                                    alt="GitHub" 
                                                    className="w-10 h-10"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <p className="m-0">
                                        Fort de cinq années d'expérience en biologie-santé, j'ai entrepris une 
                                        reconversion vers le développement d'applications, un domaine qui me passionne.
                                    </p>
                                    <p className="mt-3">
                                        Je suis actuellement à la recherche d'une alternance d'un an à partir de juin 2025, 
                                        (4 jours en entreprise et 1 jour en formation).
                                    </p>
                                    <div className="mt-4">
                                        <Button 
                                            label="Prévisualiser mon CV" 
                                            icon="pi pi-eye" 
                                            className="p-button-outlined" 
                                            onClick={this.togglePreview} 
                                        />
                                    </div>
                                </Card>
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

                <Dialog 
                    header="Prévisualisation du CV" 
                    visible={this.state.isPreviewOpen} 
                    style={{ width: '80vw' }} 
                    onHide={this.togglePreview}
                    maximizable
                    footer={
                        <div>
                            <Button label="Fermer" icon="pi pi-times" onClick={this.togglePreview} className="p-button-text" />
                            <Button label="Télécharger" icon="pi pi-download" onClick={this.handleDownloadCV} autoFocus />
                        </div>
                    }
                >
                    <iframe
                        src="/CV_MolidNOURAWALEH_AlternanceCDA.pdf"
                        className="w-full"
                        style={{ height: '70vh' }}
                        title="CV Preview"
                    />
                </Dialog>
            </>
        );
    }
}

export default Profile;