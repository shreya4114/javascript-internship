function rectangleArea(length = 5, breadth = 4) {
  return length * breadth;
}

const arrowArea = (length = 5, breadth = 4) => 
  length * breadth;


console.log("Standard Function Area (Default 5x4): ", rectangleArea());
console.log("Arrow Function Area (Custom 10x3): ", arrowArea(10,3));

{
  let blockVar = 10;
  console.log("Inside block: ", blockVar);
}

try {
  console.log(blockVar);
} catch(error) {
  console.log("Scope Test Error: ", error.toString());
}