const compteur = document.getElementById("compteur");
const button = document.getElementById("button");
const resetButton = document.getElementById("resetButton");
const decrementButton = document.getElementById("decrementButton");

let count = 0;

button.addEventListener("click", () => {
    count++;
    compteur.textContent = count;
});

resetButton.addEventListener("click", () => {
    count = 0;
    compteur.textContent = count;
});

decrementButton.addEventListener("click", () => {
    if (count === 0)  return;
    count--;
    compteur.textContent = count;
});

