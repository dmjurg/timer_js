// * When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0"
var start = document.body.querySelector("#start")
var timer = document.body.querySelector("#timer")
var reset = document.body.querySelector("#reset")
var pause = document.body.querySelector("#pause")
var seconds = 0
var clock

start.addEventListener("click", function(){
  clock = setInterval( function() { countSec() }, 1000)
})

function countSec(){
  timer.innerHTML = "Time elapsed: " + seconds
  seconds++
}

// * When "Reset" is clicked, the text should return to "Stop Watch"
reset.addEventListener("click", function(){
  clearInterval(clock)
  timer.innerHTML = "Stop Watch"
  seconds = 0
})

// * When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.
pause.addEventListener("click", function(){
  clearInterval(clock)
})
