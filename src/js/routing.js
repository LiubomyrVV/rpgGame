import { searchTool, initLocation } from './functions/functions';
import { game } from './game';

export function routing(data) {
    console.log('rout: ', data)
    
    const el = searchTool(data, 'element')
    const buttons = searchTool(data, 'buttons')
    buttons.forEach(el => el.removeEventListener('click', game))

    initLocation(data, el.target.innerText)
}