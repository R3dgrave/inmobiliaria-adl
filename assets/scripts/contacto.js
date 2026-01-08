document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formulario-contacto');
  const mensajeExito = document.getElementById('mensaje-exito');

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = {
      nombre: document.getElementById('nombre').value,
      email: document.getElementById('email').value,
      asunto: document.getElementById('asunto').value,
      mensaje: document.getElementById('mensaje').value
    };

    const btn = formulario.querySelector('button');
    btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
    btn.disabled = true;

    setTimeout(() => {
      formulario.classList.add('d-none');
      mensajeExito.classList.remove('d-none');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 5000);
    }, 2000);
  });
});