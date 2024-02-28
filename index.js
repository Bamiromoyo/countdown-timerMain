//set the coundown time
var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() +9);
countDownDate.setHours(countDownDate.getHours()+15);
countDownDate.setMinutes(countDownDate.getMinutes() +34);
countDownDate.setSeconds(countDownDate.getSeconds() +59);

//update the countdown every 1 second
var x= setInterval(function() {

// Get the current date and time
var now = new Date().getTime();

//calculate the remaining time
var distance = countDownDate-now;

// Time calculations for days,hours,minutes and seconds
var days= Math.floor(distance /(1000 * 60 * 60 * 24));
var hours= Math.floor((distance % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60 )) /(1000* 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the countdown timer
document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

//If countdown is finished,write some text
if (distance < 0); {
clearInterval(x);
document.getElementById("timer").innerHTML="Expired";
}
