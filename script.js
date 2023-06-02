var timer;
var wminutes= prompt("Enter work minutes: ");
document.write("Your work time: "+wminutes+" minutes."); 
var bminutes= prompt("Enter break minutes:")
document.write("<br>"+"Your break time: "+(bminutes+(bminutes <2 ? " minute." : " minutes."))); 
var minutes; 
var seconds;
var mode;


function startTimer(timerMode) {
if (wminutes>0 && bminutes>0)
{
  if (timer) {
    clearInterval(timer);
  }

  mode = timerMode;
  minutes= mode== 'work' ? wminutes : bminutes; 
  seconds = 0;

  updateTimer();

  timer = setInterval(function() {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        if (mode === 'work') {
          alert('Time for a break!');
          document.getElementById("work").style.display= "none";
          stopTimer(); 
          startTimer('break'); 
        } 
        else {
          alert('Break time is over. Get back to work!');
          stopTimer(); 
          startTimer('work');
        }
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateTimer();
  }, 1000);
}
else {
    document.write("NULL VALUES ARE NOT ACCEPTABLE. TRY AGAIN.")
}
}

function stopTimer() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  updateTimer();
}

function updateTimer() {
  var displayMinutes = minutes < 10 ? '0' + minutes : minutes;
  var displaySeconds = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById('timer').textContent = displayMinutes + ':' + displaySeconds;
}
