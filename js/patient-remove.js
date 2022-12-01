var tabela = document.querySelector("table");

//parentNode = pai de quem foi clicado (td foi clicado, remove a tr)
tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});

