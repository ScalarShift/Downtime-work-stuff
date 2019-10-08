function maximum(numbers){
  let currentMax = 0;
  for (let i=0; i<numbers.length; i++){
    if (numbers[i] > currentMax) {currentMax = numbers[i];}
  }
  return currentMax;
}

function isPalindrome(message){
  message = message.toString()
  let firstHalf = message.slice(0,message.length/2)
  let secondHalf = message.slice(Math.ceil(message.length/2))
  return (firstHalf === secondHalf.split("").reverse().join(""))
}

function largestProduct(digits){
  currentLargestProduct = 0;
  for(let i=Math.pow(10,digits-1); i<Math.pow(10,digits); i++){
    for(let j=Math.pow(10,digits-1); j<Math.pow(10,digits); j++){
      if (isPalindrome(i*j) && i*j > currentLargestProduct) {
        currentLargestProduct = i*j;
      }
    }
  }
  return currentLargestProduct;
}

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  display.innerHTML = largestProduct(numberBox.value);
}

submitButton.addEventListener("click", main);