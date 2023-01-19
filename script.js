const inputName = document.getElementById('name')
const msgName = document.getElementById('msg-name')
const inputEmail = document.getElementById('email')
const msgEmail = document.getElementById('msg-email')
const inputTel = document.getElementById('tel')
const msgTel = document.getElementById('msg-tel')
const inputCpf = document.getElementById('cpf')
const msgCpf = document.getElementById('msg-cpf')
const inputPass = document.getElementById('pass')
const msgPass = document.getElementById('msg-pass')
const msgGeral = document.getElementById('msg-geral')

function Cadastrar() {
  let vName = validaInput(inputName, msgName)
  let vEmail = validaEmail()
  let vTel = validaTelefone()
  let vCpf = validaCpf()
  let vPass = validaInput(inputPass, msgPass)

  if (vName && vEmail && vTel && vCpf && vPass) {
    msgGeral.innerHTML = 'Sucesso.'
    msgGeral.style.color = '#0F7B0F'
    msgGeral.style.visibility = 'visible'

    alert('Cadastro realizado com sucesso!')

    clearInput()
  
  } else {
    msgGeral.innerHTML = 'Campos obrigatórios não registrados.'
    msgGeral.style.color = '#E73550'
    msgGeral.style.visibility = 'visible'
  }


}

function validaInput(input, msg) {
  let value = input.value
  if (value == null || value == '') {
    msg.innerHTML = '*Campo Obrigatório*'
    msg.style.visibility = 'visible'
    return false
  } else {
    msg.style.visibility = 'hidden'
    return true
  }
}

function validaEmail() {
  let email = inputEmail.value
  if (!email.match('@') && !email == "") {
    msgEmail.innerHTML = '*Email inválido*'
    msgEmail.style.visibility = 'visible'
    return false
  } else {
    msgEmail.style.visibility = 'hidden'
    return validaInput(inputEmail, msgEmail)
  }
}

function validaTelefone() {
  let tel = inputTel.value
  if ((tel.length > 0 && tel.length < 10) || tel.length > 11) {
    msgTel.innerHTML = '*Telefone inválido*'
    msgTel.style.visibility = 'visible'
    return false
  } else {
    msgTel.style.visibility = 'hidden'
    return validaInput(inputTel, msgTel)
  }
}

function validaCpf() {
  let cpf = inputCpf.value
  if (cpf.length > 0 && cpf.length != 11) {
    msgCpf.innerHTML = '*CPF inválido*'
    msgCpf.style.visibility = 'visible'
    return false
  } else {
    msgCpf.style.visibility = 'hidden'
    return validaInput(inputCpf, msgCpf)
  }
}

function clearInput(){
  inputName.value = ""
  inputEmail.value = ""
  inputTel.value = ""
  inputCpf.value = ""
  inputPass.value = ""

}