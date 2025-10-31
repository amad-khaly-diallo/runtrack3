document.addEventListener('DOMContentLoaded', async () => {
    const searchInput = document.getElementById("search");
    const suggestions = document.querySelector('.suggestions');
    let data = [];

    try {
        const response = await fetch('get_celebs.php');
        data = await response.json();
        data = data.map(item => item.nom);
    } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
    }

    searchInput.addEventListener('input', () => {
        const value = searchInput.value.toLowerCase().trim();
        suggestions.style.display = value ? 'block' : 'none';
        suggestions.innerHTML = '';
        if (!value) return;

        const exact = data.filter(nom =>
            nom.toLowerCase().includes(value)
        );

        const pattern = new RegExp(value.split('').join('.*'), 'i');
        const fuzzy = data.filter(nom =>
            pattern.test(nom) && !exact.includes(nom)
        );

        if (exact.length === 0 && fuzzy.length === 0) {
            suggestions.innerHTML = `<li class="empty">Aucun résultat trouvé</li>`;
            return;
        }

        exact.forEach(nom => {
            const li = document.createElement('li');
            li.textContent = nom;
            li.addEventListener('click', () => {
                window.location.href = `recherche.php?search=${encodeURIComponent(nom)}`;
            });
            suggestions.appendChild(li);
        });

        if (exact.length && fuzzy.length) {
            const divider = document.createElement('li');
            divider.classList.add('divider');
            suggestions.appendChild(divider);
        }

        fuzzy.forEach(nom => {
            const li = document.createElement('li');
            li.textContent = nom;
            li.addEventListener('click', () => {
                window.location.href = `recherche.php?search=${encodeURIComponent(nom)}`;
            });
            suggestions.appendChild(li);
        });
    });

    const form = document.querySelector('.search-bar');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const value = searchInput.value.trim();
        if (value) {
            window.location.href = `recherche.php?search=${encodeURIComponent(value)}`;
        }
    });
});
