var counter= 1499999
var pomodoroCountdown = setInterval ( function(){
    counter --
    if (counter === 0) {

      console.log ("Pomodoro Complete!")
    }
 }, 1000 );

 console.log(pomodoroCountdown)

document.querySelector(".timer-box").innerHTML = "'<h1>' + 'Pomodoro Complete!'' + '</h1>'")
