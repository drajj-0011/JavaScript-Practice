let n = parseInt(prompt("Enter number of elements"));
let a = [];

for (let i = 0; i < n; i++) {
    a[i] = parseInt(prompt("Enter element"));
}

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (a[i] > a[j]) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}

console.log(a);
