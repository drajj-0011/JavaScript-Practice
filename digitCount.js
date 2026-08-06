let num = parseInt(prompt("Enter an integer:"));
let count = 0;
while (num > 0) {
    count++;
    num = Math.floor(num / 10);
}
console.log("Number of digits = " + count);
