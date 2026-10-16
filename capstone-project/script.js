const prompt = require('prompt-sync')({ sigint: true });

console.log("--- Initializing Inventory System ---");

const inventory = [{name: "Laptop", price: 800}, {name: "Mouse", price: 25}];
const productName = prompt("Enter new product name: ");
const priceInput = prompt("Enter product price: ");
const productPrice = Number(priceInput);
inventory.push({name: productName.trim(), price: productPrice});
console.log(`[Prompt executed: User adds "${productName.trim()}" at "$${productPrice}"]`);

console.log("--- Processing Inventory Roster (forEach) ---");

function getCategory(price) {
  if (price < 50) {
    return "Budget";
  } else if (price < 200) {
    return "Standard";
  } else {
    return "Premium";
  }
}

inventory.forEach(product => {
  const category = getCategory(product.price); 
  console.log(`* Item: ${product.name} ($${product.price}) -> Category: ${category}`);
});

console.log("--- Financial Analytics ---");
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
}
const totalValue = calculateTotal(inventory);
const affordableItems = inventory.filter(product => product.price < 200);
const affordableNames = affordableItems.map(product => product.name);
const report = inventory.map(product => `${product.name.toUpperCase()}: $${product.price}`);

console.log("Total Inventory Value: $" + totalValue);
console.log("Filtered Affordable Items (Under $200): ", JSON.stringify(affordableNames));
console.log("Formatted Report List: ", JSON.stringify(report));