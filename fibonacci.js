function fib(n) {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

let n = parseInt(prompt("Enter number of terms"));

for (let i = 0; i < n; i++) {
    console.log(fib(i));
}
