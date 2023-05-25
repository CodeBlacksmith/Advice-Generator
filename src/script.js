function getAdvice() {
  // Obtener consejo
  fetch('https://api.adviceslip.com/advice', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      const slipId = data.slip.id;
      const slipAdvice = data.slip.advice;

      const advice = document.getElementById('quoteAdvice');
      const idAdvice = document.getElementById('idAdvice');
      idAdvice.textContent = `${slipId}`;
      advice.textContent = `\" ${slipAdvice} \"`;
    })
    .catch(error => {
      // Manejar cualquier error que pueda ocurrir
      console.log('Error:', error);
    });
}

const btnAdvice = document.getElementById('btnAdvice');
btnAdvice.addEventListener("click", getAdvice);
