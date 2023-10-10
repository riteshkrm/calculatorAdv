const body = document.querySelector("body");
const calcAndToggle = document.querySelector(".calcAndToggle");
const keypadSection = document.querySelector(".keypadSection");
const keypadButtons = document.querySelectorAll(".button");
const resetAndEqual = document.querySelectorAll(".btn");
const threeDotBack = document.querySelector(".roundBox");
const displayValue = document.querySelector(".displayValue")


document.querySelector('.themeOne').addEventListener('click', (evnet)=> {
    
    for (let i = 0; i < keypadButtons.length; i++) {
        keypadButtons[i].style.color = "#444b5a";
        keypadButtons[3].style.color = "white";
    }


});

document.querySelector('.themeTwo').addEventListener('click', (evnet)=> {
    
    body.style.backgroundColor = '#e6e6e6'
    calcAndToggle.style.color = '#35352c'
    threeDotBack.style.backgroundColor = '#d1cccc'
    displayValue.style.backgroundColor = '#ededed'
    for (let i = 0; i < keypadButtons.length; i++) {
        keypadButtons[i].style.backgroundColor = "#377f86";
        keypadButtons[i].style.color = "#35352c";
        keypadButtons[3].style.backgroundColor = "#377f86";
        keypadButtons[3].style.color = "#ffffff";
        keypadButtons[3].style.boxShadow = "0 3px #1b5f65";

    }

    
});


// const themeTwo = document
//     .querySelector(".themeTwo")
//     .addEventListener("click", () => {
//         document.body.style.backgroundColor = "#e6e6e6";
//         document.querySelector(".roundBox").style.backgroundColor = "#d1cccc";
//         document.querySelector(".displayValue").style.backgroundColor = "#ededed";
//         document.querySelector(".keypadSection").style.backgroundColor = "#d1cccc";
//         document.querySelectorAll(".button").style.textColor = "red";
//     });

// const themeThree = document
//     .querySelector(".themeThree")
//     .addEventListener("click", () => {
//         document.body.style.backgroundColor = "#160628";
//         document.querySelector(".roundBox").style.backgroundColor = "#1d0934";
//         document.querySelector(".displayValue").style.backgroundColor = "#1d0934";
//         document.querySelector(".keypadSection").style.backgroundColor = "#1d0934";
//     });

// Add Functionality

// let value = addEventListener('keydown', ()=>{
//     let display = input.value;
//     return
// })

// document.querySelector('.score').textContent = display;

// document.addEventListener('keypress', (e) => {
//     document.querySelector('.score').textContent = e.key;
// })
