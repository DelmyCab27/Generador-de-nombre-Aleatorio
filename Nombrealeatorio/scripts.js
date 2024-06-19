document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generate-btn');
    const input = document.getElementById('name-input');

    function getRandomName() {
        fetch('https://randomuser.me/api/?nat=mx') //aqui se le agrego una Api de nombres Random y alli se realiza un GET para obtener los nombres
            .then(response => response.json()) // Convierte la respuesta de la solicitud a formato JSON
            .then(data => {
                const firstName = data.results[0].name.first;
                const lastName = data.results[0].name.last;
                const fullName = `${firstName} ${lastName}`;
                input.value = fullName;
            })
            .catch(error => {
                console.error('Error fetching random user:', error);
            });
    }

    button.addEventListener('click', getRandomName);
});
