import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Importez les styles PrimeReact
import "primereact/resources/themes/lara-light-indigo/theme.css";  // thème
import "primereact/resources/primereact.min.css";                  // core
import "primeicons/primeicons.css";                                // icônes
import "primeflex/primeflex.css";                                  // PrimeFlex (optionnel)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)