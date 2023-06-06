// Your code goes here
const rapid = (text) => {
    let string = text.toLowerCase();
    let consonantes = "";
    
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== "a" && string[i] !== "e" && string[i] !== "i" && string[i] !== "o" && string[i] !== "u") {
        consonantes += string[i].toUpperCase();
      }
    }
    
    return consonantes;
  }

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
