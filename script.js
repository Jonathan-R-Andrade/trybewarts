// Elementos HTML
const INPUT_EMAIL = document.getElementById('email');
const INPUT_SENHA = document.getElementById('senha');
const BTN_ENTRAR = document.getElementById('btn-entrar');
const INPUT_PERMISSAO = document.getElementById('agreement');
const BTN_ENVIAR = document.getElementById('submit-btn');
const TEXTAREA = document.getElementById('textarea');
const TEXTAREA_COUNTER = document.getElementById('counter');

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

// Ativa/desativa o botão de enviar se o checkbox de permissão for ativado/desativado
function ativarDesativarBtnEnviar() {
  BTN_ENVIAR.disabled = !INPUT_PERMISSAO.checked;
}

// Atualiza o contador do textarea
function atualizarContadorTextarea() {
  TEXTAREA_COUNTER.textContent = 500 - TEXTAREA.value.length;
}

// Adicionando ouvintes
BTN_ENTRAR.addEventListener('click', fazerLogin);
INPUT_PERMISSAO.addEventListener('input', ativarDesativarBtnEnviar);
TEXTAREA.addEventListener('input', atualizarContadorTextarea);
