import { searchTool } from './functions/functions';
import { routing } from './routing';
import { initLocationsList } from './functions/functions';

export const game = (el) => {
    initLocationsList()
    const data = [];
    data.push(
        {
            name: 'element',
            value: el,
        },
        {
            name: 'infoBar',
            value: document.querySelector('.game-info__text')
        },
        {
            name: 'buttons',
            value: Array.from(document.querySelectorAll('.btn'))
        }
    )
    

    const infoBar = searchTool(data, 'infoBar');
    
    function loadingDots() { 
        let i = 0; 
        function recursion(i) {
            setTimeout(() => {
                infoBar.innerText += `.`
                i++
                if(i < 2) recursion(i)
            }, 330)
        }
        recursion(i)
    }
    setTimeout(() => {
        infoBar.innerText = `Entering`
        loadingDots()
    }) 
    
    
    setTimeout(() => routing(data), 1000)
   
    
}