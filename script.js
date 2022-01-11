// Elementos HTML
const INPUT_EMAIL = document.getElementById('email');
const INPUT_SENHA = document.getElementById('senha');
const BTN_ENTRAR = document.getElementById('btn-entrar');

// Verifica se o email e a senha estão corretos para entrar
function fazerLogin(event) {
  event.preventDefault();
  const email = INPUT_EMAIL.value;
  const senha = INPUT_SENHA.value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

// Adicionando ouvinte
BTN_ENTRAR.addEventListener('click', fazerLogin);
