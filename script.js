var mensagemInicial = document.querySelector('#mensagem-inicial')
var resultado = document.querySelector('#mensagem-resultado')
var frase = document.querySelector('#frase')

var botaoCriptografar = document.querySelector('#botao-criptografar')
botaoCriptografar.addEventListener('click', function (event) {
  event.preventDefault()
  var textoInput = document.querySelector('#texto').value
  console.log('função para criptografar a mensagem')
  console.log(textoInput)
  var textoCriptografado = ''
  for (var i = 0; i < textoInput.length; i++) {
    if (textoInput.charAt(i) == 'a') {
      textoCriptografado += 'ai'
    } else if (textoInput.charAt(i) == 'e') {
      textoCriptografado += 'enter'
    } else if (textoInput.charAt(i) == 'i') {
      textoCriptografado += 'imes'
    } else if (textoInput.charAt(i) == 'o') {
      textoCriptografado += 'ober'
    } else if (textoInput.charAt(i) == 'u') {
      textoCriptografado += 'ufat'
    } else {
      textoCriptografado += textoInput.charAt(i)
    }
  }
  mensagemInicial.classList.remove('bloco-lateral')
  mensagemInicial.classList.add('oculto')
  resultado.classList.remove('oculto')
  resultado.classList.add('bloco-lateral')
  frase.textContent = textoCriptografado
  console.log(textoCriptografado)
})

var botaoDescriptografar = document.querySelector('#botao-descriptografar')
botaoDescriptografar.addEventListener('click', function (event) {
  event.preventDefault()
  var textoInput = document.querySelector('#texto').value
  console.log('função para descriptografar a mensagem')
  console.log(textoInput)
  var textoDescriptografado = ''
  for (var i = 0; i < textoInput.length; i++) {
    if (textoInput.charAt(i) == 'a') {
      if (textoInput.slice(i, i + 2) == 'ai') {
        textoDescriptografado += 'a'
        i += 1
      }
    } else if (textoInput.charAt(i) == 'e') {
      if (textoInput.slice(i, i + 5) == 'enter') {
        textoDescriptografado += 'e'
        i += 4
      }
    } else if (textoInput.charAt(i) == 'i') {
      if (textoInput.slice(i, i + 4) == 'imes') {
        textoDescriptografado += 'i'
        i += 3
      }
    } else if (textoInput.charAt(i) == 'o') {
      if (textoInput.slice(i, i + 4) == 'ober') {
        textoDescriptografado += 'o'
        i += 3
      }
    } else if (textoInput.charAt(i) == 'u') {
      if (textoInput.slice(i, i + 4) == 'ufat') {
        textoDescriptografado += 'u'
        i += 3
      }
    } else {
      textoDescriptografado += textoInput.charAt(i)
    }
  }
  mensagemInicial.classList.remove('bloco-lateral')
  mensagemInicial.classList.add('oculto')
  resultado.classList.remove('oculto')
  resultado.classList.add('bloco-lateral')
  frase.textContent = textoDescriptografado
  console.log(textoDescriptografado)
})

var botaoCopiar = document.querySelector('#botao-copiar')
botaoCopiar.addEventListener('click', function (event) {
  event.preventDefault()
  navigator.clipboard.writeText(frase.textContent)
  console.log('copiado')
})

var botaoSol = document.querySelector('#sol')
botaoSol.addEventListener('click', function () {
  document.querySelector('body').classList.remove('escuro')
  document.querySelector('body').classList.add('claro')
  document.querySelector('input').classList.remove('escuro')
  document.querySelector('input').classList.add('claro')
  document.querySelector('.info').classList.remove('escuro')
  document.querySelector('.info').classList.add('claro')
  document.querySelector('#botao-criptografar').classList.remove('escuro')
  document.querySelector('#botao-criptografar').classList.add('claro')
  document.querySelector('#icone-tema-escuro').classList.remove('oculto')
  document.querySelector('#icone-tema-claro').classList.add('oculto')
})

var botaoLua = document.querySelector('#lua')
botaoLua.addEventListener('click', function () {
  document.querySelector('body').classList.remove('claro')
  document.querySelector('body').classList.add('escuro')
  document.querySelector('input').classList.remove('claro')
  document.querySelector('input').classList.add('escuro')
  document.querySelector('.info').classList.remove('claro')
  document.querySelector('.info').classList.add('escuro')
  document.querySelector('#botao-criptografar').classList.remove('claro')
  document.querySelector('#botao-criptografar').classList.add('escuro')
  document.querySelector('#icone-tema-claro').classList.remove('oculto')
  document.querySelector('#icone-tema-escuro').classList.add('oculto')
})
