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

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  display.innerHTML = smallestMultOfAll(parseInt(numberBox.value));
}

submitButton.addEventListener("click", main);