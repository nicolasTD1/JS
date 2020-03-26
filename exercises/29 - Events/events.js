const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

butts.addEventListener('click', function() {
  console.log('Im got clicked! :)');
});

function handleClick() {
  console.log('🐛 IT GOT CLICKED!!!');
}

const hooray = () => console.log('HOORAY!');


coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('You clicked a button!');
  const button = event.target;
  // console.log(button.textContent);
  console.log(parseFloat(event.target.dataset.price)); //<---- Importante~!
  //console.log(event.target); //the thing that actually goit clicked
  //console.log(event.currentTarget); //element that fired the eventListener
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  // event.stopPropagation(); //!!!
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});



window.addEventListener(
  'click',
  function(event) {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
  },
  { capture: true } //Capture down, bubble up
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', e => {
  console.log(e.currentTarget);
  console.log(this);
});
