const navbtnEl = document.querySelector(".navbar-btn")
const headerEl = document.querySelector(".header")

const toggleNavbar = () => {
    headerEl.classList.toggle("active")
}

navbtnEl.addEventListener('click', () => toggleNavbar())

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="moon.png";
    }else{
        icon.src="sun.png";
    }
}

function clock(){
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";

    if(hours > 12){
        period = "PM";
    }

    hours = hours > 12 ? hours%12 : hours;

    if(hours <  10){
        hours = "0" + hours
    }

    if(minutes <  10){
        minutes = "0" + minutes
    }

    if(seconds <  10){
        seconds = "0" + seconds
    }

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minute").innerHTML = minutes;
    document.querySelector(".second").innerHTML = seconds;
    document.querySelector(".ampm").innerHTML = period;
}

var updateClock = setInterval(clock, 1000);

var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", {weekday : "long"});
const monthName = today.toLocaleString("default", {month : "short"});

document.querySelector(".month").innerHTML = monthName;
document.querySelector(".day").innerHTML = dayName;
document.querySelector(".date").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;
