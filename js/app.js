(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    // Botones de contenido (hero / about) que llevan a otra sección:
    // reutilizan el mismo mecanismo que el menú lateral
    [...document.querySelectorAll("[data-goto]")].forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector('.control[data-id="' + this.dataset.goto + '"]');
            if (target) target.click();
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();