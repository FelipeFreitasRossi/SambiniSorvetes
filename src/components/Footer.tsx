// src/components/Footer.tsx
import React from 'react';
import { NAV_LINKS } from '../data/navigation';
import '../App.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container footer-content">
        
        <div className="footer-logo">
          <h3>Sambini Sorvetes</h3>
          <p>O melhor sorvete de São Carlos desde {currentYear}.</p>
        </div>

        <div className="footer-navigation">
          <h4>Navegação</h4>
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <div className="footer-copyright">
        <p>&copy; {currentYear} Sambini Sorvetes. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;