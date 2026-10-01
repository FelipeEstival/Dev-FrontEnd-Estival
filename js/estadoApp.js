
export const FILTROS_INICIAIS = Object.freeze({
  busca: '',
  status: 'todos',
  prioridade: 'todas',
  ordenacao: 'padrao',
});

export const estado = {
  tarefas: [],             
  ...FILTROS_INICIAIS,       
  carregamento: 'carregando',  
  erro: null,                 
};

export function limparFiltros() {
  Object.assign(estado, FILTROS_INICIAIS);
}
