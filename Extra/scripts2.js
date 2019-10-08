var delineators = /[^0-9]/g;

function formatSSN (inputStr){
  return inputStr.replace(delineators,"");
}

function formatDOB (inputStr){
  return inputStr.replace(delineators,"/");
}

function processData(ssnValue, dobValue){
  if (formatSSN(ssnValue) === correctSSN && formatDOB(dobValue) === correctDOB){
    output.textContent = "CORRECT!";
  } else {
    output.textContent = "EITHER THE SSN OR DOB IS INCORRECT.";
  }
}



var correctSSN = "555881234";
var correctDOB = "01/01/1985";

let SSNBox = document.getElementById("ssn");
let DOBBox = document.getElementById("dob");
let submit = document.getElementById("submit");
let output = document.getElementById("output");
let SSNDisplay = document.getElementById("correctSSN");
let DOBDisplay = document.getElementById("correctDOB");

SSNDisplay.textContent = `Correct SSN: ${correctSSN}`;
DOBDisplay.textContent = `Correct DOB: ${correctDOB}`;

submit.addEventListener("click", (e) => processData(SSNBox.value, DOBBox.value));

