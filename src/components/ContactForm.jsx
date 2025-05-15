import React, { useContext } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { ContactContext } from '../context/ContactContext';

class ContactForm extends React.Component {
    static contextType = ContactContext;

    state = {
        name: '',
        email: '',
        message: '',
        isSubmitting: false,
        submitStatus: null
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ isSubmitting: true });

        try {
            const response = await fetch('https://formspree.io/f/xeoadrap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    message: this.state.message
                })
            });

            if (response.ok) {
                this.setState({
                    submitStatus: 'success',
                    name: '',
                    email: '',
                    message: ''
                });
                
                // Fermer le formulaire après 2 secondes en cas de succès
                setTimeout(() => {
                    this.context.closeContactForm();
                    this.setState({ submitStatus: null });
                }, 2000);
            } else {
                this.setState({ submitStatus: 'error' });
            }
        } catch (error) {
            this.setState({ submitStatus: 'error' });
        } finally {
            this.setState({ isSubmitting: false });
        }
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    renderFooter() {
        return (
            <div>
                <Button 
                    label="Annuler" 
                    icon="pi pi-times" 
                    onClick={() => this.context.closeContactForm()} 
                    className="p-button-text" 
                />
                <Button 
                    label={this.state.isSubmitting ? 'Envoi en cours...' : 'Envoyer'} 
                    icon="pi pi-send" 
                    onClick={this.handleSubmit} 
                    disabled={this.state.isSubmitting}
                    autoFocus 
                />
            </div>
        );
    }

    render() {
        const { isContactFormOpen, closeContactForm } = this.context;
        const { isSubmitting, submitStatus } = this.state;

        return (
            <Dialog 
                header="Me contacter" 
                visible={isContactFormOpen} 
                style={{ width: '50vw' }} 
                onHide={closeContactForm}
                footer={this.renderFooter()}
            >
                <div className="p-fluid">
                    {submitStatus === 'success' && (
                        <div className="p-message p-message-success mb-4">
                            <div className="p-message-wrapper">
                                <span className="p-message-icon pi pi-check"></span>
                                <span className="p-message-text">Message envoyé avec succès !</span>
                            </div>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="p-message p-message-error mb-4">
                            <div className="p-message-wrapper">
                                <span className="p-message-icon pi pi-times"></span>
                                <span className="p-message-text">Une erreur est survenue. Veuillez réessayer.</span>
                            </div>
                        </div>
                    )}

                    <div className="p-field mb-4">
                        <label htmlFor="name" className="font-bold mb-2 block ">Nom complet</label>
                        <InputText className="border-2 border-gray-300 rounded-md p-2"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="p-field mb-4">
                        <label htmlFor="email" className="font-bold mb-2 block  border-gray-300 rounded-md p-2 ">Adresse e-mail</label>
                        <InputText className="border-2 border-gray-300 rounded-md p-2"
                            id="email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="p-field mb-4">
                        <label htmlFor="message" className="font-bold mb-2 block">Votre message</label>
                        <InputTextarea className="border-2 border-gray-300 rounded-md p-2"
                            id="message"
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                            rows={5}
                            required
                        />
                    </div>
                </div>
            </Dialog>
        );
    }
}

export default ContactForm; 