document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form")
  const confirmationMessage = document.getElementById("confirmationMessage")
  const submitButton = document.querySelector(".button")
  let confirmed = false // Variável para verificar se o usuário confirmou

  form.addEventListener("submit", function (event) {
    event.preventDefault() // Impede o envio do formulário imediatamente

    if (!confirmed) {
      // Exibe a mensagem de confirmação no primeiro clique
      confirmationMessage.style.display = "block"
      confirmed = true
    } else {
      // No segundo clique, envia o formulário e redireciona
      window.location.href = "social.html"
    }
  })
})
