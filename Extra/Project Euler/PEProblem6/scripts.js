function sumOfSquares(limit){
  let currentSum = 0;
  for(let i=1; i<=limit; i++){
    currentSum += Math.pow(i, 2);
  }
  return currentSum;
}

function squareOfSum(limit){
  let currentSum = 0;
  for(let i=1; i<=limit; i++){
    currentSum += i;
  }
  return Math.pow(currentSum, 2);
}

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  let limit = numberBox.value;
  display.innerHTML = squareOfSum(limit) - sumOfSquares(limit);
}

submitButton.addEventListener("click", main);