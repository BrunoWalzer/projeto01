// Selecione o formulário e a mensagem de confirmação
const form = document.getElementById("mainForm")
const confirmationMessage = document.getElementById("confirmationMessage")
const submitButton = form.querySelector(".button")

// Adicione um evento de 'submit' ao formulário
form.addEventListener("submit", (event) => {
  // Previne o envio imediato do formulário
  event.preventDefault()

  // Exibe a mensagem de confirmação se não estiver visível
  if (
    !confirmationMessage.style.display ||
    confirmationMessage.style.display === "none"
  ) {
    confirmationMessage.style.display = "block"
    submitButton.textContent = "Confirmar envio" // Altera o texto do botão
  } else {
    // Envia o formulário se a mensagem já estiver visível
    form.submit()
  }
})
