import * as xlsx from 'xlsx';
import CONFIG from './config';
import tasks from './tasks';

// Definição de cores para estilização
const COLORS = {
  primary: { rgb: '4472C4' }, // Azul
  secondary: { rgb: 'ED7D31' }, // Laranja
  accent: { rgb: '70AD47' }, // Verde
  lightGray: { rgb: 'F2F2F2' }, // Cinza claro
  white: { rgb: 'FFFFFF' }, // Branco
  darkText: { rgb: '44546A' }, // Texto escuro
  headerBg: { rgb: '2F5597' }, // Azul escuro para cabeçalhos
  totalBg: { rgb: 'D9EAD3' }, // Verde claro para totais
};

// Ícones usando caracteres especiais
const ICONS = {
  clock: '⏱️',
  money: '💰',
  calendar: '📅',
  person: '👤',
  project: '📋',
  client: '🏢',
  task: '✅',
  summary: '📊',
};

// Função para criar estilos de célula
function createStyle(options: {
  bold?: boolean;
  fontSize?: number;
  fgColor?: { rgb: string };
  fontColor?: { rgb: string };
  border?: boolean;
  alignment?: 'center' | 'left' | 'right';
}) {
  const style: any = {};

  if (options.bold) style.font = { bold: true };
  if (options.fontSize) {
    if (!style.font) style.font = {};
    style.font.sz = options.fontSize;
  }
  if (options.fontColor) {
    if (!style.font) style.font = {};
    style.font.color = options.fontColor;
  }
  if (options.fgColor) style.fill = { fgColor: options.fgColor };
  if (options.border) {
    style.border = {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
      left: { style: 'thin' },
      right: { style: 'thin' },
    };
  }
  if (options.alignment) {
    style.alignment = { horizontal: options.alignment, vertical: 'center' };
  }

  return style;
}

// Calcular totais
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

// Agrupar tarefas por tipo para o gráfico
const tarefasPorTipo = dadosComTotais.reduce((acc, task) => {
  const tipo = task.tarefa.split(' ')[0]; // Pega a primeira palavra como tipo
  if (!acc[tipo]) {
    acc[tipo] = { horas: 0, valor: 0 };
  }
  acc[tipo].horas += task.horasUsadas;
  acc[tipo].valor += task.total || 0;
  return acc;
}, {} as Record<string, { horas: number; valor: number }>);

function criarPlanilhaModerna() {
  const wb = xlsx.utils.book_new();

  // ===== PLANILHA DE DETALHAMENTO =====
  const cabecalho = [
    [`${ICONS.summary} RELATÓRIO DE HORAS TRABALHADAS`],
    [''],
    [`${ICONS.person} Profissional:`, CONFIG.nomeProfissional],
    [`${ICONS.client} Cliente:`, CONFIG.cliente],
    [`${ICONS.project} Projeto:`, CONFIG.projeto],
    [`${ICONS.calendar} Período:`, `${CONFIG.mes}/${CONFIG.ano}`],
    [''],
    [`${ICONS.task} DETALHAMENTO DE ATIVIDADES`],
  ];

  const wsDetalhamento = xlsx.utils.aoa_to_sheet(cabecalho);

  // Mesclar células do título e subtítulo
  wsDetalhamento['!merges'] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: 5 } }, // Mesclar células do título
    { s: { r: 7, c: 0 }, e: { r: 7, c: 5 } }, // Mesclar células do subtítulo
  ];

  // Dados da tabela de tarefas
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
    ['', 'TOTAL', '', totalHoras, '', `R$ ${totalValor.toFixed(2)}`],
  ];

  // Adicionar dados à planilha a partir da linha 9
  xlsx.utils.sheet_add_aoa(wsDetalhamento, dadosTabela, { origin: 'A9' });

  // Aplicar estilos para títulos e totais
  wsDetalhamento['A1'].s = createStyle({
    bold: true,
    fontSize: 14,
    fgColor: COLORS.primary,
    fontColor: COLORS.white,
    alignment: 'center',
  });
  wsDetalhamento['A9'].s = createStyle({
    bold: true,
    fontSize: 12,
    fgColor: COLORS.primary,
    fontColor: COLORS.white,
    alignment: 'center',
  });
  wsDetalhamento['F' + dadosTabela.length].s = createStyle({
    bold: true,
    fontSize: 12,
    fgColor: COLORS.totalBg,
    fontColor: COLORS.darkText,
    alignment: 'center',
  });

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

  // Adicionar planilha ao workbook
  xlsx.utils.book_append_sheet(wb, wsDetalhamento, 'Relatório de Horas');

  // ===== PLANILHA DE RESUMO =====
  const wsResumo = xlsx.utils.aoa_to_sheet([
    [`${ICONS.summary} RESUMO DE HORAS`],
    [''],
    [`${ICONS.clock} Total de Horas Trabalhadas:`, totalHoras],
    [`${ICONS.money} Valor Total:`, `R$ ${totalValor.toFixed(2)}`],
    [`Valor Médio por Hora:`, `R$ ${(totalValor / totalHoras).toFixed(2)}`],
    [''],
    [`${ICONS.task} DISTRIBUIÇÃO DE HORAS POR TAREFA:`],
    ['Tarefa', 'Horas', 'Percentual', 'Valor'],
    ...dadosComTotais.map((t) => [
      t.tarefa,
      t.horasUsadas,
      `${((t.horasUsadas / totalHoras) * 100).toFixed(1)}%`,
      `R$ ${t.total?.toFixed(2)}`,
    ]),
    [''],
    [`${ICONS.task} DISTRIBUIÇÃO POR TIPO DE TAREFA:`],
    ['Tipo', 'Horas', 'Percentual', 'Valor'],
    ...Object.entries(tarefasPorTipo).map(([tipo, dados]) => [
      tipo,
      dados.horas,
      `${((dados.horas / totalHoras) * 100).toFixed(1)}%`,
      `R$ ${dados.valor.toFixed(2)}`,
    ]),
    [''],
    [`${ICONS.calendar} REGISTRO DIÁRIO:`],
    ['Data', 'Horas', 'Valor'],
  ]);

  // Agrupar por data para o registro diário
  const horasPorDia = dadosComTotais.reduce((acc, task) => {
    if (!acc[task.data]) {
      acc[task.data] = { horas: 0, valor: 0 };
    }
    acc[task.data].horas += task.horasUsadas;
    acc[task.data].valor += task.total || 0;
    return acc;
  }, {} as Record<string, { horas: number; valor: number }>);

  // Adicionar dados do registro diário
  const registroDiario = Object.entries(horasPorDia)
    .sort((a, b) => {
      // Ordenar por data (formato DD/MM/YYYY)
      const [diaA, mesA, anoA] = a[0].split('/').map(Number);
      const [diaB, mesB, anoB] = b[0].split('/').map(Number);

      if (anoA !== anoB) return anoA - anoB;
      if (mesA !== mesB) return mesA - mesB;
      return diaA - diaB;
    })
    .map(([data, dados]) => [
      data,
      dados.horas,
      `R$ ${dados.valor.toFixed(2)}`,
    ]);

  // Adicionar registro diário à planilha
  xlsx.utils.sheet_add_aoa(wsResumo, registroDiario, {
    origin: { r: 18, c: 0 },
  });

  // Configurar larguras das colunas do resumo
  wsResumo['!cols'] = [
    { wch: 30 }, // Descrição da coluna
    { wch: 10 }, // Horas
    { wch: 12 }, // Valor
  ];

  // Adicionar a planilha de resumo
  xlsx.utils.book_append_sheet(wb, wsResumo, 'Resumo');

  // Gerar o arquivo
  xlsx.writeFile(wb, 'Relatorio_Trabalho.xlsx');
}

criarPlanilhaModerna();
