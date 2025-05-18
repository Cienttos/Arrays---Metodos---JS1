const formularios = [
    { formId: 'form-frutas', inputId: 'input-frutas', listaId: 'lista-frutas', tipo: 'frutas' },
    { formId: 'form-amigos', inputId: 'input-amigos', listaId: 'lista-amigos', tipo: 'amigos' },
    { formId: 'form-numeros', inputId: 'input-numeros', listaId: 'lista-numeros', tipo: 'numeros' },
];

formularios.forEach(({ formId, inputId, listaId, tipo }) => {
    const form = document.getElementById(formId);
    const input = document.getElementById(inputId);
    const lista = document.getElementById(listaId);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const valor = input.value.trim();
        if (!valor) return;

        await fetch(`/enviar/${tipo}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ valor })
        });

        input.value = '';
        obtenerDatos(tipo, lista);
    });

    obtenerDatos(tipo, lista);
});

async function obtenerDatos(tipo, lista) {
    try {
        const res = await fetch(`/obtener/${tipo}`);
        const data = await res.json();
        actualizarLista(data, lista);
    } catch (err) {
        console.error('Error al obtener datos:', err);
    }
}

function actualizarLista(data, lista) {
    if (!Array.isArray(data)) return;
    lista.innerHTML = '';
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
}
