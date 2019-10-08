function factor(number){
  
  if (number === 1) {return number};

  let factors = [];

  let limit = Math.sqrt(number)

  for (i=1; i<=limit; i++){

    if (number%i === 0) {

      factors.push(i);

      if (i !== number/i) {

        factors.push(number/i);

      }

    }

  }

  return factors;

}

function isPrime(number){

  let factors = factor(number);

  return (factors.length == 2 && number != 1);

}

function sumOfPrimes(limit){
  let currentSum = 0;
  for(let i=2; i<limit; i++){
    if (isPrime(i)) {currentSum += i;}
  }
  return currentSum;
}

//-------------------------------------------------

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  let n = parseInt(numberBox.value);
  display.innerHTML = sumOfPrimes(n);
}

submitButton.addEventListener("click", main);