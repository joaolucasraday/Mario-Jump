async function carregarRanking() {
  const { data, error } = await window.supabase
    .from('ranking_usuarios') // Nossa View mágica
    .select('posicao, user_name, score');

  if (data) {
    const lista = document.getElementById('ranking-lista');
    lista.innerHTML = data.map(item => `
      <li>
        <span>#${item.posicao}</span>
        <strong>${item.user_name}</strong>
        <span>${item.score} pts</span>
      </li>
    `).join('');
  }
}

// Executa ao abrir a página
carregarRanking();