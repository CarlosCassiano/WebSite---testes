function toggleLanches(id) {
  const telaLarga = window.innerWidth > 768; // Verifica se a tela é maior que 768px

  if (telaLarga) {
    // Comportamento para monitores e telas maiores
    const lanches = document.querySelectorAll('.lanches');
    lanches.forEach((lista) => {
      lista.style.display = 'none';
    });

    const listaSelecionada = document.getElementById(id);
    listaSelecionada.style.display = 'block';
  } else {
    // Comportamento para dispositivos móveis (Popup)
    const lanches = document.getElementById(id).innerHTML;

    const popup = document.createElement('div');
    popup.classList.add('popup');

    popup.innerHTML = `
      <div class="popup-content">
        <ul>${lanches}</ul>
        <button class="close-btn" onclick="fecharPopup()">Fechar</button>
      </div>
    `;

    document.body.appendChild(popup);
  }
}

function fecharPopup() {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.remove();
  }
}
