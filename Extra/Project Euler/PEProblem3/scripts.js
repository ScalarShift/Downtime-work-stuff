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

function primeFactors(number){

  let factors = factor(number);

  let primeFactors = [];

  for (let i=0;i<factors.length;i++) {

    if (isPrime(factors[i])) {primeFactors.push(factors[i]);}

  }

  return primeFactors;

}

function maximum(numbers){
  let currentMax = 0;
  for (let i=0; i<numbers.length; i++){
    if (numbers[i] > currentMax) {currentMax = numbers[i];}
  }
  return currentMax;
}

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

submitButton.addEventListener("click", () => display.innerHTML = (maximum(primeFactors(numberBox.value))));