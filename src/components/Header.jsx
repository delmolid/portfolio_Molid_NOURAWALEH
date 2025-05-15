import React, { useContext } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { ContactContext } from '../context/ContactContext';

const Header = () => {
    const { openContactForm } = useContext(ContactContext);
    
    const handleDownloadCV = () => {
        const cvPath = '/CV_MolidNOURAWALEH_AlternanceADA.pdf';
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'CV_MolidNOURAWALEH_AlternanceADA.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    const items = [
        {
            label: 'Accueil',
            icon: 'pi pi-fw pi-home',
            url: 'index.html'
        },
        {
            label: 'Projets',
            icon: 'pi pi-fw pi-briefcase',
            url: '#projects'
        },
        {
            label: 'Compétences',
            icon: 'pi pi-fw pi-star',
            url: '#skills'
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-envelope',
            command: () => openContactForm()
        }
    ];

    const end = (
        <Button 
            label="CV" 
            icon="pi pi-download" 
            className="p-button-outlined" 
            onClick={handleDownloadCV}
        />
    );

    return (
        <header className="fixed top-0 right-0 w-full shadow-md z-50">
            <div className="container mx-auto">
                <Menubar model={items} end={end} />
            </div>
        </header>
    );
};

export default Header;