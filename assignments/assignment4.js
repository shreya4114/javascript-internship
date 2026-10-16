console.log("-- Multiplication Table of 5 --");
for (let i=1; i<=5; i++) {
  console.log("5 X ", i, " = ", 5*i);
}

console.log("-- First Number > 10 divisible by 6 --");
let n = 11;
while (true) {
  if (n > 10 && n % 6 === 0) {
    console.log("Found: ", n);
    break;
  }
  n++;
}

console.log("-- do...while with continue --");
let j = 0;
do {
  j++;
  if (j === 3) {
    continue;
  }
  console.log(j);
} while (j < 5);