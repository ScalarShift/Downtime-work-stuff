let accountNumberBox = document.getElementById("account");
let callerNameBox = document.getElementById("caller");
let repNameBox = document.getElementById("rep");
let phoneNumberBox = document.getElementById("phone");
let submitBtn = document.getElementById("submit");
let resetBtn = document.getElementById("reset");
let display = document.getElementById("display");

const possibleEndings = ["Thanks!", "Thanks so much!"];
const REDACTION_AMOUNT = 6;

function main() {
  // collect required info
  let accountNumber = accountNumberBox.value;

  let callerName = callerNameBox.value;
  let callerFirstName = callerName.split(" ")[0];

  let repName = repNameBox.value;
  let phoneNumber = phoneNumberBox.value;

  // shorten account number
  accountNumber = "*" + accountNumber.slice(REDACTION_AMOUNT);

  // randomize salutation
  let rand = Math.floor(Math.random() * 2);
  let ending =  possibleEndings[rand];

  // construct message
  let message = "Hi\n\n" + accountNumber + "\n\n" + callerName 
    + " was trying to get ahold of " + repName + ".\n"
    + "Would " + repName + " be able to give " + callerFirstName
    + " a call back at " + phoneNumber + "?\n\n" + ending;

  // display message
  display.textContent = message;
}

function reset(){
  accountNumberBox.value = "";
  callerNameBox.value = "";
  repNameBox.value = "";
  phoneNumberBox.value = "";
  display.textContent = "";
}

submitBtn.addEventListener("click", main);
resetBtn.addEventListener("click", reset);