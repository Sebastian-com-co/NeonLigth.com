document.querySelector('.floating-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que la pantalla salte
    this.classList.toggle('open');
});

// Evita que el clic en los enlaces de las redes sociales sea interferido
document.querySelectorAll('.social-icons a').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
        event.stopPropagation(); // Detiene la propagación del clic al contenedor padre
    });
});
