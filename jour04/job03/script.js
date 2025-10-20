const identifiantInput = document.getElementById('identifiant');
const nameInput = document.getElementById('name');
const typeSelect = document.getElementById('type');
const submit = document.getElementById('submit');

submit.addEventListener('click', function(event) {
    event.preventDefault();

    const identifiant = identifiantInput.value;
    const name = nameInput.value;
    const type = typeSelect.value;

    console.log(`Identifiant: ${identifiant}, Name: ${name}, Type: ${type}`);
});

const findPokemon = (pokemonInfo) => {
    return pokemonInfo.find(pokemon => pokemon.id == identifiantInput.value);
}

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('pokemon.json');
    const data = await response.json();
    console.log(data);
});