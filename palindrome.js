let str = prompt("Enter a string:");

let rev = str.split("").reverse().join("");

if (str == rev)
    console.log("Palindrome");
else
    console.log("Not Palindrome");
