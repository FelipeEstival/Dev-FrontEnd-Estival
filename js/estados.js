
function obterElementoStatus() {
  return document.getElementById('status-mensagem');
}

export function renderizarEstado(estado, visiveis) {
  const elementoStatus = obterElementoStatus();
  if (!elementoStatus) {
    return;
  }

  let tipo;
  let texto;

  if (estado.carregamento === 'carregando') {
    tipo = 'carregando';
    texto = 'Carregando tarefas...';
  } else if (estado.carregamento === 'erro') {
    tipo = 'erro';
    texto = estado.erro;
  } else if (estado.tarefas.length === 0) {
    tipo = 'vazio'; 
    texto = 'Nenhuma tarefa cadastrada no momento.';
  } else if (visiveis.length === 0) {
    tipo = 'vazio'; 
    texto = 'Nenhuma tarefa encontrada para esses critérios. Altere a busca ou os filtros, ou use "Limpar filtros".';
  } else {
    tipo = 'sucesso';
    texto = `${visiveis.length} de ${estado.tarefas.length} tarefas`;
  }

  elementoStatus.dataset.estado = tipo;
  if (elementoStatus.textContent !== texto) {
    elementoStatus.textContent = texto;
  }
}
