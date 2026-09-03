export async function carregarTarefas() {
  const resposta = await fetch('./dados.json');
 
  if (!resposta.ok) {
    throw new Error(`Não foi possível carregar as tarefas (HTTP ${resposta.status}).`);
  }

  const dados = await resposta.json();
 
  return dados.tarefas;
}
 