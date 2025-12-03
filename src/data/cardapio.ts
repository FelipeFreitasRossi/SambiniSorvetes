// src/data/cardapio.ts
import { Produto } from '../types/Produto';

export const CARDAPIO_DATA: Produto[] = [
  { id: 1, nome: "Morango Silvestre", descricao: "Morango fresco com pedaços.", valor: 8.50, tipo: "sorvete", destaque: true },
  { id: 2, nome: "Açaí Clássico 500ml", descricao: "Açaí puro na tigela.", valor: 15.00, tipo: "acai", destaque: true },
  { id: 3, nome: "Picolé de Coco", descricao: "Refrescante, feito com água de coco natural.", valor: 4.00, tipo: "picolé", destaque: false },
  { id: 4, nome: "Calda de Chocolate", descricao: "Adicional perfeito para sorvetes.", valor: 2.00, tipo: "adicional", destaque: false },
  { id: 5, nome: "Sorvete de Pistache", descricao: "Cremoso, com pistache importado.", valor: 9.50, tipo: "sorvete", destaque: false },
];