// src/types/Produto.ts

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  tipo: 'sorvete' | 'acai' | 'picolé' | 'adicional';
  destaque: boolean;
}

export type DiaSemana = 'Domingo' | 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta' | 'Sábado';

export interface HorarioDia {
  dia: DiaSemana;
  aberto: boolean;
  abertura?: string;
  fechamento?: string;
}

export interface NavItem {
  id: string;
  label: string;
}