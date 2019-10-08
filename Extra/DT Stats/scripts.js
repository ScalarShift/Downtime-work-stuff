//declare variables for DOM objects
let numOfCallsBox = document.getElementById("numOfCalls");
let avgCallTimeBox = document.getElementById("avgCallTime");

let dayRadBtns = document.getElementsByName("dayType");
let lunchRadBtns = document.getElementsByName("lunchType");

let amBreakChk = document.getElementById("AMBreak");
let lunchChk = document.getElementById("Lunch");
let pmBreakChk = document.getElementById("PMBreak");

let submitBtn = document.getElementById("submit");

let totalDTDisplay = document.getElementById("totalDTDisplay");
let dTPercentageDisplay = document.getElementById("DTPercentDisplay");
let avgTimeBtwnCallsDisplay = document.getElementById("avgTimeBtwnCalls");
//end DOM objects


//global constants
const normalStartTime = "9:00";
const satStartTime = "9:00";

const breakLengthHours = .25;

const normalLunchLengthHours = 1;
const satLunchLengthHours = .5;

const minutesPerHour = 60;
//end constants


function main() {
  // calculate total downtime
  let totalWorkTime = currentTime() - startTime() - breaks() - lunch();
  let totalDownTime = totalWorkTime - totalCallTime();

  // calculate downtime percentage  
  let downTimePercent = (totalDownTime / totalWorkTime) * 100;

  // calculate average time between calls
  let avtTimeBetweenCalls;
  if (numOfCallsBox.value == 0) {
    avtTimeBetweenCalls = 0;
  } else {
    avgTimeBetweenCalls = (totalDownTime * minutesPerHour) / numOfCallsBox.value;
  }

  // display stats
  totalDTDisplay.textContent = parseFloat(totalDownTime).toFixed(2) + " hours";
  dTPercentageDisplay.textContent = parseFloat(downTimePercent).toFixed(2) + " %";
  avgTimeBtwnCallsDisplay.textContent = parseFloat(avgTimeBetweenCalls).toFixed(2) + " minutes";
}

//helper functions

//returns the length of the scheduled lunch period if one has been taken
function lunch() {
  if (lunchRadBtns[0].checked) {
    return normalLunchLengthHours*lunchChk.checked;
  } else {
    return satLunchLengthHours*lunchChk.checked;
  }
}

//returns the total length of time spent on break
function breaks() {
  return breakLengthHours * (amBreakChk.checked + pmBreakChk.checked);
}

//returns the total amount of time spent on a call
function totalCallTime() {
  return (numOfCallsBox.value * timeToNum(avgCallTimeBox.value)) / minutesPerHour;
}

//returns the current time of day in hours (8:00AM is 8.00, 8:00PM is 20.00, 12:45PM is 12.75)
function currentTime() {
  let now = new Date;
  return now.getHours() + (now.getMinutes() / minutesPerHour);
}

//returns appropriate start time based on type of day (saturday or normal day)
function startTime() {
  if(dayRadBtns[0].checked) {
    return timeToNum(normalStartTime);
  } else {
    return timeToNum(satStartTime);
  }
}

//accepts time in format HH:MM and returns as single hour value 
//(ex: 7:30 -> 7.5)
function timeToNum(time) {
  time = time.split(":");
  return parseInt(time[0]) + parseInt(time[1]) / minutesPerHour;
}

submitBtn.addEventListener("click", main);
