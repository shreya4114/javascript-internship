const prompt = require('prompt-sync')({ sigint: true });

const billInput = prompt("Enter bill amount: ");
const tipInput = prompt("Enter tip percentage: ");

const bill = Number(billInput);
const tipPercent = Number(tipInput);

const tip = bill * tipPercent / 100;
const total = bill + tip;

console.log(`Subtotal: $${bill}`);
console.log(`Tip Percentage: ${tipPercent}%`);
console.log(`Calculated Tip: $${tip}`);
console.log(`Total Amount to Pay: $${total}`);