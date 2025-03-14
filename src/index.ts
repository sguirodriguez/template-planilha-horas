const xlsx = require('xlsx')

// Dados de exemplo para as tarefas
const tarefas = [
  { tarefa: "Tarefa 1", horasUsadas: 3, valorPorHora: 60 },
  { tarefa: "Tarefa 2", horasUsadas: 5, valorPorHora: 60 },
  { tarefa: "Tarefa 3", horasUsadas: 2, valorPorHora: 60 },
  { tarefa: "Tarefa 4", horasUsadas: 6, valorPorHora: 60 },
  { tarefa: "Tarefa 5", horasUsadas: 4, valorPorHora: 60 }
];

// Calculando o valor total para cada tarefa
const dadosComTotais = tarefas.map(tarefa => ({
  ...tarefa,
  total: tarefa.horasUsadas * tarefa.valorPorHora
}));

// Somando as horas e o valor total
const totalHoras = dadosComTotais.reduce((acc, tarefa) => acc + tarefa.horasUsadas, 0);
const totalValor = dadosComTotais.reduce((acc, tarefa) => acc + tarefa.total, 0);

// Adicionando a linha de total
dadosComTotais.push({ tarefa: "Total", horasUsadas: totalHoras, valorPorHora: 0, total: totalValor });

// Criando uma planilha
const ws = xlsx.utils.json_to_sheet(dadosComTotais);

// Criando um novo arquivo Excel
const wb = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(wb, ws, "Tarefas");

// Salvando o arquivo
xlsx.writeFile(wb, 'planilha_de_tarefas.xlsx');
