// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);
// make an unordered list
const myUl = `
   <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
   </ul>`
;
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
myDiv.innerHTML = myUl;
// create an image
const myImg = document.createElement('img');
// set the source to an image
myImg.src = "https://picsum.photos/500";
// set the width to 250
myImg.width = 250;
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
   <div class="div2p">
      <p>First Paragraph</p>
      <p>Second Paragraph</p>
   </div>
`;
// put this div before the unordered list from above
const ulElement = document.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
myDiv.querySelector('.div2p').children[1].classList.add('warning');
// remove the first paragraph
myDiv.querySelector('.div2p').children[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = (name, age, height) => {
   return `
   <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${age*7}. That would be a tall dog!</p>
      <button class="delete" type="button">Delete</button>
    </div>`
};
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');
// Have that function make 4 cards
let cardsHTML =  generatePlayerCard('nicolas', 20, 190);
    cardsHTML +=  generatePlayerCard('nicolas1', 21, 191);
    cardsHTML +=  generatePlayerCard('nicolas2', 22, 192);
    cardsHTML +=  generatePlayerCard('nicolas3', 23, 193);

// append those cards to the div
cardsDiv.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin',cardsDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event){
   const clickedB = event.currentTarget;
   // clickedB.parentElement.remove();
   clickedB.closest('.playerCard').remove(); //este busca en todos los elemento padres el que tenga el 'playerCard'

}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));