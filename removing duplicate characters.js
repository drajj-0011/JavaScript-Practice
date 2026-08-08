let text = prompt("Enter a string");
let result = "";

for (let i = 0; i < text.length; i++) {
    if (!result.includes(text[i])) {
        result = result + text[i];
    }
}

console.log(result);
