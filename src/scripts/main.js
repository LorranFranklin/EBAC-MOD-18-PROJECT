document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('form-sorteador')
    .addEventListener('submit', function () {
      let numeroMaximo = document.getElementById('numero-maximo');
      numeroMaximo = parseInt(numeroMaximo);

      let numeroAleatorio = Math.random() * numeroMaximo;
      alert('O número sorteado foi: ' + numeroAleatorio);
    });
});
