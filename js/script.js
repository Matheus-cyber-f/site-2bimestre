document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();
  let nome = e.target.nome.value.trim();
  let email = e.target.email.value.trim();
  let assunto = e.target.assunto.value.trim();
  let mensagem = e.target.mensagem.value.trim();
  let feedback = document.getElementById("feedback");

  if (!nome || !email || !assunto || mensagem.length < 20) {
    feedback.textContent = "Por favor, preencha todos os campos corretamente.";
    feedback.style.color = "red";
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    feedback.textContent = "Email inválido.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Mensagem enviada com sucesso!";
  feedback.style.color = "green";
});