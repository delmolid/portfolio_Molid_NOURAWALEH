import React from 'react';

class ContactForm extends React.Component {
    state = {
        isOpen: false,
        name: '',
        email: '',
        message: '',
        isSubmitting: false,
        submitStatus: null
    };

    toggleModal = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
            submitStatus: null
        }));
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

    render() {
        const { isOpen, isSubmitting, submitStatus } = this.state;

        return (
            <>
                <button
                    onClick={this.toggleModal}
                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
                >
                    Me contacter
                </button>

                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg w-full max-w-md">
                            <div className="p-4 border-b flex justify-between items-center">
                                <h3 className="text-xl font-semibold">Me contacter</h3>
                                <button 
                                    onClick={this.toggleModal}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={this.handleSubmit} className="p-6">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 mb-2">Nom complet</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 mb-2">Adresse e-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 mb-2">Votre message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={this.state.message}
                                        onChange={this.handleChange}
                                        rows="4"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                                        Message envoyé avec succès !
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                                        Une erreur est survenue. Veuillez réessayer.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default ContactForm; 