document.addEventListener("DOMContentLoaded", function () {
    var botones = document.querySelectorAll(".tab-btn");
    var modulos = document.querySelectorAll(".modulo");

    botones.forEach(function (boton) {
        boton.addEventListener("click", function () {
            // 1. Desactivar todos los botones
            botones.forEach(function (b) { b.classList.remove("active"); });
            // 2. Ocultar todos los contenidos
            modulos.forEach(function (m) { m.classList.remove("active"); });

            // 3. Activar el botón donde se hizo clic
            boton.classList.add("active");

            // 4. Mostrar la sección correspondiente
            var destino = boton.getAttribute("data-target");
            document.getElementById(destino).classList.add("active");
        });
    });
});
