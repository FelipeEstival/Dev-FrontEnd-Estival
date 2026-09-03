const COLUNAS_POR_STATUS = {
  'a-fazer': 'lista-a-fazer',
  'em-andamento': 'lista-em-andamento',
  'em-revisao': 'lista-em-revisao',
  'concluida': 'lista-concluida',
};
 
function criarCartao(tarefa) {
  const item = document.createElement('li');
  const artigo = document.createElement('article');
 
  const titulo = document.createElement('h4');
  titulo.textContent = tarefa.titulo;
 
  const projeto = document.createElement('p');
  projeto.textContent = `Projeto: ${tarefa.projeto ?? '—'}`;
 
  const responsavel = document.createElement('p');
  responsavel.textContent = `Responsável: ${tarefa.responsavel ?? '—'}`;
 
  const prazo = document.createElement('p');
  prazo.textContent = `Prazo: ${tarefa.prazo}`;
 
  const prioridade = document.createElement('p');
  prioridade.textContent = `Prioridade: ${tarefa.prioridade}`;
 
  // A ordem de inserção precisa bater com a ordem esperada pelo CSS
  // (article p:nth-of-type(2), (3) e (4)): Projeto, Responsável, Prazo, Prioridade.
  artigo.append(titulo, projeto, responsavel, prazo, prioridade);
  item.append(artigo);
  return item;
}
 
function limparColunas() {
  Object.values(COLUNAS_POR_STATUS).forEach((idColuna) => {
    const lista = document.getElementById(idColuna);
    if (lista) {
      lista.textContent = '';
    }
  });
}
 
export function renderizarTarefas(tarefas) {
  limparColunas();
 
  tarefas.forEach((tarefa) => {
    const idColuna = COLUNAS_POR_STATUS[tarefa.status];
    const lista = idColuna ? document.getElementById(idColuna) : null;
    if (lista) {
      lista.append(criarCartao(tarefa));
    }
  });
}