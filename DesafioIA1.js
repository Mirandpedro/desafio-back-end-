document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Limpa os campos do formulário (opcional)
    this.reset();

    // Exibe a mensagem de agradecimento
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.textContent = 'Obrigado por responder o formulário!';
    thankYouMessage.classList.remove('hidden');
});
