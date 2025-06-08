document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('form-sorteador')
    .addEventListener('submit', function (evento) {
      // Previne o comportamento padrão do formulário
      evento.preventDefault();
      let numeroMaximo = document.getElementById('numero-maximo').value;
      numeroMaximo = parseInt(numeroMaximo);
      // Verifica se o número máximo é um número válido
      let numeroAleatorio = Math.random() * numeroMaximo;
      numeroAleatorio = Math.floor(numeroAleatorio) + 1; // Garante que o número esteja entre 1 e numeroMaximo
      // Exibe o número aleatório no elemento com id 'resultado-valor'
      document.getElementById('resultado-valor').innerText = numeroAleatorio;
      document.querySelector('.resultado').style.display = 'block';
    });
});
