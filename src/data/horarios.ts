// src/data/horarios.ts
import { HorarioDia } from '../types/Produto';

export const HORARIOS_LOJA: HorarioDia[] = [
  { dia: 'Domingo', aberto: true, abertura: '10:00', fechamento: '22:00' },
  { dia: 'Segunda', aberto: false },
  { dia: 'Terça', aberto: true, abertura: '12:00', fechamento: '22:00' },
  { dia: 'Quarta', aberto: true, abertura: '12:00', fechamento: '22:00' },
  { dia: 'Quinta', aberto: true, abertura: '12:00', fechamento: '23:00' },
  { dia: 'Sexta', aberto: true, abertura: '10:00', fechamento: '23:00' },
  { dia: 'Sábado', aberto: true, abertura: '10:00', fechamento: '23:00' },
];

export const ENDERECO_LOJA = {
  logradouro: 'Rua da Sorveteria, 1234',
  cidade: 'São Carlos',
  estado: 'SP',
  linkGoogleMaps: 'https://maps.app.goo.gl/exemplo'
};