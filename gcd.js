let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));

while (a != b) {
    if (a > b) {
        a = a - b;
    } else {
        b = b - a;
    }
}

console.log("GCD =", a);
