document.getElementById('btn-suma').onclick = async () => {
  const res = await fetch('/reduce/suma');
  const data = await res.json();
  document.getElementById('res-suma').textContent = `Suma: ${data.resultado}`;
};
document.getElementById('btn-multi').onclick = async () => {
  const res = await fetch('/reduce/multi');
  const data = await res.json();
  document.getElementById('res-multi').textContent = `Multiplicación: ${data.resultado}`;
};
document.getElementById('btn-total').onclick = async () => {
  const res = await fetch('/reduce/total');
  const data = await res.json();
  document.getElementById('res-total').textContent = `Total precios: $${data.resultado}`;
};