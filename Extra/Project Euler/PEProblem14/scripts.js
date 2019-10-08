function collatz(start){
  let n = start;
  let sequence = [];
  while(n !== 1){
    if(n%2 === 0){
      sequence.push(n = n/2);
    }else{
      sequence.push(n = (3*n)+1);
    }
  }
  return sequence;
}

function longestCollatz(limit){
  let longestSequence = [];
  let sequence = [];
  let longestStarter = 2;
  for(let n=2; n<=limit; n++){
    sequence = collatz(n);
    if(sequence.length > longestSequence.length) {
      longestSequence = sequence;
      longestStarter = n;
    }
  }
  return [longestSequence, longestStarter];
}

//-------------------------------------------------

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  let n = parseInt(numberBox.value);
  let results = longestCollatz(n);
  display.innerHTML = results[1] + ": " + results[0];
}

submitButton.addEventListener("click", main);