let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));

let x = a;
let y = b;

while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
}

let gcd = x;
let lcm = (a * b) / gcd;

console.log("LCM = " + lcm);
