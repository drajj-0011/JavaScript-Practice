let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));
let c = parseInt(prompt("Enter third number:"));

if (a >= b && a >= c)
    console.log("Largest =", a);
else if (b >= a && b >= c)
    console.log("Largest =", b);
else
    console.log("Largest =", c);
