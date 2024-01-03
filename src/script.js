const askActived = document.querySelectorAll(".asks__content");
const description = document.querySelectorAll(".ask__descriptions");


askActived.forEach(function (asks__content, ask__descriptions) {
    asks__content.addEventListener("click", function () {
        asks__content.classList.toggle("actived")

        let img = document.querySelector("#image");
        img.setAttribute('src', './src/assets/images/icon-minus.svg');
    })
})
