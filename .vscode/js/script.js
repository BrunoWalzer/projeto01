let isConfirmed = false // Variável para rastrear a confirmação

document
  .getElementById("mainForm")
  .addEventListener("submit", function (event) {
    event.preventDefault() // Impede o comportamento padrão do formulário

    const confirmationMessage = document.getElementById("confirmationMessage")

    if (!isConfirmed) {
      // Primeiro clique: exibe a mensagem de confirmação
      confirmationMessage.style.display = "block"
      isConfirmed = true // Define como confirmado para o próximo clique
    } else {
      // Segundo clique: redireciona para outra página
      window.location.href = "social.html" // Substitua pelo caminho da sua página
    }
  })
