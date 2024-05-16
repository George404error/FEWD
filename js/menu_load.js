export { menu as menuControl } from "./menu_load.js";

export function menu() {
    // toggles all the menus for me.
    document.querySelector(`.menu section`).addEventListener(`click`, ev => {

        document.querySelector(`.menu nav`).classList.toggle(`open`);

    })
}

menu();
