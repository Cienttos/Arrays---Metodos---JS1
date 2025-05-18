document.addEventListener('DOMContentLoaded', () => {
  const btnNumeros = document.getElementById('btn-numeros');
  const btnMensajes = document.getElementById('btn-mensajes');
  const btnCola = document.getElementById('btn-cola');

  const listaNumeros = document.getElementById('lista-numeros');
  const listaMensajes = document.getElementById('lista-mensajes');
  const listaCola = document.getElementById('lista-cola');

  btnNumeros.addEventListener('click', async () => {
    await fetch('/shift/numeros', { method: 'POST' });
    actualizarLista('/obtener/numeros', listaNumeros);
  });

  btnMensajes.addEventListener('click', async () => {
    await fetch('/shift/mensajes', { method: 'POST' });
    actualizarLista('/obtener/mensajes', listaMensajes);
  });

  btnCola.addEventListener('click', async () => {
    await fetch('/shift/cola', { method: 'POST' });
    actualizarLista('/obtener/cola', listaCola);
  });

  actualizarLista('/obtener/numeros', listaNumeros);
  actualizarLista('/obtener/mensajes', listaMensajes);
  actualizarLista('/obtener/cola', listaCola);
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
