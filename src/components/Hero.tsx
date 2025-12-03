// src/components/Hero.tsx
import React from 'react';
// Importação de estilos já configurados em App.css

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-content">
                
                <h1 className="hero-title">
                    Os Melhores Sorvetes Artesanais de São Carlos
                </h1>
                
                <p className="hero-subtitle">
                    Sabores únicos feitos com ingredientes naturais e paixão. Venha se refrescar na Sambini Sorvetes!
                </p>
                
                <a href="#cardapio" className="cta-button hero-cta">
                    Ver Nosso Cardápio Completo 🍦
                </a>

            </div>
        </section>
    );
};

export default Hero;