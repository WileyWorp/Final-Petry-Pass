const enterButton = document.getElementById('enterButton')
const requestButton = document.getElementById('requestButton')

enterButton.addEventListener('click', function () {
    if (document.getElementById('roomInputDIV').style.display = 'flex')
        document.getElementById('roomInputDIV').style.display = 'none';
    document.getElementById('room').style.display = 'flex';
})

requestButton.addEventListener('click', function () {
    alert("Your request has been sent.")
})

document.getElementById('header').addEventListener('click', function () {
    location.replace("./tView/")
    // location.replace("https://wileyworp.github.io/Petry-Pass/tView/")
})

let minutes = 0;
let seconds = 0;
let secondsUpdated = seconds;
var accepted = localStorage.getItem("accepted");
let timeUpdated = minutes + ":" + secondsUpdated
if (accepted) {
    document.getElementById('acceptedTimer').style.display = "block"
    document.getElementById('requestDIV').style.display = "none"
    setInterval(function () {
        seconds += 1
        if (seconds < 10) {
            secondsUpdated = "0" + seconds
        } else {
            secondsUpdated = seconds
        }
        if (seconds == 60) {
            seconds = 0
            minutes += 1
            timeUpdated = minutes + ":" + secondsUpdated
            document.getElementById('timer').innerHTML = timeUpdated
            localStorage.setItem("timeUpdated", timeUpdated)
        } else {
            timeUpdated = minutes + ":" + secondsUpdated
            document.getElementById('timer').innerHTML = timeUpdated
            localStorage.setItem("timeUpdated", timeUpdated)
        }
    }, 1000)
}
// code --user-data-dir C:\Users\50096143\AppData\Local\Temp