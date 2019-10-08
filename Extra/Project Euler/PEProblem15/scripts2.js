let Direction = {RIGHT:0, DOWN:1};
let counter = 0;

function latticePaths(start, direction, gridSize){
  let position = start;
  if(position[0] === gridSize && position[1] === gridSize){return counter++;}
  if(position[0] === gridSize){
    latticePaths([position[0], position[1]+1], Direction.RIGHT, gridSize);
  }else if(position[1] === gridSize){
    latticePaths([position[0]+1, position[1]], Direction.DOWN, gridSize);
  }else{
    for(let i=0; i<=1; i++){
      if(i === 0){
        latticePaths([position[0], position[1]+1], Direction.RIGHT, gridSize);
      }else if(i === 1){
        latticePaths([position[0]+1, position[1]], Direction.DOWN, gridSize);
      }
    }
  }
}

//-------------------------------------------------

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  let n = parseInt(numberBox.value);
  latticePaths([0,0],-1,n);
  console.log(counter);
  display.innerHTML = counter;
  counter = 0;
}

submitButton.addEventListener("click", main);