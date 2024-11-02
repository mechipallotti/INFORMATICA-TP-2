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

