
document.addEventListener('DOMContentLoaded', function() {
    const pokemons = [
        { nombre: 'Bulbasaur', hp: 45, ataque: 49, defensa: 49, imagen: 'https://img.pokemondb.net/artwork/bulbasaur.jpg' },
        { nombre: 'Charmander', hp: 39, ataque: 52, defensa: 43, imagen: 'https://img.pokemondb.net/artwork/charmander.jpg' },
        { nombre: 'Squirtle', hp: 44, ataque: 48, defensa: 65, imagen: 'https://img.pokemondb.net/artwork/squirtle.jpg' },
        { nombre: 'Pikachu', hp: 35, ataque: 55, defensa: 40, imagen: 'https://img.pokemondb.net/artwork/pikachu.jpg' },
        { nombre: 'Jigglypuff', hp: 115, ataque: 45, defensa: 20, imagen: 'https://img.pokemondb.net/artwork/jigglypuff.jpg' },
        { nombre: 'Meowth', hp: 40, ataque: 45, defensa: 35, imagen: 'https://img.pokemondb.net/artwork/meowth.jpg' },
        // ... (Repetir o agregar hasta 40 Pokémon en total)
    ];

    const contenedor = document.getElementById('pokemonCards');
    pokemons.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'card col-xs-12 col-sm-6 col-md-4 col-lg-3';
        card.innerHTML = `
            <img src="${pokemon.imagen}" class="card-img-top" alt="${pokemon.nombre}">
            <div class="card-body">
                <h5 class="card-title">${pokemon.nombre}</h5>
                <p class="card-text">HP: ${pokemon.hp}</p>
                <p class="card-text">Ataque: ${pokemon.ataque}</p>
                <p class="card-text">Defensa: ${pokemon.defensa}</p>
            </div>
        `;
        contenedor.appendChild(card);
    });
});
