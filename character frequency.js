let text = prompt("Enter a string");

for (let i = 0; i < text.length; i++) {
    let count = 0;

    for (let j = 0; j < text.length; j++) {
        if (text[i] == text[j]) {
            count++;
        }
    }

    console.log(text[i], "=", count);
}
