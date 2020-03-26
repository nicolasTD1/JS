console.log('it works')
const item = document.querySelector('.item');

const width = 400;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup <img onload="console.log('hacked') src="https://picsum.photos/50"/>`;
const myHTML = `
  <div class="wrapper hello there">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="hey"/>
    <p> asasd </p>
  </div>
`;

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);
// console.log(myFragment);
// console.log(myFragment.querySelector('h2'));

// ALso can use [element].html = [string]  -> this can add html text to a already created element
document.body.appendChild(myFragment); //appendChild -> sirve para agregar html generado por js

const myDiv = document.querySelector('.wrapper');
console.log(myDiv.classList);

const ul = document.createElement('ul');
const li = document.createElement('li');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

li.textContent = "hello";
li1.textContent = "hello1";
li2.textContent = "hello2";
li3.textContent = "hello3";

console.log(ul);

document.body.insertAdjacentElement("beforeend",ul);