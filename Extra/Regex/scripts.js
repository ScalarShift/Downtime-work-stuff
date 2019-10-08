
//-------------------------------------------------

let regexBox = document.getElementById("regex");
let regexTagBox = document.getElementById("tags");
let sampleTextBox = document.getElementById("sampleText");

let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  let regex = new RegExp(regexBox.value, regexTagBox.value);
  let sampleText = sampleTextBox.value;

  let result = sampleText.match(regex);

  if(result == null || result.join("") !== sampleText){
    display.innerHTML = "Not valid";
  }else{
    display.innerHTML = result.join("");
  }

}

submitButton.addEventListener("click", main);