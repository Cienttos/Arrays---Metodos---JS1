document.getElementById('btn-palabra').onclick = async () => {
  const res = await fetch('/indexof/palabra');
  const data = await res.json();
  document.getElementById('res-palabra').textContent = `Índice: ${data.index}`;
};
document.getElementById('btn-numero').onclick = async () => {
  const res = await fetch('/indexof/numero');
  const data = await res.json();
  document.getElementById('res-numero').textContent = `Índice: ${data.index}`;
};
document.getElementById('btn-ciudad').onclick = async () => {
  const res = await fetch('/indexof/ciudad');
  const data = await res.json();
  document.getElementById('res-ciudad').textContent = data.mensaje;
};