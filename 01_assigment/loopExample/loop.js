var tableNumber = +prompt("Enter table number:");
var tableLength = +prompt("Enter table length:");

console.log(`Multiplication Table of ${tableNumber}`);
console.log("---------------------------");

// Nested loop (outer loop = 1 iteration, inner loop = table rows)
for (let i = 1; i <= 1; i++) {             // Outer loop, ek hi baar chalega
  for (let j = 1; j <= tableLength; j++) { // Inner loop → table rows  
    console.log(`${tableNumber} x ${j} = ${tableNumber * j}`);
  }
}

//  Second Example 

let height = 5;

for (let i = 1; i <= height; i++) {
  let line = "";

  for (let j = 1; j <= i; j++) {
    line += j + " ";
  }

  console.log(line);
}
