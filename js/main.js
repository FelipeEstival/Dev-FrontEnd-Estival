import { carregarTarefas } from './api.js';
import { estado, limparFiltros } from './estadoApp.js';
import { derivarTarefasVisiveis } from './derivacao.js';
import { renderizarTarefas } from './renderizacao.js';
import { renderizarEstado } from './estados.js';
import { sincronizarControles } from './controles.js';

function mensagemDeErro(erro) {
  if (erro.name === 'TypeError') {
    return 'Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.';
  }

  if (erro.name === 'SyntaxError') {
    return 'Os dados recebidos estão em um formato inválido.';
  }

  return erro.message || 'Ocorreu um erro inesperado ao carregar as tarefas.';
}

function atualizar() {
  const visiveis = derivarTarefasVisiveis(estado); 
  renderizarTarefas(visiveis);
  renderizarEstado(estado, visiveis);
  sincronizarControles(estado);
}

const form = document.getElementById('form-filtros');

form.addEventListener('input', (evento) => {
  if (evento.target.id === 'busca-titulo') {
    estado.busca = evento.target.value;
    atualizar();
  }
});

form.addEventListener('change', (evento) => {
  const { name, value } = evento.target;
  if (name === 'status' || name === 'prioridade' || name === 'ordenacao') {
    estado[name] = value;
    atualizar();
  }
});

form.addEventListener('submit', (evento) => evento.preventDefault());

document.getElementById('limpar-filtros').addEventListener('click', () => {
  limparFiltros();
  atualizar();
});

async function iniciar() {
  atualizar();

  try {
    estado.tarefas = await carregarTarefas();
    estado.carregamento = 'sucesso';
    estado.erro = null;
  } catch (erro) {
    estado.carregamento = 'erro';
    estado.erro = mensagemDeErro(erro);
  }

  atualizar();
}

iniciar();
