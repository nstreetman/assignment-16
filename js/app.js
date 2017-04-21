let submitButtonEl = document.querySelector (".submit");
let taskInputForm = document.querySelector (".input");
let timerEl = document.querySelector (".timer-box");
let timerNumEl = document.querySelector (".timer-numerals");
let timerCompleteEl = document.querySelector (".timer-complete");
let taskBox = document.querySelector (".task-box");

 function convertToMinutes(milliseconds) {
  let totalTimeInSeconds = Math.floor(milliseconds/1000);
  let timeInMinutes = Math.floor(totalTimeInSeconds/60);
  let timeInSeconds = totalTimeInSeconds - timeInMinutes * 60;
    if(timeInSeconds < 10) {
      timeInSeconds = '0' + timeInSeconds;
    }
    return timeInMinutes + ":" + timeInSeconds
}

submitButtonEl.addEventListener('click', function(){
  let theTaskInput = document.getElementById("task-input").value;
  taskBox.innerHTML = theTaskInput;
  taskInputForm.style.display = 'none'
  let startingTimerValue = 1500000;
  let timerValue = setInterval(function(){
  startingTimerValue = startingTimerValue - 1000
    if (startingTimerValue <= 70000) {
      taskBox.style.display = 'block';
      timerEl.style.backgroundImage = "url(./images/tomato-red-silhouette.svg)";
      timerCompleteEl.style.display ='none';
    }
    if (startingTimerValue <=60000) {
      timerCompleteEl.style.display ='none';
      taskBox.style.display = 'block';
      timerEl.style.backgroundImage = "url(./images/tomato-green-silhouette.svg)";
    }
    if (startingTimerValue === 0){
      clearInterval(timerValue)
      timerEl.style.backgroundImage = "url(./images/tomato-red-silhouette.svg)";
      timerNumEl.style.display = 'none';
      timerCompleteEl.style.display = 'block';
      taskBox.style.display = 'none';
    }

  let timeOnTimer = convertToMinutes(startingTimerValue)
  timerEl.innerHTML = "<p class='timer-numerals'>" + timeOnTimer +"</p>";
}, 1000)

})
