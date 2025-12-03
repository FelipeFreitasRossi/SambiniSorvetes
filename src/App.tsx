// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Cardapio from './components/Cardapio';
import HorariosLocal from './components/HorariosLocal';
import Contato from './components/Contato';
import Footer from './components/Footer';
import './App.css'; // Estilos do App

const App: React.FC = () => {
  return (
    <div className="sambini-sorvetes-app">
      
      <Header />
      
      <main>
        <Cardapio /> 
        <HorariosLocal />
        <Contato />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;