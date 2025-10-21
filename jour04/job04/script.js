document.getElementById('load-users').addEventListener('click', async (e) => {
    e.preventDefault();
    await loadUsers();
})

async function loadUsers() {
    const data = await fetch('user.php');
    const users = await data.json();
    console.log(users);
    return displayUsers(users);
}

function displayUsers(users) {
    const userTableBody = document.getElementById('user-table-body');
    userTableBody.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${user.mail}</td>
        `;
        userTableBody.appendChild(row);
    });
}