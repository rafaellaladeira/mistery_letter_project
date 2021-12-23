// Declaração de variáveis e constantes:
const button = document.querySelector('#criar-carta');
const input = document.querySelector('#carta-texto');
const p = document.querySelector('#carta-gerada');
const number = document.createElement('p');
number.id = 'carta-contador';

// Gerando a carta:
function generateLetter2() {
  if (input.value === '' || input.value === ' ') {
    p.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const array = input.value.split(' ');
    number.innerText = array.length;
    for (let i = 0; i < array.length; i += 1) {
      const span = document.createElement('span');
      span.appendChild(document.createTextNode(array[i]));
      p.append(span);
      p.append(number);
    }
  }
}

function generateLetter() {
  if (input.value === '' || input.value === ' ') {
    p.innerText = 'Por favor, digite o conteúdo da carta.';
  } else if (p.firstChild) {
    p.innerHTML = '' && generateLetter2;
  }
}
button.addEventListener('click', generateLetter);
button.addEventListener('click', generateLetter2);
