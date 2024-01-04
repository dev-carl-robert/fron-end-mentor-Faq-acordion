const askActived = document.querySelectorAll(".asks__content");

askActived.forEach(function (asks__content) {
    asks__content.addEventListener("click", function () {
        asks__content.classList.toggle("actived");

        let img = asks__content.querySelector(".toggle-icon");

        // Verifica se a classe "actived" está presente no elemento
        if (asks__content.classList.contains("actived")) {
            // Se estiver presente, troca para o ícone de fechar
            img.setAttribute('src', './src/assets/images/icon-minus.svg');
        } else {
            // Caso contrário, troca para o ícone de abrir
            img.setAttribute('src', './src/assets/images/icon-plus.svg');
        }
    });
});
