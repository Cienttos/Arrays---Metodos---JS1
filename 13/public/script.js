document.getElementById('btn-numeros').onclick = async () => {
  const res = await fetch('/sort/numeros');
  const data = await res.json();
  mostrarLista(data, 'lista-numeros');
};
document.getElementById('btn-palabras').onclick = async () => {
  const res = await fetch('/sort/palabras');
  const data = await res.json();
  mostrarLista(data, 'lista-palabras');
};
document.getElementById('btn-edades').onclick = async () => {
  const res = await fetch('/sort/edades');
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