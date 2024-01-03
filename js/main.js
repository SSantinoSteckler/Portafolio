const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');
const link = document.querySelector('#link');

abrir.addEventListener('click', () => {
  nav.classList.add('visible');
});

cerrar.addEventListener('click', () => {
  nav.classList.remove('visible');
});
