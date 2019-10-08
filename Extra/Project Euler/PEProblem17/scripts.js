let Places = {ONES:0, TENS:1, HUNDREDS:2, THOUSANDS:3};

let spellings = ["one", "two", "three", "four", "five",
                 "six", "seven", "eight", "nine", "ten",
                 "eleven", "twelve", "thir", "fif", "eigh",
                 "teen", "twen", "for", "ty", "hundred", "thousand"];

function readOutDigit(number, place){
  let digit = number[number.length-(place+1)];
  if(digit == 0){return "";}
  let readOut = "";
  switch(place){
    case Places.ONES:
      if(number[number.length-2] != 1){
        readOut = readOut + spellings[digit-1] + " ";
      }
      break;
    case Places.TENS:
      switch(parseInt(digit)){
        case 1:
          switch(parseInt(number[number.length-1])){
            case 0:
              readOut = readOut + spellings[9] + " ";              
              break;
            case 1:
              readOut = readOut + spellings[10] + " ";
              break;
            case 2:
              readOut = readOut + spellings[11] + " ";
              break;
            case 3:
              readOut = readOut + spellings[12] + spellings[15] + " ";
              break;
            case 4:
              readOut = readOut + spellings[3] + spellings[15] + " ";
              break;
            case 5:
              readOut = readOut + spellings[13] + spellings[15] + " ";
              break;
            case 6:
              readOut = readOut + spellings[5] + spellings[15] + " ";
              break;
            case 7:
              readOut = readOut + spellings[6] + spellings[15] + " ";
              break;
            case 8:
              readOut = readOut + spellings[14] + spellings[15] + " ";
              break;
            case 9:
              readOut = readOut + spellings[8] + spellings[15] + " ";
              break;
          }         
          break;
        case 2:
          readOut = readOut + spellings[16] + spellings[18] + " "          
          break;
        case 3:
          readOut = readOut + spellings[12] + spellings[18] + " "          
          break;
        case 4:
          readOut = readOut + spellings[17] + spellings[18] + " "
          break;
        case 5:
          readOut = readOut + spellings[13] + spellings[18] + " "
          break;
        case 8:
          readOut = readOut + spellings[14] + spellings[18] + " "
          break;
        default:
          readOut = readOut + spellings[digit-1] + spellings[18] + " ";
      }
      break;
    case Places.HUNDREDS:
      readOut = readOut + spellings[digit-1] + " " + spellings[19] + " ";
      if(!(number[number.length-1] == 0 && number[number.length-2] == 0)){
        readOut = readOut + "and ";
      }
      break;
    case Places.THOUSANDS:
      readOut = readOut + spellings[digit-1] + " " + spellings[20] + " ";
      break;
  }
  return readOut;
}

function readOut(number){
  number = number.toString().split("");
  let readOut = "";
  for(let i=number.length; i>0; i--){
    readOut = readOut + readOutDigit(number, i-1);
  }
  return readOut;
}

function countLetters(str){
  let counter = 0;
  for(let i=0;i<str.length;i++){
    if(str[i] != " "){
      counter++;
    }
  }
  return counter;
}

function lettersFromOneToN(limit){
  let counter = 0;
  for(let i=1; i<=limit; i++){
    counter += countLetters(readOut(i));
  }
  return counter;
}

//-------------------------------------------------

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  let n = parseInt(numberBox.value);
  display.innerHTML = lettersFromOneToN(n);
  counter = 0;
}

submitButton.addEventListener("click", main);