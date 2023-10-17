import { forest, village, cave, dragonCave } from './locations';
import { searchButtons, searchEl } from './functions';

export function routing(data) {
    console.log('rout ', data)
    const el = searchEl(data)
    const buttons = searchButtons(data);
    
    switch (el.target.innerText){
        case 'Village':
            village(data)
            break; 
        case 'Forest':
            forest(data)
            break;
        case 'Cave':
            cave(data)
            break; 
        case 'Dragon Cave':
            dragonCave(data)
            break; 
        default: 
            break;
    }
}