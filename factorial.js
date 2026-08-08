function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

let n = parseInt(prompt("Enter a number:"));

console.log("Factorial = " + factorial(n));
