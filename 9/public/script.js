document.getElementById('btn-saludo').onclick = async () => {
  const res = await fetch('/foreach/saludo');
  const data = await res.json();
  mostrarLista(data, 'lista-saludo');
};
document.getElementById('btn-doble').onclick = async () => {
  const res = await fetch('/foreach/doble');
  const data = await res.json();
  mostrarLista(data, 'lista-doble');
};
document.getElementById('btn-edades').onclick = async () => {
  const res = await fetch('/foreach/edades');
  const data = await res.json();
  mostrarLista(data, 'lista-edades');
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