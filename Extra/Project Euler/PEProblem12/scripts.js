function factor(number){
  
  if (number === 1) {return [number]};

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

function generateNthTriangularNum(n){
  let triangularNum = 0;
  for(let i=1;i<=n;i++){
    triangularNum += i;
  }
  return triangularNum;
}

function firstTriNumWithNFactors(n){
  let num = 0;
  for(let i=1; factor(generateNthTriangularNum(i)).length <= n; i++){
    num = generateNthTriangularNum(i+1);
  }
  return num;
}

//-------------------------------------------------

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  let n = parseInt(numberBox.value);
  display.innerHTML = firstTriNumWithNFactors(n);
}

submitButton.addEventListener("click", main);