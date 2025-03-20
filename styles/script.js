document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".menu-item img");

    images.forEach(img => {
        img.addEventListener("mousemove", () => {
            img.style.transform = "scale(1.1)"; // Agrandar imagen
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)"; // Volver al tamaño normal
        });
    });
});