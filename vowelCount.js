let str = prompt("Enter a string:");

let count = 0;
str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
        count++;
    }
}

console.log("Number of vowels: " + count);
