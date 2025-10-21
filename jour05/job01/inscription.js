const emailInput = document.getElementById('email');
const firstNameInput = document.getElementById('firstname');
const lastNameInput = document.getElementById('lastname');
const pwdInput = document.getElementById('password');
const pwdConfirmInput = document.getElementById('passwordConfirm');
const addressInput = document.getElementById('address');
const codePostalInput = document.getElementById('codePostal');
const form = document.getElementById('registerForm');
const globalError = document.getElementById('globalError');

// Fonction générique pour afficher les erreurs
function showError(inputId, message) {
    const errorElement = document.getElementById(`${inputId}Error`);
    if (message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        document.getElementById(inputId).style.borderColor = 'red';
    } else {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
        document.getElementById(inputId).style.borderColor = 'green';
    }
}

// pour les mails
emailInput.addEventListener('input', () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value === '') {
        showError('email', '');
    } else if (!regexEmail.test(emailInput.value)) {
        showError('email', 'Email incorrect');
    } else {
        showError('email', '');
    }
});

// pour
firstNameInput.addEventListener('input', () => {
    const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\-\'\s]{3,}$/;
    if (firstNameInput.value === '') {
        showError('firstname', '');
    } else if (!regexName.test(firstNameInput.value)) {
        showError('firstname', 'Prénom invalide (minimum 3 lettres)');
    } else {
        showError('firstname', '');
    }
});

lastNameInput.addEventListener('input', () => {
    const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\-\'\s]{3,}$/;
    if (lastNameInput.value === '') {
        showError('lastname', '');
    } else if (!regexName.test(lastNameInput.value)) {
        showError('lastname', 'Nom invalide (minimum 3 lettres)');
    } else {
        showError('lastname', '');
    }
});

pwdInput.addEventListener('input', () => {
    const regexPwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (pwdInput.value === '') {
        showError('password', '');
    } else if (!regexPwd.test(pwdInput.value)) {
        showError('password', 'Min. 8 caractères, 1 lettre et 1 chiffre');
    } else {
        showError('password', '');
    }
});

pwdConfirmInput.addEventListener('input', () => {
    if (pwdConfirmInput.value === '') {
        showError('passwordConfirm', '');
    } else if (pwdConfirmInput.value !== pwdInput.value) {
        showError('passwordConfirm', 'Les mots de passe ne correspondent pas');
    } else {
        showError('passwordConfirm', '');
    }
});

addressInput.addEventListener('input', () => {
    if (addressInput.value === '') {
        showError('address', '');
    } else if (addressInput.value.length < 5) {
        showError('address', 'Adresse trop courte');
    } else {
        showError('address', '');
    }
});

//  Code postal (France)
codePostalInput.addEventListener('input', () => {
    const regexCP = /^[0-9]{5}$/;
    if (codePostalInput.value === '') {
        showError('codePostal', '');
    } else if (!regexCP.test(codePostalInput.value)) {
        showError('codePostal', 'Code postal invalide (5 chiffres)');
    } else {
        showError('codePostal', '');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = [emailInput, firstNameInput, lastNameInput, pwdInput, pwdConfirmInput, addressInput, codePostalInput];
    let allFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
            input.style.borderColor = 'red';
        }
    });

    if (!allFilled) {
        globalError.textContent = ' Tous les champs sont requis.';
        globalError.style.display = 'block';
        return;
    }

    globalError.style.display = 'none';

    alert(' Formulaire envoyé avec succès !');
    form.reset();
    inputs.forEach(input => input.style.borderColor = '');
});