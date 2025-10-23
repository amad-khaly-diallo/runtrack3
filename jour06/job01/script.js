document.querySelector('.btn-primary').addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('butterflyModal'));
    modal.show();
});

const quotes = [
    "Tous ces moments se perdront dans l’oubli, comme des larmes dans la pluie.",
    "J’ai vu tant de choses que vous, humains, ne pourriez pas croire.",
    "La lumière qui brûle deux fois plus fort brûle deux fois moins longtemps.",
    "C’est douloureux de vivre dans la peur, n’est-ce pas ?",
    "Je ne savais pas pourquoi il m’avait sauvé. Peut-être qu’en ce moment-là, il aimait la vie plus que moi."
];

document.querySelector('.btn-danger').addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector('.card.p-4').innerHTML = `
    <h2>Citation aléatoire :</h2>
    <p class="fst-italic">${randomQuote}</p>
  `;
});


document.querySelectorAll('.pagination .page-link').forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.card.p-4').innerHTML = `
      <h2>Page ${index}</h2>
      <p>Contenu personnalisé pour la page ${index}...</p>
    `;
    });
});

const listItems = document.querySelectorAll('.list-group-item');
listItems.forEach(item => {
    item.addEventListener('click', () => {
        listItems.forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    });
});


let progress = 50;
const bar = document.getElementById('progress-bar');

document.getElementById('plus').addEventListener('click', () => {
    progress = Math.min(progress + 10, 100);
    bar.style.width = progress + '%';
});

document.getElementById('minus').addEventListener('click', () => {
    progress = Math.max(progress - 10, 0);
    bar.style.width = progress + '%';
});

document.querySelector('.col-md-6 form:last-child').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value.trim();
    const password = e.target.querySelector('input[type="password"]').value.trim();

    if (email && password) {
        const colors = ['text-primary', 'text-danger', 'text-success', 'text-warning', 'text-info'];
        const spinner = document.querySelector('.spinner-border');
        spinner.className = 'spinner-border ' + colors[Math.floor(Math.random() * colors.length)];
    }
});

let keySequence = [];
document.addEventListener('keydown', (e) => {
  keySequence.push(e.key.toUpperCase());
  if (keySequence.join('').includes('DGC')) {
    keySequence = [];
    const login = document.querySelector('input[placeholder="Login"]').value;
    const password = document.querySelector('input[placeholder="Mot de Passe"]').value;
    const url = document.querySelector('input[placeholder*="https"]').value;

    document.getElementById('formRecap').innerHTML = `
      <p><strong>Login :</strong> ${login}</p>
      <p><strong>Mot de passe :</strong> ${password}</p>
      <p><strong>URL :</strong> ${url}</p>
    `;
    new bootstrap.Modal(document.getElementById('formModal')).show();
  }
});
