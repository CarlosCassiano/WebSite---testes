// Menu interativo

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM carregado!");

    const menuContent = document.querySelector('.content');
    const menuToggle = document.querySelector('.menu-toggle');

    if (!menuContent || !menuToggle) {
        console.error("Elemento não encontrado.");
        return;
    }

    menuToggle.addEventListener('click', () => {
        console.log("Toggle clicado!");

        // Alterna a classe e o comportamento de overflow
        menuContent.classList.toggle('on');
        document.body.style.overflow = menuContent.classList.contains('on') ? 'hidden' : 'initial';
    });
});