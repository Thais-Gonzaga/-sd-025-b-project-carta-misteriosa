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

function spam() {
  console.log(input.value);
  if (input.value === '' || input.value === ' ') return 'Por favor, digite o conteúdo da carta.';
  const array = input.value.split(' ');
  const word = [];
  for (let index = 0; index < array.length; index += 1) {
    word.push(`<span>${array[index]}</span>`);
  }
  return word.join(' ');
}

function createLetter() {
  p.innerHTML = spam();
}
button.addEventListener('click', createLetter);
