import { buttonsText } from "../../DataBase/buttonsTextDB";
import { game } from "../game";
import { Location } from "../locations/locations";

export function initLocation(data, btn) {
    const location = initLocationsList().filter(el => el.name === btn)
    return location[0].init(data, searchButtonsText(buttonsText, btn))
}   
export function initLocationsList() {
    let locations = [];
    buttonsText.forEach(el => {
    locations = locations.concat(el.value)
    })

    locations = locations.map(el => {
        return {
            name: el,
            init: function(data, buttonsText) {
                const btn = new Location();
                btn.constructor(data, buttonsText);
                btn.init();
            }
        }
    })
    return locations; 
}


export function setClickEvent(buttons) {
    buttons.forEach(el => el.addEventListener('click', game))
} 

export function searchTool(arr, name) {
    const element = arr.filter(el => el.name === name)
    return element[0].value;
   
}
export function searchInfoBar(arr) {
    const infoBar = arr.filter(el => el.name === 'infoBar')
    return infoBar[0].value;
   
}

export function searchButtons(arr) {
    const buttons = arr.filter(el => el.name === 'buttons')
    return buttons[0].value;
   
}

export function searchEl(arr) {
    const element = arr.filter(el => el.name === 'element');
    return element[0].value;
}
export function searchButtonsText(arr, location) {
    const element = arr.filter(el => el.name === location);
    return element[0].value;
}