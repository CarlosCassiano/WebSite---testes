function toggleLanches(id) {
    const lanches = document.querySelectorAll('.lanches');
    lanches.forEach((lista) => {
      lista.style.display = 'none';
    });
  
    const listaSelecionada = document.getElementById(id);
    listaSelecionada.style.display = 'block';
  }
  