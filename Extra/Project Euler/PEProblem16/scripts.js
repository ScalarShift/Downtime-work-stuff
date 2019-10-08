function digitSum(number){
  number = number.toString().split("");
  let digitSum = 0;
  for(let i=0;i<number.length;i++){
    digitSum += parseInt(number[i]);
  }
  return digitSum;
}

function dSumForPowersOf2(power){
  let number = "1";
  for(let i=0;i<power;i++){
    number = double(number);
  }
  return digitSum(number);
}

function carryTheOne(number, fromDigit){
  //number = number.toString().split("");
  while(number[fromDigit] == 9){
    number[fromDigit] = "0";
    fromDigit--;
  }
  number[fromDigit] = (parseInt(number[fromDigit])+1).toString(); 
  return number;
}

function double(number){
  number = number.toString().split("");
  for(let i=0;i<number.length;i++){
    if(i===0){
      number[i] = parseInt(number[i]*2).toString(); 
    }else{
      if(parseInt(number[i]) < 5){
        number[i] = (parseInt(number[i])*2).toString();
      }else{
        number[i] = ((parseInt(number[i])*2)-10).toString();
        number = carryTheOne(number, i-1);
      }
    }
  }
  return number.join("");
}
//-------------------------------------------------

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  let n = parseInt(numberBox.value);
  display.innerHTML = dSumForPowersOf2(n);
  counter = 0;
}

submitButton.addEventListener("click", main);