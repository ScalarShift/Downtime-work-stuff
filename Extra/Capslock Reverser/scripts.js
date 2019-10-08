let submitButton = document.getElementById("submit");
let inputBox = document.getElementById("input");
let outputBox = document.getElementById("output");

function  main() {
  let inputText = inputBox.value;

  if(document.getElementById("reverse").checked) {
    outputBox.textContent = reverseCase(inputText);
  } else if(document.getElementById("normal").checked) {
    outputBox.textContent = normalCase(inputText);
  } else if(document.getElementById("upper").checked) {
    outputBox.textContent = inputText.toUpperCase();
  } else if (document.getElementById("lower").checked) {
    outputBox.textContent = inputText.toLowerCase();
  }
}

function upperCase(match, offset, string) {
  return match.toUpperCase();
}
    
function reverseCase(str) {
  str = inputBox.value.split("");
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i].toLowerCase()) {
      str[i] = str[i].toUpperCase();
    } else
      str[i] = str[i].toLowerCase();
  }
  str = str.join("");
  return str;
}

function normalCase(str) {
  str = inputBox.value.toLowerCase().split(" ");
  str[0] = str[0].replace(/[a-z]/, upperCase); 
  for(let i = 1; i < str.length; i++) {
    if (str[i] === "i") str[i] = "I";
    if (str[i] === "i" && str[i + 1] === "\'") str[i] = "I\'";
    let previousChar = str[i - 1].charAt(str[i - 1].length - 1);
    if(previousChar === "." || previousChar === "?" || previousChar === "!") {
      str[i] = str[i].replace(/[a-z]/, upperCase);
    }
  }
  str = str.join(" ");
  return str;
}

    
submitButton.addEventListener("click", main);