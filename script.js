document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img').forEach(function (imagem) {
        imagem.addEventListener('click', function () {
            this.classList.toggle('expandida');
        });
    });
});
