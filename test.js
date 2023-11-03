// export const village = (data) => {
//     const [infoBar, buttons] = [
//         searchInfoBar(data),
//         searchButtons(data)
//     ]
  
//     for( let i = 0; i < buttons.length; i++ ) {
//         switch(i) {
//             case 0:
//                 buttons[i].innerHTML = `<h3 class="village__shop">Shop</h3>`
//                 break;
//             case 1:
//                 buttons[i].innerHTML = `<h3 class="village__lucky-pirate">Lucky Pirate</h3>`
//                 break;
//             case 2:
//                 buttons[i].innerHTML = `<h3 class="village__info">Info</h3>`
//                 break;
//             default: 
//                 buttons[i].innerHTML = `<h3 class="village__exit">Exit</h3>`
//                 break;
//         }
//     }
//     setClickEvent(buttons)

   
    
// }



const routingCache = [
    {
        name: 'Home',
        level: 0
    },
    {
        name: 'Village1',
        level: 1
    },
    {
        name: 'Shop',
        level: 2
    },
    
]; 


function previousButton(routingCache) {
    const found = routingCache.reverse().find(el => el.level < routingCache[0].level)
    console.log('CHECK1: ', routingCache)
    routingCache.reverse()
    console.log('CHECK2: ', routingCache)
    return found ? found.name : routingCache[0].name   
}


console.log(previousButton(routingCache))