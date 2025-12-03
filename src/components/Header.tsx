// src/components/Header.tsx
import React from 'react';
import { NAV_LINKS, NavItem } from '../data/navigation';
import '../App.css'; // Usando estilos globais/App.css

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="container header-content">
        <div className="logo">
          <h1>Sambini Sorvetes 🍧</h1>
          <span className="subtitle">São Carlos - SP</span>
        </div>

        <nav className="nav-menu">
          <ul>
            {NAV_LINKS.map((link: NavItem) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        
        <a 
          href="LINK_DO_WHATSAPP" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-button"
        >
          Peça por WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;