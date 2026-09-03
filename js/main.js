import { carregarTarefas } from './api.js';
import { renderizarEstado } from './estados.js';
 
function mensagemDeErro(erro) {
  if (erro.name === 'TypeError') {
    return 'Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.';
  }

  if (erro.name === 'SyntaxError') {
    return 'Os dados recebidos estão em um formato inválido.';
  }

  return erro.message || 'Ocorreu um erro inesperado ao carregar as tarefas.';
}
 
async function iniciar() {
  renderizarEstado('carregando');
 
  try {
    const tarefas = await carregarTarefas();
 
    if (tarefas.length === 0) {
      renderizarEstado('vazio');
    } else {
      renderizarEstado('sucesso', tarefas);
    }
  } catch (erro) {
    renderizarEstado('erro', mensagemDeErro(erro));
  }
}
 
iniciar();