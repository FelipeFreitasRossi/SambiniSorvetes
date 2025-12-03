// src/utils/horarioUtils.ts
import { HorarioDia, DiaSemana } from '../types/Produto';

const DIAS_MAP = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

export const verificarStatusLoja = (horarios: HorarioDia[]): { status: 'Aberto' | 'Fechado', detalhes: string } => {
  const agora = new Date();
  const diaAtualIndex = agora.getDay();
  const diaAtualNome = DIAS_MAP[diaAtualIndex] as DiaSemana;
  const minutosAtuais = agora.getHours() * 60 + agora.getMinutes();

  const horarioDeHoje = horarios.find(h => h.dia === diaAtualNome);

  if (!horarioDeHoje || !horarioDeHoje.aberto) {
    return { status: 'Fechado', detalhes: `Fechado hoje (${diaAtualNome}).` };
  }

  const minutosAbertura = timeToMinutes(horarioDeHoje.abertura!);
  const minutosFechamento = timeToMinutes(horarioDeHoje.fechamento!);

  if (minutosAtuais >= minutosAbertura && minutosAtuais < minutosFechamento) {
    return { status: 'Aberto', detalhes: `Aberto agora! Fechamos às ${horarioDeHoje.fechamento}.` };
  } else if (minutosAtuais < minutosAbertura) {
    return { status: 'Fechado', detalhes: `Fechado. Abrimos hoje às ${horarioDeHoje.abertura}.` };
  } else {
    return { status: 'Fechado', detalhes: `Fechado. Abrimos amanhã.` }; 
  }
};