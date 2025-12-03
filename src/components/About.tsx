// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="sobre" className="about-section">
            <div className="container about-content">
                
                <h2>✨ Nossa História</h2>

                <div className="about-details">
                    <p>
                        A Sambini Sorvetes nasceu em São Carlos com o sonho de resgatar o sabor autêntico do sorvete artesanal.
                        Desde 2025, transformamos ingredientes frescos e selecionados em experiências inesquecíveis.
                    </p>
                    <p>
                        **O que nos torna especiais?** Nossa produção é 100% artesanal, sem adição de conservantes ou gorduras hidrogenadas. Utilizamos frutas da estação e o melhor leite fresco, garantindo cremosidade e sabor incomparáveis em cada colherada.
                    </p>
                    <div className="about-cta">
                        <a href="#contato" className="cta-button">Fale Conosco</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;