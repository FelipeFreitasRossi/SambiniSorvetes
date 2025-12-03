// src/components/Cardapio.tsx
import React, { useMemo } from 'react';
import { Produto } from '../types/Produto';
import { CARDAPIO_DATA } from '../data/cardapio';
import CardapioItem from './CardapioItem';

const Cardapio: React.FC = () => {
  
  const produtosAgrupados = useMemo(() => {
    return CARDAPIO_DATA.reduce((acc, item) => {
      acc[item.tipo] = acc[item.tipo] || [];
      acc[item.tipo].push(item);
      return acc;
    }, {} as Record<Produto['tipo'], Produto[]>);
  }, []);

  const categoriasOrdenadas: Produto['tipo'][] = ['sorvete', 'acai', 'picolé', 'adicional'];
  
  return (
    <section id="cardapio" className="container">
      <h2>🍧 Nosso Cardápio</h2>
      
      {/* Exibe o Destaque */}
      <div className="destaques-list">
        {CARDAPIO_DATA
          .filter(item => item.destaque)
          .map(item => <CardapioItem key={item.id} item={item} />)
        }
      </div>

      <hr/>

      {/* Renderiza todas as outras categorias */}
      {categoriasOrdenadas.map(tipo => {
        const itensDaCategoria = produtosAgrupados[tipo];
        
        if (!itensDaCategoria || itensDaCategoria.length === 0) {
          return null;
        }

        const tituloFormatado = tipo.charAt(0).toUpperCase() + tipo.slice(1) + 's';

        return (
          <div key={tipo} className="categoria-section">
            <h3>🍦 {tituloFormatado}</h3>
            <div className="itens-list">
              {itensDaCategoria.map(item => (
                <CardapioItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Cardapio;