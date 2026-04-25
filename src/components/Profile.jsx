import React, { useState, useContext } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ContactContext } from '../context/ContactContext';

const Profile = () => {
    const context = useContext(ContactContext);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const handleDownloadCV = () => {
        const cvPath = '/CV_MolidNourAwaleh_v4.2.pdf';
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'CV_MolidNourAwaleh_v4.2.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const togglePreview = () => setIsPreviewOpen(prev => !prev);

    return (
        <>
            <section className="py-20 bg-gray-50 mt-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <Card
                                title="À propos de moi"
                                subTitle="Développeur Full Stack"
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
                                    Je suis actuellement à la recherche d'une nouvelle opportunité professionnelle
                                    en CDI à partir de Septembre 2026.
                                </p>
                                <div className="mt-4">
                                    <Button
                                        label="Prévisualiser mon CV"
                                        icon="pi pi-eye"
                                        className="p-button-outlined"
                                        onClick={togglePreview}
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
                visible={isPreviewOpen}
                style={{ width: '80vw' }}
                onHide={togglePreview}
                maximizable
                footer={
                    <div>
                        <Button
                            label="Fermer"
                            icon="pi pi-times"
                            onClick={togglePreview}
                            className="p-button-text"
                        />
                        <Button
                            label="Télécharger"
                            icon="pi pi-download"
                            onClick={handleDownloadCV}
                            autoFocus
                        />
                    </div>
                }
            >
                <iframe
                    src="https://github.com/delmolid/portfolio_Molid_NOURAWALEH/blob/dev/public/CV_MolidNourAwaleh_v4.3.pdf"
                    className="w-full"
                    style={{ height: '70vh' }}
                    title="CV Preview"
                />
            </Dialog>
        </>
    );
};

export default Profile;