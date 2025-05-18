document.addEventListener('DOMContentLoaded', () => {
  const btnLetras = document.getElementById('btn-letras');
  const btnNombres = document.getElementById('btn-nombres');
  const btnFrutas = document.getElementById('btn-frutas');

  const listaLetras = document.getElementById('lista-letras');
  const listaNombres = document.getElementById('lista-nombres');
  const listaFrutas = document.getElementById('lista-frutas');

  const antesLetras = document.getElementById('antes-letras');
  const antesNombres = document.getElementById('antes-nombres');
  const antesFrutas = document.getElementById('antes-frutas');

  btnLetras.addEventListener('click', async () => {
    mostrarAntes('/obtener/letras', antesLetras);
    await fetch('/splice/letras', { method: 'POST' });
    actualizarLista('/obtener/letras', listaLetras);
  });

  btnNombres.addEventListener('click', async () => {
    mostrarAntes('/obtener/nombres', antesNombres);
    await fetch('/splice/nombres', { method: 'POST' });
    actualizarLista('/obtener/nombres', listaNombres);
  });

  btnFrutas.addEventListener('click', async () => {
    mostrarAntes('/obtener/frutas', antesFrutas);
    await fetch('/splice/frutas', { method: 'POST' });
    actualizarLista('/obtener/frutas', listaFrutas);
  });

  actualizarLista('/obtener/letras', listaLetras);
  actualizarLista('/obtener/nombres', listaNombres);
  actualizarLista('/obtener/frutas', listaFrutas);
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

async function mostrarAntes(url, elemento) {
  const res = await fetch(url);
  const data = await res.json();
  elemento.textContent = `Antes: [${data.join(', ')}]`;
}
