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

var startBtn = document.getElementById('btn-success');

var ms = document.getElementById('ms');
var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');
var hours = document.getElementById('hours');
var isActive = false;



var getTime = function(){
   startTime = Date.now();
   var interval = setInterval(function(){
   deltaTime = new Date(Date.now() - startTime);
   html();
 }, 1);

 };

var html = function(){

 ms.innerHTML = deltaTime.getMilliseconds();
 seconds.innerHTML = deltaTime.getSeconds();
 minutes.innerHTML = deltaTime.getMinutes();
 hours.innerHTML = deltaTime.getUTCHours();

};
//var html = function () {
  //getTime();
 //}   ;


startBtn.addEventListener("click", getTime, false);
}());
