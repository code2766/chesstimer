let up = document.querySelector("#up");
let down = document.querySelector("#down");
let upt = document.querySelector("#uptime");
let dot = document.querySelector("#downtime");

let st = Number(prompt("Enter time in Minutes"));
let it = Number(prompt("Enter increment time"));
let intdo, intup;

let time = st * 60;
let p1time = time;
let p2time = time;

// Set initial MM:SS format
dot.innerText = formatTime(p1time);
upt.innerText = formatTime(p2time);

// Function to format seconds into MM:SS
function formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function decreased() {
    p1time--;
    dot.innerText = formatTime(p1time);
    if (p1time <= 0) {
        clearInterval(intdo);
        alert("Win on time");
    }
    if(p1time <=10){
    let s = new Audio("audio/timepassing.mp3");
s.play();
}
}

function decrease() {
    p2time--;
    upt.innerText = formatTime(p2time);
    if (p2time <= 0) {
        clearInterval(intup);
        alert("Win on time");
    }
    if(p2time <=10){
    let s = new Audio("audio/timepassing.mp3");
s.play();
}
    
}

up.addEventListener("click", function () {
    clearInterval(intup);
    intdo = setInterval(decreased, 1000);

    // Add increment
    p2time += it;
    upt.innerText = formatTime(p2time);

    down.style.backgroundColor = "#4caf50";
    up.style.backgroundColor = "white";

    up.disabled = true;
    down.disabled = false;
    let beep = new Audio("audio/beep.mp3");
beep.play();
if(p2time <=10){
    let s = new Audio("timepassing.mp3");
s.play();
}
    
});

down.addEventListener("click", function () {
    clearInterval(intdo);
    intup = setInterval(decrease, 1000);

    p1time += it;
    dot.innerText = formatTime(p1time);

    up.style.backgroundColor = "#4caf50";
    down.style.backgroundColor = "white";

    down.disabled = true;
    up.disabled = false;
    let beep = new Audio("audio/beep.mp3");
beep.play();

if(p1time <=10){
    let s = new Audio("audio/timepassing.mp3");
s.play();
}
});


let res = document.querySelector("#reset")
let play = document.querySelector("#play")

res.addEventListener("click",function dd(){
    location.reload()
})

let isPaused = false; // Track pause/resume state

play.addEventListener("click", function () {
    if (!isPaused) {
        // Pause both intervals
        clearInterval(intup);
        clearInterval(intdo);
        isPaused = true;
        play.innerText = "Resume";
    } else {
        // Resume based on which button is disabled
        if (up.disabled) {
            intdo = setInterval(decreased, 1000);
        } else if (down.disabled) {
            intup = setInterval(decrease, 1000);
        }
        isPaused = false;
        play.innerText = "Pause";
    }
});
