function sumMultiplesOf3And5(limit){
  let currentSum = 0;
  for(let i=1; i<limit; i++){
    if(i%3 === 0 || i%5 === 0){
      currentSum += i;
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
  display.innerHTML = sumMultiplesOf3And5(n);
  counter = 0;
}

submitButton.addEventListener("click", main);