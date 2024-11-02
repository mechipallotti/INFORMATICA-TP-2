document.addEventListener('DOMContentLoaded', () => {
    const galeria = new bootstrap.Carousel('#galeria-fotos', {
      interval: 20, // Cambia cada 100 milisegundos
      ride: 'carousel' // Para que se inicie automáticamente
    });
  });
  function pausarCarrusel() {
    const galeria = bootstrap.Carousel.getInstance('#galeria-fotos');
    galeria.pause();
  }
  
  function reproducirCarrusel() {
    const galeria= bootstrap.Carousel.getInstance('#galeria-fotos');
    galeria.cycle();
  }

// INTERACCION IMAGEN EN ABOUT ME

const aboutImage = document.getElementById('change-img');
        const originalSrc = aboutImage.src;
        const newSrc = 'img/aboutme02.jpg'; // Cambia esto por la URL de tu nueva imagen

        aboutImage.addEventListener('click', function() {
            aboutImage.src = (aboutImage.src === originalSrc) ? newSrc : originalSrc;
        });