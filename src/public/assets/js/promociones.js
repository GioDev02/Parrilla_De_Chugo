// document.addEventListener("DOMContentLoaded", function() {
//     const promoText = document.querySelector(".promotions-title h2");
//     const text = promoText.textContent;
//     promoText.textContent = ''; // Limpiar el texto original

//     // Función para agregar las letras con un pequeño retraso
//     let delay = 0;
//     text.split('').forEach((letter, index) => {
//         const span = document.createElement("span");
//         span.textContent = letter;
//         span.style.display = 'inline-block';
//         span.style.opacity = 0; // Inicialmente invisible
//         span.style.transition = `opacity 0.5s ease ${delay}s`;
//         promoText.appendChild(span);

//         // Hacer que las letras aparezcan de manera continua
//         setTimeout(() => {
//             span.style.opacity = 1;
//         }, delay * 1000);

//         delay += 0.1; // Incrementa el retraso para que las letras aparezcan en secuencia
//     });

//     // Animación del texto de izquierda a derecha
//     promoText.style.animation = "moveTitle 15s linear infinite";
// });
