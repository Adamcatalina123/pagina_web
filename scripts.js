// Seleccionamos el modal y los elementos
const modal = document.getElementById('modal');
const modalCoche = document.getElementById('modal-coche');
const modalPrecio = document.getElementById('modal-precio');
const modalDetalles = document.getElementById('modal-detalles');
const modalClose = document.querySelector('.modal-close');

// Seleccionamos los botones "Más detalles"
const botonesDetalles = document.querySelectorAll('.btn-detalles');

// Añadimos un evento a cada botón
botonesDetalles.forEach((boton) => {
  boton.addEventListener('click', () => {
    // Rellenamos el contenido del modal con los datos del coche
    modalCoche.textContent = boton.getAttribute('data-coche');
    modalPrecio.textContent = `Precio: ${boton.getAttribute('data-precio')}`;
    modalDetalles.textContent = `Detalles: ${boton.getAttribute('data-detalles')}`;
    // Mostramos el modal
    modal.style.display = 'flex';
  });
});

// Cerramos el modal al hacer clic en la "X"
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerramos el modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
// Botones para mostrar las galerías
const botonesGaleria = document.querySelectorAll('.btn-gallery');
const seccionCoches = document.getElementById('coches');
const seccionGalerias = document.getElementById('galerias');

botonesGaleria.forEach(boton => {
  boton.addEventListener('click', () => {
    const galleryId = boton.getAttribute('data-gallery');

    // Ocultamos la sección de coches
    seccionCoches.style.display = 'none';

    // Mostramos la galería correspondiente
    seccionGalerias.style.display = 'block';
    document.querySelectorAll('.gallery').forEach(gallery => {
      gallery.style.display = gallery.getAttribute('data-gallery') === galleryId ? 'block' : 'none';
    });
  });
});

// Función para volver a la sección de coches
function volverCoches() {
  seccionCoches.style.display = 'block';
  seccionGalerias.style.display = 'none';
}
