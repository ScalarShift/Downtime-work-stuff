function generatePythTrip(n){
  let triples = []
  for(let a=1; triples.length<n; a++){
    for(let b=a; b<1000; b++){
      for(let c=b; c<1000; c++){
        if(a*a + b*b === c*c){
          triples.push([a,b,c]);
        }
      }
    }
  }
  return triples;
}



//-------------------------------------------------

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  let n = parseInt(numberBox.value);
  display.innerHTML = largestProductOfNTerms(number, n);
}

submitButton.addEventListener("click", main);