document.addEventListener("DOMContentLoaded", function () {
    // Iniciar el carrusel automáticamente
    var myCarousel = new bootstrap.Carousel(document.querySelector("#carouselSobreNosotros"), {
        interval: 3000, // Cambia cada 3 segundos
        ride: "carousel"
    });
});
