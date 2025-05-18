document.addEventListener('DOMContentLoaded', () => {
  const btnColores = document.getElementById('btn-colores');
  const btnTareas = document.getElementById('btn-tareas');
  const btnUsuario = document.getElementById('btn-usuario');
  const inputUsuario = document.getElementById('nombre-usuario');

  const listaColores = document.getElementById('lista-colores');
  const listaTareas = document.getElementById('lista-tareas');
  const listaUsuarios = document.getElementById('lista-usuarios');

  btnColores.addEventListener('click', async () => {
    await fetch('/unshift/colores', { method: 'POST' });
    actualizarLista('/obtener/colores', listaColores);
  });

  btnTareas.addEventListener('click', async () => {
    await fetch('/unshift/tareas', { method: 'POST' });
    actualizarLista('/obtener/tareas', listaTareas);
  });

  btnUsuario.addEventListener('click', async () => {
    const nombre = inputUsuario.value.trim();
    if (nombre) {
      await fetch('/unshift/usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre }),
      });
      inputUsuario.value = '';
      actualizarLista('/obtener/usuarios', listaUsuarios);
    }
  });

  actualizarLista('/obtener/colores', listaColores);
  actualizarLista('/obtener/tareas', listaTareas);
  actualizarLista('/obtener/usuarios', listaUsuarios);
});

async function actualizarLista(url, lista) {
  const res = await fetch(url);
  const data = await res.json();
  lista.innerHTML = '';
  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    lista.appendChild(li);
  });
}
