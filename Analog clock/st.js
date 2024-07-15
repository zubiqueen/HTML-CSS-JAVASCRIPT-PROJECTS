let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    //Getting hour, mins secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.tranform = `rotate(${hRotation}deg)`;
    min.style.tranform = `rotate(${mRotation}deg)`;
    sec.style.tranform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);