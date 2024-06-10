"use strict";

let hour = 0
let minute = 0
let second = 0
let milisecond = 0

let cron

function play() { 

cron = setInterval(() => {
  timer()

}, 10);}

function brake() {
  clearInterval(cron);
}

function end() {

  hour = 0  
  minute = 0
  second = 0
  milisecond = 0

  document.getElementById("hour").innerHTML = "00" 
  document.getElementById("minute").innerHTML = "00"  
  document.getElementById("second").innerHTML = "00"  
  document.getElementById("milisecond").innerHTML = "000"

}

function timer() {
  if((milisecond += 10 ) == 1000) {
    milisecond = 0
    second++
  }

  if(second == 60) {
    second = 0
    minute++
  }

  if(minute == 60) {
    minute = 0
    hour++
  }

  document.getElementById("hour").innerHTML = returnData(hour)
  document.getElementById("minute").innerHTML = returnData(minute)
  document.getElementById("second").innerHTML = returnData(second)
  document.getElementById("milisecond").innerHTML = returnData(milisecond)
}

function returnData(input) {
  return input >=10 ? input : `0${input}`
}
































