(function (){
'use strict';




//
//
//
var startTime;
var deltaTime;

var startBtn = document.getElementById('start');
console.log(startBtn);

var ms = document.getElementById('ms');
var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');
var hours = document.getElementById('hours');
var isActive = false;

function getTime(e){
    // e.preventDefault();
    // console.log('Hello!!!')

   // if (isActive !== true){
   startTime = Date.now();
   var interval = setInterval(function(){
   deltaTime = new Date(Date.now() - startTime);
   createHtml();

    }, 1);
    e.preventDefault();
//   } else {
//     preventDefault();
//   }
}

var createHtml = function(){

 ms.innerHTML = deltaTime.getMilliseconds();
 seconds.innerHTML = deltaTime.getSeconds();
 minutes.innerHTML = deltaTime.getMinutes();
 hours.innerHTML = deltaTime.getUTCHours();
 isActive = true;

};

startBtn.addEventListener('click', getTime, false);

}());
