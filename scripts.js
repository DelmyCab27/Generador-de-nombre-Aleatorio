document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generate-btn');
    const input = document.getElementById('name-input');

    const nombres = [
        'Juan', 'María', 'José', 'Ana', 'Pedro', 'Laura', 'Carlos', 'Sofía', 'Diego', 'Valentina'
    ];
    const apellidos = [
        'García', 'Rodríguez', 'Martínez', 'Hernández', 'López', 'González', 'Pérez', 'Sánchez', 'Torres', 'Ramírez'
    ];

    function getRandomItem(lista) {
        return lista[Math.floor(Math.random() * lista.length)];
    }
    function getRandomName() {
        const firstName = getRandomItem(nombres);
        const lastName = getRandomItem(apellidos);
        const fullName = `${firstName} ${lastName}`;
        input.value = fullName;
    }
    button.addEventListener('click', getRandomName);
});
