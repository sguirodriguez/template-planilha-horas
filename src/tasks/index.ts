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
  { data: "2025-03-14", tarefa: "importar fontes, criar componentes de texto", descricao: "Estruturação de projeto", horasUsadas: 1, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "estilos globais e padrão de cores", descricao: "Estruturação de projeto", horasUsadas: 1, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "criar padrão de rotas", descricao: "Estruturação de projeto", horasUsadas: 1, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "forma de importar icons", descricao: "Estruturação de projeto", horasUsadas: 1, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "react-hook-form", descricao: "Estruturação de projeto", horasUsadas: 3, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "persistência de dados", descricao: "Estruturação de projeto", horasUsadas: 2, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "importar icons", descricao: "Estruturação de projeto", horasUsadas: 2, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "select", descricao: "Estruturação de projeto", horasUsadas: 2, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "dropdown", descricao: "Estruturação de projeto", horasUsadas: 1, valorPorHora: 60 },


    //----------------------------Criação de componentes----------------------
  { data: "2025-03-14", tarefa: "layout", descricao: "Criação de componentes", horasUsadas: 3, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "header", descricao: "Criação de componentes", horasUsadas: 2, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "botões", descricao: "Criação de componentes", horasUsadas: 2, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "scene", descricao: "Criação de componentes", horasUsadas: 1, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "board", descricao: "Criação de componentes", horasUsadas: 1, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "input", descricao: "Criação de componentes", horasUsadas: 2, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "progressBar", descricao: "Criação de componentes", horasUsadas: 1, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "cardAdvantage", descricao: "Criação de componentes", horasUsadas: 1, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "loadingEllipse", descricao: "Criação de componentes", horasUsadas: 1, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "cardFeedbackUser ", descricao: "Criação de componentes", horasUsadas: 2, valorPorHora: 60 },

  //----------------------------CRIAÇÃO DE TELAS----------------------
  { data: "2025-03-14", tarefa: "tela inicial", descricao: "Criação de telas", horasUsadas: 2, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "quem pode abrir mei", descricao: "Criação de telas", horasUsadas: 2, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "informações para abrir mei", descricao: "Criação de telas", horasUsadas: 2, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "tela de vantagens mei", descricao: "Criação de telas", horasUsadas: 1, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "tela de dados pessoais", descricao: "Criação de telas", horasUsadas: 1, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "tela dados para o CNPJ", descricao: "Criação de telas", horasUsadas: 1, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "tela de endereço", descricao: "Criação de telas", horasUsadas: 2, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "tela dúvidas frequentes", descricao: "Criação de telas", horasUsadas: 0, valorPorHora: 60 },
  { data: "2025-03-14", tarefa: "tela verificando dados", descricao: "Criação de telas", horasUsadas: 1, valorPorHora: 60 }
];


export default tasks;
