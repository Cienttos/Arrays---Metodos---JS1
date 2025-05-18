document.getElementById('btn-mayores10').onclick = async () => {
  const res = await fetch('/filter/mayores10');
  const data = await res.json();
  mostrarLista(data, 'lista-mayores10');
};
document.getElementById('btn-palabras').onclick = async () => {
  const res = await fetch('/filter/palabras');
  const data = await res.json();
  mostrarLista(data, 'lista-palabras');
};
document.getElementById('btn-activos').onclick = async () => {
  const res = await fetch('/filter/activos');
  const data = await res.json();
  mostrarLista(data, 'lista-activos');
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