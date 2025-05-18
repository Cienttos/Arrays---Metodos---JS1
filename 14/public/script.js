document.getElementById('btn-letras').onclick = async () => {
  const res = await fetch('/reverse/letras');
  const data = await res.json();
  mostrarLista(data, 'lista-letras');
};
document.getElementById('btn-numeros').onclick = async () => {
  const res = await fetch('/reverse/numeros');
  const data = await res.json();
  mostrarLista(data, 'lista-numeros');
};
document.getElementById('btn-texto').onclick = async () => {
  const texto = document.getElementById('input-texto').value;
  const res = await fetch('/reverse/texto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ texto })
  });
  const data = await res.json();
  document.getElementById('res-texto').textContent = `Invertido: ${data.resultado}`;
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