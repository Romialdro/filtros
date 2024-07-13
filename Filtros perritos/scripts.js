// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('productContainer');
    const typeFilter = document.getElementById('typeFilter');
    const breedFilter = document.getElementById('breedFilter');
    const colorFilter = document.getElementById('colorFilter');
    const ageFilter = document.getElementById('ageFilter');
    const descriptionFilter = document.getElementById('descriptionFilter');
    const clearFilters = document.getElementById('clearFilters');

    // Datos de ejemplo
    let pets = [
        { "type": "Perro", "breed": "Labrador", "color": "Amarillo", "age": 3, "description": "Perro amigable y activo.", "image": "img/perrito.jpg" },
        { "type": "Gato", "breed": "Siames", "color": "Blanco", "age": 2, "description": "Gato elegante y cariñoso.", "image": "img/perrito.jpg" },
        { "type": "Hurón", "breed": "Sable", "color": "Café", "age": 1, "description": "Hurón juguetón y curioso.", "image": "img/perrito.jpg" },
        { "type": "Perro", "breed": "Bulldog", "color": "Blanco", "age": 5, "description": "Perro de aspecto robusto y leal.", "image": "img/perrito.jpg" },
        { "type": "Gato", "breed": "Persa", "color": "Gris", "age": 4, "description": "Gato de pelo largo y tranquilo.", "image": "img/perrito.jpg" },
        { "type": "Hurón", "breed": "Albino", "color": "Blanco", "age": 2, "description": "Hurón de pelaje blanco y amigable.", "image": "img/perrito.jpg" },
        { "type": "Perro", "breed": "Bulldog", "color": "Blanco", "age": 5, "description": "Perro de aspecto robusto y leal.", "image": "img/perrito.jpg"},
        { "type": "Gato", "breed": "Persa", "color": "Gris", "age": 4, "description": "Gato de pelo largo y tranquilo.", "image": "img/perrito.jpg" },
        { "type": "Gato", "breed": "Persa", "color": "Gris", "age": 4, "description": "Gato de pelo largo y tranquilo.", "image": "img/perrito.jpg" },
        { "type": "Hurón", "breed": "Albino", "color": "Blanco", "age": 2, "description": "Hurón de pelaje blanco y amigable.", "image": "img/perrito.jpg" },
        { "type": "Gato", "breed": "Persa", "color": "Gris", "age": 4, "description": "Gato de pelo largo y tranquilo.", "image": "img/perrito.jpg" },
        { "type": "Hurón", "breed": "Albino", "color": "Blanco", "age": 2, "description": "Hurón de pelaje blanco y amigable.", "image": "img/perrito.jpg" }
    ];

    // Función para renderizar mascotas
    const renderPets = (pets) => {
        productContainer.innerHTML = '';
        pets.forEach(pet => {
            const petCard = document.createElement('div');
            petCard.classList.add('card');
            petCard.innerHTML = `
                <img src="${pet.image}" alt="${pet.breed}">
                <div class="card-content">
                    <h2>${pet.type} - ${pet.breed}</h2>
                    <p>Color: ${pet.color}</p>
                    <p>Edad: ${pet.age} años</p>
                    <p>${pet.description}</p>
                    <button>Ver Más</button>
                </div>
            `;
            const viewButton = petCard.querySelector('button');
            viewButton.addEventListener('click', () => {
                alert('¡Más información sobre esta mascota!');
                viewButton.style.backgroundColor = 'blue';
            });
            productContainer.appendChild(petCard);
        });
    };

    // Función para filtrar mascotas
    const filterPets = () => {
        let filteredPets = pets;

        const type = typeFilter.value.toLowerCase();
        const breed = breedFilter.value.toLowerCase();
        const color = colorFilter.value.toLowerCase();
        const age = parseFloat(ageFilter.value);
        const description = descriptionFilter.value.toLowerCase();

        if (type) {
            filteredPets = filteredPets.filter(pet =>
                pet.type.toLowerCase().includes(type)
            );
        }

        if (breed) {
            filteredPets = filteredPets.filter(pet =>
                pet.breed.toLowerCase().includes(breed)
            );
        }

        if (color) {
            filteredPets = filteredPets.filter(pet =>
                pet.color.toLowerCase().includes(color)
            );
        }

        if (!isNaN(age)) {
            filteredPets = filteredPets.filter(pet =>
                pet.age === age
            );
        }

        if (description) {
            filteredPets = filteredPets.filter(pet =>
                pet.description.toLowerCase().includes(description)
            );
        }

        renderPets(filteredPets);
    };

    // Configuración de eventos
    typeFilter.addEventListener('input', filterPets);
    breedFilter.addEventListener('input', filterPets);
    colorFilter.addEventListener('input', filterPets);
    ageFilter.addEventListener('input', filterPets);
    descriptionFilter.addEventListener('input', filterPets);

    clearFilters.addEventListener('click', () => {
        typeFilter.value = '';
        breedFilter.value = '';
        colorFilter.value = '';
        ageFilter.value = '';
        descriptionFilter.value = '';
        renderPets(pets);
    });

    // Renderizar mascotas iniciales
    renderPets(pets);
});
