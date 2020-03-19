
function calculateBill(bill, tax=0.13, tipRate = 0.15) {
   const total = bill + (bill*tax) + (bill*tipRate);
   return total;
}

const myTotal = calculateBill(100, 0.13);
console.log(`Your total is $${myTotal}`);

const defaultTax = calculateBill(200, undefined, 0.30);
console.log(`Your total is $${defaultTax}`);
//use undefined in order to fallback into default value
