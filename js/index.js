
import { menuControl } from "./menu_load.js";

menuControl

document.querySelectorAll(`.flipSection`).forEach(x => {

    let y = x.querySelector(`.hiddenSide`)

    function toggleClasses() {
        y.classList.toggle(`flipEndWriteWayUp`);
        y.classList.toggle(`flipEndWrongWayUp`);
        x.querySelector(`.notHidden`).classList.toggle(`flipEndWrongWayUp`);
        x.querySelector(`.notHidden`).classList.toggle(`flipEndWriteWayUp`);
    }

    y.addEventListener(`click`, t => {
        toggleClasses()
    })

    x.querySelector(`.notHidden`).addEventListener(`click`, t => {
        toggleClasses()
    })

})

window.addEventListener(`resize`, x => {

    document.documentElement.style.setProperty(`--size`, document.querySelector(`#max`).clientHeight + `px`);

})
