export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  console.log(tipoDeInput)

  if(input.validity.valid ||input.validity.valid){
    // input.parentElement.classList.remove('input-erro');
    input.parentElement.querySelector('.input-erro').innerHTML = '';
  } else {
    // input.parentElement.classList.add('input-mensagem-erro');
    input.parentElement.querySelector('.input-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
  }
}

const tiposDeErro = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch'
]

const mensagensDeErro = {
  nome: {
    valueMissing: "O campo nome não pode estar vazio.",
    patternMismatch: "O campo nome não pode ultrapassar 50 caracteres ou possuir caracteres especiais."
  },
  email: {
    valueMissing: "O campo nome não pode estar vazio.",
    typeMismatch: "O campo email não está válido. Exemplo válido: text@texto.com"
  },
  assunto: {
    valueMissing: "O campo assunto não pode estar vazio.",
    patternMismatch: "O campo assunto não pode ultrapassar 50 caracteres ou possuir caracteres especiais"
  },
  mensagem: {
    valueMissing: "O campo mensagem não pode estar vazio.",
    patternMismatch: "O campo mensagem não pode ultrapassar 300 caracteres ou possuir caracteres especiais"
  }
}

function mostraMensagemDeErro(tipoDeInput, input) {
  let mensagem = "";

  tiposDeErro.forEach(erro =>{
    if(input.validity[erro]) {
      mensagem = mensagensDeErro[tipoDeInput][erro];
    }
  })
  return mensagem;
}