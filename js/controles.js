
export function sincronizarControles(estado) {
  const busca = document.getElementById('busca-titulo');
  if (busca.value !== estado.busca) busca.value = estado.busca;

  document.querySelectorAll('input[name="status"]').forEach((radio) => {
    radio.checked = radio.value === estado.status;
  });
  document.querySelectorAll('input[name="prioridade"]').forEach((radio) => {
    radio.checked = radio.value === estado.prioridade;
  });
  document.getElementById('ordenacao').value = estado.ordenacao;
}
