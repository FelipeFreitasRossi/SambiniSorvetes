// src/components/HorariosLocal.tsx
import React, { useState, useEffect } from 'react';
import { HORARIOS_LOJA, ENDERECO_LOJA } from '../data/horarios';
import { verificarStatusLoja } from '../utils/horarioUtils';
import { HorarioDia } from '../types/Produto';
import '../App.css';

const HorariosLocal: React.FC = () => {
  const [status, setStatus] = useState(() => verificarStatusLoja(HORARIOS_LOJA));

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(verificarStatusLoja(HORARIOS_LOJA));
    }, 60000); // 1 minuto

    return () => clearInterval(timer);
  }, []);

  const statusClass = status.status === 'Aberto' ? 'status-aberto' : 'status-fechado';

  return (
    <section id="horarios-local" className="container">
      <h2>📍 Horários e Localização</h2>

      <div className={`status-bar ${statusClass}`}>
        <h3>{status.status}!</h3>
        <p>{status.detalhes}</p>
      </div>

      <div className="conteudo-duas-colunas">
        
        <div className="horarios-detalhes">
          <h3>Horário de Funcionamento</h3>
          <ul>
            {HORARIOS_LOJA.map((h: HorarioDia) => (
              <li key={h.dia}>
                <strong>{h.dia}:</strong> 
                {h.aberto ? `${h.abertura} às ${h.fechamento}` : 'FECHADO'}
              </li>
            ))}
          </ul>
        </div>

        <div className="localizacao-info">
          <h3>Onde Estamos em São Carlos</h3>
          <p>
            {ENDERECO_LOJA.logradouro} - {ENDERECO_LOJA.cidade}, {ENDERECO_LOJA.estado}
          </p>
          <a 
            href={ENDERECO_LOJA.linkGoogleMaps} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default HorariosLocal;