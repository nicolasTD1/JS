// Select the elements on the page - canvas and shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const button = document.querySelector('.shake');
const MOVE_AMOUNT = 40;

//setup out canvas for drawing

//const width = canvas.width;
//const height = canvas.height;
const { width, height } = canvas;

//random starting point
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); //starts the drawing
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();

//write a draw function
function draw({ key }) { // the {} is called object destructuring
   hue += 5;
   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
   ctx.beginPath();
   ctx.moveTo(x,y);

   switch(key) {
      case 'ArrowUp' :
         y -= MOVE_AMOUNT;
         break;
      case 'ArrowRight' :
         x += MOVE_AMOUNT;
         break;
      case 'ArrowDown' :
         y += MOVE_AMOUNT;
         break;
      case 'ArrowLeft' :
         x -= MOVE_AMOUNT;
         break;
      default :
         break;
   }
   ctx.lineTo(x,y);
   ctx.stroke();
}

//write a handler for the keys
function handleKey(e) {
   if(e.key.includes('Arrow')){
      e.preventDefault();
      draw({key: e.key});
      console.log(e.key);
      console.log('Handling key');
   }
}

// clear/shake function
function clearCanvas() {
   canvas.classList.add('shake');
   ctx.clearRect(0,0,width,height);
   canvas.addEventListener('animationend',
   function(){
      canvas.classList.remove('shake')
   }, 
   { once: true}
   );
}
//listen for arrow keys
window.addEventListener('keydown', handleKey);
button.addEventListener('click', clearCanvas);