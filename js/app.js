import { valida } from '../js/validacao.js'

const inputs = document.querySelectorAll('input');
const textareas = document.querySelectorAll('textarea');
const botao = document.querySelector('[data-tipo="botao"]');

inputs.forEach(input =>{
  
  input.addEventListener('blur', (evento) =>{
    valida(evento.target);
  })
  
})

textareas.forEach(textareas => {
  
  textareas.addEventListener('blur', (evento) =>{
    valida(evento.target);
  })
  
})

function checarInputs() {
  botao.disabled = true

  for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input',() => {
    let valores = []
    inputs.forEach(v => valores.push(v.valores))
    botao.disabled = valores.includes('')
    })
  }
}

checarInputs();
