// function doctorize(firstName){
//    return `Dr. ${firstName}`;
// }

//Anonymous function
//function (firstName){ 
//   return `Dr. ${firstName}`;
//}

//Function expression  
//In this case you use "doctorize" to call the function
const doctorize = function (firstName){ 
   return `Dr. ${firstName}`;
};

//Hoisting = js takes the function and moves them to the top of the file

//Arrow functions are anonymous functions
//If you only have one parameter, you can delete the parenthesis
const inchesToCM = inches => inches * 2.54; //minimal function

//"classic" arrow functions
add1 = (a,b=3) => {
   return a+b;
};

//returning an object
// function makeABaby (first, last){
//    const baby = {
//       name: `${first} ${last}`,
//       age: 0
//    }
//    return baby;
// }

//Returning a object:
// NOTE - iuse the parenthesis in order to implicitly return an object
const makeABaby = (first, last) => ({
   name: `${first} ${last}`,
   age: 20
});


//IIFE
//Immediately Invoked Function Expression

(function(age) {
   // console.log(`Running anon function`);
   return `You are cool and age ${age}`;
})(20);

//Methods!~!
// Is a function that lives inside of an object
const wes = {
   name: 'Wes Bos',
   //method
   sayHi: function(){
      console.log(`HELLO THERE ${this.name}`);
      console.log("Hey wes");
      return "Hey wes"
   },
   //short hand method
   yellHi(){
      console.log('HEEY');
   },
   //Arrow function
   //NOTE: arrow functions inside object has the parent scope for 'this'. Basically this doesnt work.
   wisperHi: () => {
      console.log("hey im a mouse");
   }
}


//Callback functions
//ex: when someone clicks this... run that.
//  when a certain amount of time passed , run this

//click callback
const button = document.querySelector('.clickME');
// button.addEventListener('click', wes.yellHi);

function handleClick() {
   console.log('great clicking')
}
button.addEventListener('click', function(){
   console.log('nice job');
});

//timer callback
setTimeout(() =>{
   console.log('done');
}, 1000);