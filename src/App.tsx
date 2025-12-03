// src/App.tsx (Atualizado)
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero'; // NOVO!
import About from './components/About'; // NOVO!
import Cardapio from './components/Cardapio'; 
import HorariosLocal from './components/HorariosLocal';
import Contato from './components/Contato';
import Footer from './components/Footer';
import './App.css'; 

const App: React.FC = () => {
  return (
    <div className="sambini-sorvetes-app">
      
      <Header />
      
      <main>
        <Hero /> {/* NOVO! */}
        <About /> {/* NOVO! */}
        <Cardapio /> 
        <HorariosLocal />
        <Contato />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;