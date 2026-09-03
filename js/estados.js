
import { renderizarTarefas } from './renderizacao.js';
 
function obterElementoStatus() {
  return document.getElementById('status-mensagem');
}
 
export function renderizarEstado(estado, dados) {
  const elementoStatus = obterElementoStatus();
  if (!elementoStatus) {
    return;
  }
 
  elementoStatus.dataset.estado = estado;
 
  switch (estado) {
    case 'carregando': {
      renderizarTarefas([]);
      elementoStatus.textContent = 'Carregando tarefas...';
      break;
    }
 
    case 'sucesso': {
      renderizarTarefas(dados);
      const quantidade = dados.length;
      elementoStatus.textContent =
        quantidade === 1
          ? '1 tarefa carregada com sucesso.'
          : `${quantidade} tarefas carregadas com sucesso.`;
      break;
    }
 
    case 'vazio': {
      renderizarTarefas([]);
      elementoStatus.textContent = 'Nenhuma tarefa cadastrada no momento.';
      break;
    }
 
    case 'erro': {
      renderizarTarefas([]);
      elementoStatus.textContent = dados;
      break;
    }
 
    default: {
      elementoStatus.textContent = '';
    }
  }
}
 