document.getElementById('btn-x3').onclick = async () => {
  const res = await fetch('/map/x3');
  const data = await res.json();
  mostrarLista(data, 'lista-x3');
};
document.getElementById('btn-mayus').onclick = async () => {
  const res = await fetch('/map/mayus');
  const data = await res.json();
  mostrarLista(data, 'lista-mayus');
};
document.getElementById('btn-iva').onclick = async () => {
  const res = await fetch('/map/iva');
  const data = await res.json();
  mostrarLista(data, 'lista-iva');
};
function mostrarLista(arr, id) {
  const ul = document.getElementById(id);
  ul.innerHTML = '';
  arr.forEach(e => {
    const li = document.createElement('li');
    li.textContent = e;
    ul.appendChild(li);
  });
}