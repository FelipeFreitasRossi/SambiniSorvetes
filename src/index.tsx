// src/index.tsx

import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './index.css'; // Estilo global
import App from './App'; 

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Elemento com ID "root" não encontrado. O React não pode ser inicializado.');
}