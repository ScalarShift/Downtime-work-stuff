function generateNthFibonacciNumber(n){
  let previousNumber = 1;
  let currentNumber = 1;
  let counter = 0;
  while(counter < n-1){
    let temp = currentNumber;
    currentNumber = currentNumber + previousNumber;
    previousNumber = temp;
    counter++;
  }
  return currentNumber;
}

function sumEvenFibNum(limit){
  let currentSum = 0;
  for(let i=1;generateNthFibonacciNumber(i)< limit; i++){
    let num = generateNthFibonacciNumber(i);
    if(num%2 === 0){
      currentSum += num;
    }
  } 
  return currentSum;
}
//-------------------------------------------------

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  let n = parseInt(numberBox.value);
  display.innerHTML = sumEvenFibNum(n);
  counter = 0;
}

submitButton.addEventListener("click", main);