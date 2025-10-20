const button = document.getElementById("button");
const output = document.querySelector(".display");

button.addEventListener('click', async () => {
    const response = await fetch('expression.txt')
        .then(res => res.text())
        .then(text => {
            output.innerHTML = "";
            const p = document.createElement("p");
            p.textContent = text;
            output.appendChild(p);
        })
        .catch(err => console.error(err));
})