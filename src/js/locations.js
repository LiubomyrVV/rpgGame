import { game } from './game';
import { searchButtons, searchEl } from './functions';

export const village = (data) => {
    
    const buttons = searchButtons(data);
    for( let i = 0; i < buttons.length; i++ ) {
        switch(i) {
            case 0:
                buttons[i].innerHTML = `<h3 class="village__shop">Shop</h3>`
                break;
            case 1:
                buttons[i].innerHTML = `<h3 class="village__lucky-pirate">Lucky Pirate</h3>`
                break;
            case 2:
                buttons[i].innerHTML = `<h3 class="village__info">Info</h3>`
                break;
            default: 
                buttons[i].innerHTML = `<h3 class="village__exit">Exit</h3>`
                break;
        }
    }

   
    
}

export const forest = (data) => {
    console.log(data)
}

export const cave = (data) => {
    console.log(data)
}

export const dragonCave = (data) => {
    console.log(data)
}
