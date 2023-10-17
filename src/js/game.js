import { searchInfoBar } from './functions';
import { routing } from './routing';

export const game = (el) => {
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
    

    const infoBar = searchInfoBar(data);
    
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