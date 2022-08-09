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

const p = document.createElement('p');
p.id = 'carta-gerada';
main.appendChild(p);
