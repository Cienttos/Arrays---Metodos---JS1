document.getElementById('btn-admin').onclick = async () => {
  const res = await fetch('/includes/admin');
  const data = await res.json();
  document.getElementById('res-admin').textContent = data.existe ? 'Sí contiene' : 'No contiene';
};
document.getElementById('btn-verde').onclick = async () => {
  const res = await fetch('/includes/verde');
  const data = await res.json();
  document.getElementById('res-verde').textContent = data.existe ? 'Sí existe' : 'No existe';
};
document.getElementById('btn-num').onclick = async () => {
  const num = Number(document.getElementById('input-num').value);
  const res = await fetch('/includes/numero', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ num })
  });
  const data = await res.json();
  document.getElementById('res-num').textContent = data.mensaje;
};