

// document.getElementById("submit-button").onClick = function () {
//     console.log(10);
//     this.disabled = true;
// }
var timeLeft = 10;
function onClick() {

    code = document.getElementById("input-code").value;
    if (code == 88588) {
        timerValue = document.getElementById("timer-value");
        timerValue.style.visibility = "visible";
        timerValue.style.display = "block";
        document.getElementById("submit-button").disabled = true;
        
        setInterval(function () {
            timeLeft--;
            if (timeLeft < 0) {
                timerValue.style.visibility = "hidden";
                return;
            }
                
            else
            timerValue.innerHTML = timeLeft;
        },1000)
    }
    else {
        alert("Enter a valid OTP");
    }
    
}

function moveUp() {
    field = document.getElementById("input-code")
    field.onFocus = function () {
        form = document.getElementsByClassName("input-form");
        form.style.position = "fixed";
        form.style.top = "50px"
    };

}