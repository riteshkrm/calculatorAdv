const body = document.querySelector("body");
const themeSwitch = document.querySelectorAll('.dot');
const buttons = document.querySelectorAll('.one');
const score = document.querySelector('.score');
let scoreDisplay = '';

for (let i = 0; i < themeSwitch.length; i++) {
    themeSwitch[0].addEventListener('click', (event) => {
        body.classList.remove('themeSwitchTwo')
        body.classList.remove('themeSwitchThree')
    })

    themeSwitch[1].addEventListener('click', (event) => {
        body.classList.add('themeSwitchTwo')
        body.classList.remove('themeSwitchThree')
    })

    themeSwitch[2].addEventListener('click', (event) => {
        body.classList.add('themeSwitchThree')
        body.classList.remove('themeSwitchTwo')
    })
}


Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.innerHTML;
        
        if (buttonValue === '=') {
            try {
                scoreDisplay = eval(scoreDisplay);
                score.textContent = scoreDisplay;
            } catch (error) {
                console.error('Error:', error);
            }
        } else if (buttonValue === 'reset') {
            scoreDisplay = '';
            score.textContent = scoreDisplay;
        } else if (buttonValue === 'DEL') {
            scoreDisplay = scoreDisplay.slice(0, -1);
            score.textContent = scoreDisplay;
        } else {
            scoreDisplay = scoreDisplay + buttonValue;
            score.textContent = scoreDisplay;
        }
    });
});


// for (let index = 0; index < themeSwitch.length; index++) {

//     themeSwitch[0].addEventListener('click', (evnet) => {

//         for (let i = 0; i < keypadButtons.length; i++) {
//             keypadButtons[i].style.color = "#444b5a";
//             keypadButtons[3].style.color = "white";
//         }


//     });


//     themeSwitch[1].addEventListener('click', (evnet) => {

//         body.style.backgroundColor = '#e6e6e6'
//         calcAndToggle.style.color = '#35352c'
//         displayValue.style.color = '#35352c'
//         threeDotBack.style.backgroundColor = '#d1cccc'
//         displayValue.style.backgroundColor = '#ededed'
//         keypadSection.style.backgroundColor = '#d1cccc'

//         for (let i = 0; i < keypadButtons.length; i++) {
//             keypadButtons[i].style.backgroundColor = "#e5e4e1";
//             keypadButtons[i].style.color = "#35352c";
//             keypadButtons[i].style.boxShadow = "0 3px #a69d91";
//             keypadButtons[3].style.backgroundColor = "#377f86";
//             keypadButtons[3].style.color = "#ffffff";
//             keypadButtons[3].style.boxShadow = "0 3px #1b5f65";
//         }

//         for (let i = 0; i < resetAndEqual.length; i++){
//             resetAndEqual[0].style.backgroundColor = '#ca5502';
//             resetAndEqual[0].style.boxShadow = "0 3px #893901";
//             console.log(resetAndEqual);
//         }
//     });

//     themeSwitch[2].addEventListener("click", () => {
//         body.style.backgroundColor = "#160628";
//         roundBox.style.backgroundColor = "#1d0934";
//         displayValue.style.backgroundColor = "#1d0934";
//         keypadSection.style.backgroundColor = "#1d0934";
//     });

// themeSwitch[0].addEventListener('click', (event) => {
//     const link = document.createElement('link');
//     link.href = './Style/styles.css';
//     link.rel = 'stylesheet';
//     document.getElementsByTagName('head')[0].appendChild(link);
// })

// themeSwitch[1].addEventListener('click', (event) => {
//     const link = document.createElement('link');
//     link.href = './Style/themeTwo.css';
//     link.rel = 'stylesheet';
//     document.getElementsByTagName('head')[0].appendChild(link);
// })

// themeSwitch[2].addEventListener('click', (event) => {
//     const link = document.createElement('link');
//     link.href = './Style/themeThree.css';
//     link.rel = 'stylesheet';
//     document.getElementsByTagName('head')[0].appendChild(link);
// })

// }