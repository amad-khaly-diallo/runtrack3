const emailInput = document.getElementById('email');
const pwdInput = document.getElementById('password');
const globalError = document.getElementById('globalError');
const loginForm = document.getElementById('loginForm');

// pour afficher les erreurs
function showError(inputId, message) {
  const errorElement = document.getElementById(`${inputId}Error`);
  const input = document.getElementById(inputId);
  
  if (message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    input.style.borderColor = 'red';
  } else {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    input.style.borderColor = 'green';
  }
}

// Validation live de l’email
emailInput.addEventListener('input', () => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value === '') {
    showError('email', '');
  } else if (!regexEmail.test(emailInput.value)) {
    showError('email', 'Email invalide');
  } else {
    showError('email', '');
  }
});

// Validation live du mot de passe
pwdInput.addEventListener('input', () => {
  if (pwdInput.value === '') {
    showError('password', '');
  } else if (pwdInput.value.length < 6) {
    showError('password', 'Mot de passe trop court (min. 6 caractères)');
  } else {
    showError('password', '');
  }
});

// Validation au moment du "submit"
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = emailInput.value.trim();
  const password = pwdInput.value.trim();
  
  if (email === '' || password === '') {
    globalError.style.display = 'block';
    globalError.textContent = 'Tous les champs sont requis';
    emailInput.style.borderColor = email === '' ? 'red' : '';
    pwdInput.style.borderColor = password === '' ? 'red' : '';
    return;
  } else {
    globalError.style.display = 'none';
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    showError('email', 'Email invalide');
    return;
  }

  if (password.length < 6) {
    showError('password', 'Mot de passe trop court');
    return;
  }

  showError('email', '');
  showError('password', '');
  globalError.style.display = 'none';

  alert('Formulaire valide, prêt à être envoyé !');
});
