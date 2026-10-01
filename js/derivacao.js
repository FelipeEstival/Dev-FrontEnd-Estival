
const normalizar = (texto) =>
  String(texto).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

function prazoParaNumero(prazo) {
  const [dia, mes, ano] = prazo.split('/');
  return Number(ano) * 10000 + Number(mes) * 100 + Number(dia);
}

export function derivarTarefasVisiveis({ tarefas, busca, status, prioridade, ordenacao }) {
  const termo = normalizar(busca);

  const visiveis = tarefas.filter((t) =>
    (termo === '' || normalizar(t.titulo).includes(termo)) &&
    (status === 'todos' || t.status === status) &&
    (prioridade === 'todas' || normalizar(t.prioridade) === prioridade)
  );

  if (ordenacao === 'prazo-asc') {
    visiveis.sort((a, b) => prazoParaNumero(a.prazo) - prazoParaNumero(b.prazo));
  } else if (ordenacao === 'prazo-desc') {
    visiveis.sort((a, b) => prazoParaNumero(b.prazo) - prazoParaNumero(a.prazo));
  }
  return visiveis;
}
