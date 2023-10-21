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
const data = [1,23,12]
const arr = ['1','2', '3']
function Location(data, arr) {
    this.data = data
    this.arr = arr
}


const location = new Location();
console.log(location)
location(data, arr)
console.log(location)