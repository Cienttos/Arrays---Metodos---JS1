document.getElementById('btn-numeros').onclick = async () => {
  const res = await fetch('/slice/numeros');
  const data = await res.json();
  mostrar(data, 'lista-numeros');
};
document.getElementById('btn-peliculas').onclick = async () => {
  const res = await fetch('/slice/peliculas');
  const data = await res.json();
  mostrar(data, 'lista-peliculas');
};
document.getElementById('btn-letras').onclick = async () => {
  const res = await fetch('/slice/letras');
  const data = await res.json();
  mostrar(data, 'lista-letras');
};
function mostrar(arr, id) {
  const ul = document.getElementById(id);
  ul.innerHTML = '';
  arr.forEach(e => {
    const li = document.createElement('li');
    li.textContent = e;
    ul.appendChild(li);
  });
}