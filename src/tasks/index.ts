interface ITask {
  data: string;
  tarefa: string;
  descricao: string;
  horasUsadas: number;
  valorPorHora: number;
  total?: number;
}

const tasks: ITask[] = [
  //----------------------------Estruturação de projeto----------------------
  {
    data: '2025-03-10',
    tarefa:
      'Estilos globais, padrão de cores, importação de fontes e criar componentes de texto',
    descricao: 'Estruturação de projeto',
    horasUsadas: 2,
    valorPorHora: 60,
  },
  {
    data: '2025-03-10',
    tarefa: 'Criar estrutura de navegação de rotas',
    descricao: 'Estruturação de projeto',
    horasUsadas: 1,
    valorPorHora: 60,
  },
  {
    data: '2025-03-10',
    tarefa: 'Importar imagens, ícones e estrutura de pastas',
    descricao: 'Estruturação de projeto',
    horasUsadas: 3,
    valorPorHora: 60,
  },
  {
    data: '2025-03-13',
    tarefa: 'React-hook-form para formulários e persistência de dados',
    descricao: 'Estruturação de projeto',
    horasUsadas: 5,
    valorPorHora: 60,
  },

  //----------------------------Criação de componentes----------------------
  {
    data: '2025-03-11',
    tarefa: 'Layout que envolve todas as telas da aplicação',
    descricao: 'Criação de componentes',
    horasUsadas: 3,
    valorPorHora: 60,
  },
  {
    data: '2025-03-11',
    tarefa: 'Header com componente de logo',
    descricao: 'Criação de componentes',
    horasUsadas: 2,
    valorPorHora: 60,
  },
  {
    data: '2025-03-12',
    tarefa: 'Botão de checkbox e botão padrão',
    descricao: 'Criação de componentes',
    horasUsadas: 2,
    valorPorHora: 60,
  },
  {
    data: '2025-03-12',
    tarefa:
      'Criação de scene, componente que envolve avisos e alertas de segurança na página',
    descricao: 'Criação de componentes',
    horasUsadas: 1,
    valorPorHora: 60,
  },
  {
    data: '2025-03-12',
    tarefa: 'Criação de board, componente que conteúdo geral das telas',
    descricao: 'Criação de componentes',
    horasUsadas: 1,
    valorPorHora: 60,
  },
  {
    data: '2025-03-13',
    tarefa:
      'Criação de input, componente que envolve campo de input, label e erro',
    descricao: 'Criação de componentes',
    horasUsadas: 2,
    valorPorHora: 60,
  },
  {
    data: '2025-03-13',
    tarefa:
      'Criação de progressBar, componente que envolve barra de progresso e animação',
    descricao: 'Criação de componentes',
    horasUsadas: 1,
    valorPorHora: 60,
  },
  {
    data: '2025-03-13',
    tarefa:
      'Criação de cardAdvantage, componente que envolve card com informações e ícones',
    descricao: 'Criação de componentes',
    horasUsadas: 1,
    valorPorHora: 60,
  },
  {
    data: '2025-03-14',
    tarefa:
      'Criação de select, componente que envolve campo de seleção e opções',
    descricao: 'Criação de componentes',
    horasUsadas: 2,
    valorPorHora: 60,
  },
  {
    data: '2025-03-14',
    tarefa:
      'Criação de dropdown, componente que ao ser clicado, exibe uma descrição',
    descricao: 'Criação de componentes',
    horasUsadas: 1,
    valorPorHora: 60,
  },
  {
    data: '2025-03-14',
    tarefa:
      'Criação de loadingEllipse, componente que envolve loading com círculo',
    descricao: 'Criação de componentes',
    horasUsadas: 1,
    valorPorHora: 60,
  },
  {
    data: '2025-03-14',
    tarefa:
      'Criação de cardFeedbackUser, componente que envolve card com feedback de usuários anteriores',
    descricao: 'Criação de componentes',
    horasUsadas: 2,
    valorPorHora: 60,
  },
  {
    data: '2025-03-14',
    tarefa:
      'Criação de certificadoMEIPreview, componente que envolve um preview do certificado MEI',
    descricao: 'Criação de componentes',
    horasUsadas: 4,
    valorPorHora: 60,
  },

  //----------------------------CRIAÇÃO DE TELAS----------------------
  {
    data: '2025-03-12',
    tarefa: 'Criação de tela inicial',
    descricao: 'Criação de telas',
    horasUsadas: 2,
    valorPorHora: 60,
  },
  {
    data: '2025-03-13',
    tarefa: 'Criação de tela quem pode abrir mei',
    descricao: 'Criação de telas',
    horasUsadas: 2,
    valorPorHora: 60,
  },
  {
    data: '2025-03-13',
    tarefa: 'Criação de tela informações para abrir mei',
    descricao: 'Criação de telas',
    horasUsadas: 2,
    valorPorHora: 60,
  },
  {
    data: '2025-03-13',
    tarefa: 'Criação de tela de vantagens mei',
    descricao: 'Criação de telas',
    horasUsadas: 1,
    valorPorHora: 60,
  },
  {
    data: '2025-03-13',
    tarefa: 'Criação de tela de dados pessoais',
    descricao: 'Criação de telas',
    horasUsadas: 1,
    valorPorHora: 60,
  },
  {
    data: '2025-03-13',
    tarefa: 'Criação de tela dados para o CNPJ',
    descricao: 'Criação de telas',
    horasUsadas: 1,
    valorPorHora: 60,
  },
  {
    data: '2025-03-14',
    tarefa: 'Criação de tela de endereço',
    descricao: 'Criação de telas',
    horasUsadas: 2,
    valorPorHora: 60,
  },
  {
    data: '2025-03-14',
    tarefa: 'Criação de tela verificando dados',
    descricao: 'Criação de telas',
    horasUsadas: 1,
    valorPorHora: 60,
  },
];

export default tasks;
