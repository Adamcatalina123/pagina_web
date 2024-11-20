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
