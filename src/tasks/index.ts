import CONFIG from '../config';

interface ITask {
  data: string;
  tarefa: string;
  descricao: string;
  horasUsadas: number;
  valorPorHora: number;
  total?: number;
}

const tasks: ITask[] = [
  {
    data: '01/03/2024',
    tarefa: 'Desenvolvimento Frontend',
    descricao: 'Implementação de componentes React',
    horasUsadas: 3,
    valorPorHora: CONFIG.valorPadraoHora,
  },
  {
    data: '02/03/2024',
    tarefa: 'Reunião de Planejamento',
    descricao: 'Definição de requisitos com o cliente',
    horasUsadas: 1.5,
    valorPorHora: CONFIG.valorPadraoHora,
  },
  {
    data: '03/03/2024',
    tarefa: 'Desenvolvimento Backend',
    descricao: 'Criação de APIs REST',
    horasUsadas: 4,
    valorPorHora: CONFIG.valorPadraoHora,
  },
  {
    data: '05/03/2024',
    tarefa: 'Testes',
    descricao: 'Testes de integração e unitários',
    horasUsadas: 2.5,
    valorPorHora: CONFIG.valorPadraoHora,
  },
  {
    data: '07/03/2024',
    tarefa: 'Correção de Bugs',
    descricao: 'Resolução de problemas reportados',
    horasUsadas: 3,
    valorPorHora: CONFIG.valorPadraoHora,
  },
];

export default tasks;
