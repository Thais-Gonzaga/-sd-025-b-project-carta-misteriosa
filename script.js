const header = document.createElement('header');
document.body.appendChild(header);

const h1 = document.createElement('h1');
h1.innerText = 'Carta Misteriosa';
header.appendChild(h1);

const main = document.createElement('main');
document.body.appendChild(main);

const input = document.createElement('input');
input.id = 'carta-texto';
main.appendChild(input);

const button = document.createElement('button');
button.id = 'criar-carta';
button.innerText = 'Criar carta';
main.appendChild(button);

const p = document.createElement('p');
p.id = 'carta-gerada';
main.appendChild(p);

const contLetter = document.createElement('p');
contLetter.id = 'carta-contador';
contLetter.innerText = 0;
main.appendChild(contLetter);

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const slope = ['skewleft', 'skewright'];

function addClass() {
  const sort = Math.round(Math.random() * 2);
  const sort1 = Math.round(Math.random() * 1);
  return `${style[sort]} ${size[sort]} ${rotation[sort1]} ${slope[sort1]}`;
}

function contador(array) {
  contLetter.innerText = array.length;
  return contLetter.innerText;
}

function spam() {
  if (input.value === '' || input.value === ' ') return 'Por favor, digite o conteúdo da carta.';
  const array = input.value.split(' ');
  const word = [];
  contador(array);
  for (let index = 0; index < array.length; index += 1) {
    word.push(`<span class="${addClass()}">${array[index]}</span>`);
  }
  return word.join(' ');
}

function createLetter() {
  p.innerHTML = spam();
}
button.addEventListener('click', createLetter);

function chargeClass(event) {
  const click = event.target;
  click.className = addClass();
}
p.addEventListener('click', chargeClass);
