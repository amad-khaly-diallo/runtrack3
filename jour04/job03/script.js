let pokemons = [];

fetch("pokemon.json")
  .then(res => res.json())
  .then(data => {
    pokemons = data;
    displayPokemons(pokemons);
  })
  .catch(err => console.error("Erreur lors du chargement :", err));


function displayPokemons(list) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (list.length === 0) {
    resultDiv.innerHTML = "<p class='no-result'>Aucun Pokémon trouvé </p>";
    return;
  }

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-header">
        <span class="id">#${p.id}</span>
        <h3>${p.name.french}</h3>
        <p class="eng">${p.name.english}</p>
      </div>
      <div class="type">${p.type.join(", ")}</div>
      <div class="stats">
        <span>❤️ ${p.base.HP}</span>
        <span>⚔️ ${p.base.Attack}</span>
      </div>
    `;
    resultDiv.appendChild(card);
  });
}

// Fonction de recherche
function searchPokemons() {
  const idValue = document.getElementById("idInput").value.trim();
  const nameValue = document
    .getElementById("nameInput")
    .value.trim()
    .toLowerCase();
  const typeValue = document.getElementById("typeInput").value.trim().toLowerCase();

  const results = pokemons.filter(pokemon => {
    const matchId = idValue === "" || String(pokemon.id).includes(idValue);
    const names = Object.values(pokemon.name).map(n => n.toLowerCase());
    const matchName = nameValue === "" || names.some(n => n.includes(nameValue));
    const matchType =
      typeValue === "" || pokemon.type.some(t => t.toLowerCase() === typeValue);
    return matchId && matchName && matchType;
  });

  displayPokemons(results);
}

// Écouteurs d’événements automatiques
document.querySelectorAll("input, select").forEach(el => {
  el.addEventListener("input", searchPokemons);
});