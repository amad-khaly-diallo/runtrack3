
let tiles = [1, 2, 3, 4, 5, 6, 7, 8, ''];


function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

shuffle(tiles);

const puzzle = document.getElementById("puzzle");

function render() {
    puzzle.innerHTML = ""; 
    tiles.forEach((value, index) => {
        const div = document.createElement("div");
        div.className = "tile";
        if (value === '') div.classList.add("empty");
        div.textContent = value;
        div.dataset.index = index;
        div.addEventListener("click", () => move(index));
        puzzle.appendChild(div);
    });
}

function move(index) {
    const emptyIndex = tiles.indexOf('');
    const row = Math.floor(index / 3);
    const col = index % 3;
    const emptyRow = Math.floor(emptyIndex / 3);
    const emptyCol = emptyIndex % 3;

    if ((row === emptyRow && Math.abs(col - emptyCol) === 1) ||
        (col === emptyCol && Math.abs(row - emptyRow) === 1)) {
        [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
        render();
    }
}

render(); 