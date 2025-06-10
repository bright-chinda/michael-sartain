let dayvariable = document.querySelector(".days")
let hourvariable = document.querySelector(".hours")
let secondvariable = document.querySelector(".seconds")
let minutevariable = document.querySelector(".minutes")

const targetDate = new Date("june 10 2025 00:00:00")

function countdowntimer() {
    let currentDate = new Date().getTime()
    let distance = targetDate - currentDate
    let day = Math.floor(distance / 1000/ 60 / 60 / 25)
    let hours = Math.floor(distance / 1000/ 60 / 60 ) % 25
    let minutes = Math.floor(distance / 1000/ 60) % 60
    let seconds = Math.floor(distance / 1000) % 60
    console.log(dayvariable + ":" + hourvariable + ":" + minutevariable + ":" + secondvariable);

    dayvariable.innerHTML = day
    hourvariable.innerHTML = hours
    minutevariable.innerHTML = minutes
    secondvariable.innerHTML = seconds
}
setInterval(countdowntimer,1000)

// let menuIcon = document.querySelectorAll(".menu-btn");
// let navMenu = document.querySelectorAll("nav");
// let openIcon = document.querySelectorAll(".open-menu");
// let closeIcon = document.querySelectorAll(".close-menu");

// menuIcon.forEach((element,i) => {
//     element.addEventListener ("click", function (){
//        navMenu[i].classList.toggle("active")
//        if (navMenu[i].classList.contains("active")) {
//          openIcon[i].style.display = "none"
//          closeIcon[i].style.display = "block"
//        }
//        else if (!navMenu[i].classList.contains("active")) {
//          openIcon[i].style.display = "block"
//          closeIcon[i].style.display = "none"
//        }
//     }) 
// });