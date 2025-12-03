// src/components/CardapioItem.tsx
import React from 'react';
import { Produto } from '../types/Produto';
import '../App.css'; // Usando estilos globais/App.css

interface CardapioItemProps {
  item: Produto;
}

const CardapioItem: React.FC<CardapioItemProps> = ({ item }) => {
  const isDestaque = item.destaque;
  
  return (
    <div className={`cardapio-item ${isDestaque ? 'destaque' : ''}`}>
      <div className="info">
        <h3>{item.nome} {isDestaque && '⭐'}</h3>
        <p className="descricao">{item.descricao}</p>
      </div>
      <div className="preco">
        R$ {item.valor.toFixed(2).replace('.', ',')}
      </div>
    </div>
  );
};

export default CardapioItem;