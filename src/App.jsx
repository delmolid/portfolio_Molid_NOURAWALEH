import React from 'react'
import Portfolio from './components/Portfolio'
import Welcome from './components/Welcome'
import Header from './components/Header'
import Profile from './components/Profile'
import ContactForm from './components/ContactForm'
import { ContactProvider } from './context/ContactContext'

function App() {
  return (
    <ContactProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Profile />
          <Portfolio />
          <ContactForm />
        </main>
      </div>
    </ContactProvider>
  )
}

export default App