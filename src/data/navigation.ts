// src/data/navigation.ts
import { NavItem } from '../types/Produto';

export const NAV_LINKS: NavItem[] = [
  { id: 'cardapio', label: 'Cardápio' },
  { id: 'horarios-local', label: 'Horários e Local' },
  { id: 'contato', label: 'Contato' },
];

export type { NavItem };
