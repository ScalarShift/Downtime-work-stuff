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

function isMultOfAll(number, limit){
  for(let i=1; i<=limit; i++){
    if(number%i !== 0) return false;
  }
  return true;
}

function smallestMultOfAll(limit){
  let number = limit;
  while(!isMultOfAll(number, limit)){
    number += limit;
  }
  return number;
}

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  display.innerHTML = smallestMultOfAll(parseInt(numberBox.value));
}

submitButton.addEventListener("click", main);