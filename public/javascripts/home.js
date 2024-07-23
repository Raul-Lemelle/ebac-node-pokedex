document.addEventListener('click', function (event) {
  // Verifica se o alvo do clique é um botão com a classe "go-find-pokemon"
  if (!event.target.matches('.go-find-pokemon')) return;

  event.preventDefault(); // Previne o comportamento padrão do link

  const elem = document.querySelector('#battle-pre-loading');
  elem.style.display = 'block'; // Mostra o carregando

  // Redireciona após 0,5 segundos
  setTimeout(() => {
      window.location.href = event.target.href; // Usa href do botão clicado
  }, 500);

}, false);
