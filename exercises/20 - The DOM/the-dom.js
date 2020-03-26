const p = document.querySelector('p'); //first matching element
const divs = document.querySelectorAll('div'); //all matching elements
const item2 = document.querySelector('.item2');
const item2img = item2.querySelector('img');
const heading = document.querySelector('h2');

//Console.dir -> prints in console the object's properties

// heading.textContent = 'im yo fathar'; //setter
// console.log(heading.textContent); //getter

//innerText - return only the selected tag
//textContent - returns anything within the tag (also return the child tags)

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// pizzaList.insertAdjacentText("beforeend",'🍕');


// Classes!!


const pic = document.querySelector('.nice');
console.log(pic.classList);

function toggleround (){
   pic.classList.toggle('round');
}

pic.addEventListener('click', toggleround);

pic.width = 100;
pic.alt = "cool Image";
