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

// Retorna as matérias selecionadas
function obterMaterias(form) {
  const subjects = form.subject;
  const retorno = [];
  for (const subject of subjects) {
    if (subject.checked) {
      retorno.push(subject.value);
    }
  }
  return retorno.join(', ');
}

// Retorna um objeto com os dados no formulário
function obterDadosFormulario(form) {
  const dados = {};
  dados["Nome"] = `${form.name.value} ${form.lastname.value}`;
  dados["Email"] = form.email.value;
  dados["Casa"] = form.house.value;
  dados["Família"] = form.family.value;
  dados["Matérias"] = obterMaterias(form);
  dados["Avaliação"] = form.rate.value;
  dados["Observações"] = form.comment.value;
  return dados;
}

// Mostra os dados do formulário quando clicar no botão enviar
function mostrarDadosFormulario(event) {
  const form = event.target.form;
  const dados = obterDadosFormulario(form);
  form.innerHTML = '';

  for (const dado in dados) {
    const p = document.createElement('p');
    p.append(document.createTextNode(`${dado}: ${dados[dado]}`));
    form.appendChild(p);
  }
  event.target.innerHTML = "Voltar";
  form.appendChild(event.target);

  event.preventDefault();
}

// Adicionando ouvintes
BTN_ENTRAR.addEventListener('click', fazerLogin);
INPUT_PERMISSAO.addEventListener('input', ativarDesativarBtnEnviar);
TEXTAREA.addEventListener('input', atualizarContadorTextarea);
BTN_ENVIAR.addEventListener('click', mostrarDadosFormulario);
