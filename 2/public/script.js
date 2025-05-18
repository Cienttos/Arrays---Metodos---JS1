document.addEventListener('DOMContentLoaded', () => {
    const btnAnimales = document.getElementById('btn-animales');
    const btnProductos = document.getElementById('btn-productos');
    const btnDatos = document.getElementById('btn-datos');
  
    const animalEliminado = document.getElementById('animal-eliminado');
    const productoEliminado = document.getElementById('producto-eliminado');
    const datosEliminados = document.getElementById('datos-eliminados');
  
    const listaAnimales = document.getElementById('lista-animales');
    const listaProductos = document.getElementById('lista-productos');
  
    btnAnimales.addEventListener('click', async () => {
      const res = await fetch('/pop/animales', { method: 'POST' });
      const data = await res.json();
      animalEliminado.textContent = data.eliminado ? `Eliminado: ${data.eliminado}` : 'Nada que eliminar';
      actualizarLista('/obtener/animales', listaAnimales);
    });
  
    btnProductos.addEventListener('click', async () => {
      const res = await fetch('/pop/productos', { method: 'POST' });
      const data = await res.json();
      productoEliminado.textContent = data.eliminado ? `Eliminado: ${data.eliminado}` : 'Nada que eliminar';
      actualizarLista('/obtener/productos', listaProductos);
    });
  
    btnDatos.addEventListener('click', async () => {
      const res = await fetch('/pop/datos', { method: 'POST' });
      const data = await res.json();
      datosEliminados.textContent = `Eliminados: ${data.eliminados.join(', ') || 'Nada que eliminar'}`;
    });
  
    actualizarLista('/obtener/animales', listaAnimales);
    actualizarLista('/obtener/productos', listaProductos);
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
  