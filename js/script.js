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



function getTime (){
   startTime = Date.now();
   setInterval(function(){
   deltaTime = new Date(Date.now() - startTime);

  seconds.innerHTML = deltaTime.getSeconds();
   //deltaTime.getMilliseconds();

}, 1000);
}

startBtn[0].addEventListener("click", getTime, false);
}());
