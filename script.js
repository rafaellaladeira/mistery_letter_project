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
/* Referência para a utilização do random: https://www.youtube.com/watch?v=peIwuzgng8c&ab_channel=Ot%C3%A1vioMiranda */

function generateLetter() {
  if (input.value === '' || input.value === ' ') {
    p.innerText = 'Por favor, digite o conteúdo da carta.';
  } else if (p.firstChild) {
    p.innerHTML = '' && generateLetter2;
  }
}
button.addEventListener('click', generateLetter);
button.addEventListener('click', generateLetter2);

// Requisito 16 e 17: Feito com ajuda do Miguel (aluno);

const style1 = ['newspaper', 'magazine1', 'magazine2'];
const size1 = ['medium', 'big', 'reallybig'];
const rotation1 = ['rotateleft', 'rotateright'];
const inclination1 = ['skewleft', 'skewright'];

function style() {
  const randomStyle = Math.floor(Math.random() * inclination1.length);
  const newStyle = style1[randomStyle];
  return newStyle;
}

function size() {
  const randomSize = Math.floor(Math.random() * size1.length);
  const newSize = size1[randomSize];
  return newSize;
}

function rotation() {
  const randomRotation = Math.floor(Math.random() * rotation1.length);
  const newRotation = rotation1[randomRotation];
  return newRotation;
}

function inclination() {
  const randomInclination = Math.floor(Math.random() * inclination1.length);
  const newInclination = inclination1[randomInclination];
  return newInclination;
}

function changeClass() {
  const allSpans = document.querySelectorAll('span');
  for (const i of allSpans) {
    i.classList.add(style());
    i.classList.add(size());
    i.classList.add(rotation());
    i.classList.add(inclination());
  }
}
button.addEventListener('click', changeClass);

function eventoNoSpan(event) {
  if (event.target.tagName.toLowerCase() === 'span') {
    const allSpans = document.querySelectorAll('span');
    for (const i of allSpans) {
      i.removeAttribute('class');
      i.classList.add(style());
      i.classList.add(size());
      i.classList.add(rotation());
      i.classList.add(inclination());
    }
  }
}
document.querySelector('body').addEventListener('click', eventoNoSpan);
