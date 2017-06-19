
(function (){
'use strict';

(function (){
'use strict';




   var form = document.getElementById('form');
   var buttonStart = document.createElement('input');
   buttonStart.setAttribute('type', 'submit');
   buttonStart.setAttribute('value', 'Start');
   buttonStart.setAttribute('class', 'btn btn-success btn-lg');
   buttonStart.setAttribute('id', 'btn-success');

   var buttonFinish = document.createElement('input');
   buttonFinish.setAttribute('type', 'submit');
   buttonFinish.setAttribute('value', 'Finish');
   buttonFinish.setAttribute('class', 'btn btn-danger btn-lg');
//
   form.appendChild(buttonStart);
   form.appendChild(buttonFinish);

//
//
//
var startTime;
var deltaTime;

var startBtn = document.getElementsByClassName('btn-success');

var ms = document.getElementById('ms');
var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');
var hours = document.getElementById('hours');
var isActive = false;

var millis;
var sec;
var min;
var hrs;
function timer () {
function startTimer () {
  isActive = true;
  getTime();
}


function getTime(){
   startTime = Date.now();
   deltaTime = new Date(Date.now() - startTime);
   millis = deltaTime.getMilliseconds();
   sec = deltaTime.getSeconds();
   min = deltaTime.getMinutes();
   hrs = deltaTime.getUTCHours();
}

function counter() {
    getTime();
    ms.innerHTML = millis;
    seconds.innerHTML = sec;
    minutes.innerHTML = min;
    hours.innerHTML = hrs;
  }

function displayTimer() {
  timerID = setInterval(counter, 10);
}
startBtn[0].addEventListener("click", displayTimer, false);
}
timer();





}());
