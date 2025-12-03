// src/components/Contato.tsx
import React, { useState } from 'react';
import '../App.css';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário enviados (FRONT-END APENAS):', formData);
    
    setEnviado(true);
    setTimeout(() => {
        setEnviado(false);
        setFormData({ nome: '', email: '', mensagem: '' });
    }, 4000);
  };

  return (
    <section id="contato" className="container contato-section">
      <h2>📞 Fale Conosco</h2>

      <div className="contato-info">
        
        <div className="form-container">
          {enviado ? (
            <p className="success-message">Mensagem enviada com sucesso! Logo retornaremos o contato. 🍦</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" name="nome" placeholder="Seu Nome" value={formData.nome} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} required />
              <textarea name="mensagem" placeholder="Sua Mensagem ou Pedido" rows={4} value={formData.mensagem} onChange={handleChange} required></textarea>
              <button type="submit" className="cta-button">Enviar Mensagem</button>
            </form>
          )}
        </div>
        
        <div className="contato-detalhes">
            <h3>Contato Direto</h3>
            <p><strong>WhatsApp:</strong> (16) 99999-9999</p>
            <p><strong>Email:</strong> contato@sambinisorvetes.com.br</p>

            <h3>Redes Sociais</h3>
            <p>Siga-nos no Instagram e Facebook!</p>
        </div>
      </div>
    </section>
  );
};

export default Contato;