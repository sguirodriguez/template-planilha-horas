import * as xlsx from 'xlsx';
import CONFIG from './config';
import tasks from './tasks';

const dadosComTotais = tasks.map((task) => ({
  ...task,
  total: task.horasUsadas * task.valorPorHora,
}));

const totalHoras = dadosComTotais.reduce(
  (acc, task) => acc + task.horasUsadas,
  0
);
const totalValor = dadosComTotais.reduce(
  (acc, task) => acc + (task.total || 0),
  0
);

function criarPlanilhaModerna() {
  const wb = xlsx.utils.book_new();

  const cabecalho = [
    ['RELATÓRIO DE HORAS TRABALHADAS'],
    [''],
    ['Profissional:', CONFIG.nomeProfissional],
    ['Cliente:', CONFIG.cliente],
    ['Projeto:', CONFIG.projeto],
    ['Período:', `${CONFIG.mes}/${CONFIG.ano}`],
    [''],
    ['DETALHAMENTO DE ATIVIDADES'],
  ];

  const wsDetalhamento = xlsx.utils.aoa_to_sheet(cabecalho);

  const dadosTabela = [
    ['Data', 'Tarefa', 'Descrição', 'Horas', 'Valor/Hora', 'Total'],
    ...dadosComTotais.map((t) => [
      t.data,
      t.tarefa,
      t.descricao,
      t.horasUsadas,
      `R$ ${t.valorPorHora.toFixed(2)}`,
      `R$ ${t.total?.toFixed(2)}`,
    ]),
    ['', '', '', totalHoras, '', `R$ ${totalValor.toFixed(2)}`],
  ];

  xlsx.utils.sheet_add_aoa(wsDetalhamento, dadosTabela, { origin: 'A9' });

  // Configurar larguras das colunas
  const colunas = [
    { wch: 12 }, // Data
    { wch: 25 }, // Tarefa
    { wch: 40 }, // Descrição
    { wch: 10 }, // Horas
    { wch: 12 }, // Valor/Hora
    { wch: 15 }, // Total
  ];
  wsDetalhamento['!cols'] = colunas;

  xlsx.utils.book_append_sheet(wb, wsDetalhamento, 'Relatório de Horas');

  const wsResumo = xlsx.utils.aoa_to_sheet([
    ['RESUMO DE HORAS'],
    [''],
    ['Total de Horas Trabalhadas:', totalHoras],
    ['Valor Total:', `R$ ${totalValor.toFixed(2)}`],
    ['Valor Médio por Hora:', `R$ ${(totalValor / totalHoras).toFixed(2)}`],
    [''],
    ['Distribuição de Horas por Tarefa:'],
    ...dadosComTotais.map((t) => [
      t.tarefa,
      t.horasUsadas,
      `${((t.horasUsadas / totalHoras) * 100).toFixed(1)}%`,
    ]),
  ]);

  wsResumo['!cols'] = [
    { wch: 30 }, // Descrição
    { wch: 15 }, // Valor
    { wch: 15 }, // Percentual
  ];

  xlsx.utils.book_append_sheet(wb, wsResumo, 'Resumo');

  return wb;
}

const workbook = criarPlanilhaModerna();
xlsx.writeFile(workbook, 'relatorio_horas_trabalhadas.xlsx');

console.log('✅ Planilha gerada com sucesso: relatorio_horas_trabalhadas.xlsx');
