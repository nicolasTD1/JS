
function calculateBill(bill, tax) {
   const total = bill * tax;
   return total;
}

const myTotal = calculateBill(100, 1.13);

console.log(`Your total is $${myTotal}`);

//termine en functions - parametera and arguyments minuto 10