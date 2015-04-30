// * When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0"
var start = document.body.querySelector("#start")
var timer = document.body.querySelector("#timer")
var seconds = 0

start.addEventListener("click", function(){
  var clock = setInterval( function() { countSec() }, 1000)
})

function countSec(){
  timer.innerHTML = "Time elapsed: " + seconds
  seconds++
}

// * When "Reset" is clicked, the text should return to "Stop Watch"
// * When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.
