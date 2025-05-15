import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    const openContactForm = () => {
        setIsContactFormOpen(true);
    };

    const closeContactForm = () => {
        setIsContactFormOpen(false);
    };

    return (
        <ContactContext.Provider value={{ isContactFormOpen, openContactForm, closeContactForm }}>
            {children}
        </ContactContext.Provider>
    );
}; 
export default ContactContext;