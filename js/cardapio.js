function toggleLanches(id) {
  const telaLarga = window.innerWidth > 768;

  if (telaLarga) {
    const lanches = document.querySelectorAll('.lanches');
    lanches.forEach((lista) => {
      lista.style.display = 'none';
    });

    const listaSelecionada = document.getElementById(id);
    
    // Verifica se a lista selecionada existe
    if (listaSelecionada) {
      listaSelecionada.style.display = 'block';
      console.log(`Lista com ID '${id}' exibida.`); // Log para depuração
    } else {
      console.error(`Lista com ID '${id}' não encontrada.`); // Log de erro
    }
  } else {
    const listaSelecionada = document.getElementById(id);

    // Verifica se a lista selecionada existe e não está vazia
    if (listaSelecionada && listaSelecionada.innerHTML.trim() !== '') {
      const lanches = listaSelecionada.innerHTML;

      const popup = document.createElement('div');
      popup.classList.add('popup');

      popup.innerHTML = `
        <div class="popup-content">
          <ul>${lanches}</ul>
          <button class="close-btn" onclick="fecharPopup()">Fechar</button>
        </div>
      `;

      document.body.appendChild(popup);
      console.log(`Popup criado com a lista: ${lanches}`); // Log para depuração
    } else {
      console.error(`Lista com ID '${id}' não encontrada ou está vazia.`); // Log de erro
    }
  }
}

function fecharPopup() {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.remove();
    console.log('Popup fechado.'); // Log para depuração
  }
}
