document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('#nav');
  const abrir = document.querySelector('#abrir');
  const cerrar = document.querySelector('#cerrar');
  const links = document.querySelectorAll('.nav a');

  abrir.addEventListener('click', () => {
    nav.classList.add('visible');
  });

  cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
  });

  // Agrega el evento de clic a cada enlace
  links.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('visible');
    });
  });
});
