import { searchTool, setClickEvent } from '../functions/functions';


export function Location() {
   
    this.constructor = function(data, buttonsText) {
        this.buttonsText = buttonsText
        
        this.infoBar = searchTool(data, 'infoBar')
        this.buttons = searchTool(data, 'buttons')
        console.log(this.buttonsText)
    }
    this.init = function() {
        if(this.buttons !== undefined) {
            for( let i = 0; i < this.buttons.length; i++ ) {
                switch(i) {
                    case 0:
                        this.buttons[i].innerHTML = `<h3 class="village__shop">${this.buttonsText[i]}</h3>`
                        break;
                    case 1:
                        this.buttons[i].innerHTML = `<h3 class="village__lucky-pirate">${this.buttonsText[i]}</h3>`
                        break;
                    case 2:
                        this.buttons[i].innerHTML = `<h3 class="village__info">${this.buttonsText[i]}</h3>`
                        break;
                    default: 
                        this.buttons[i].innerHTML = `<h3 class="village__exit">${this.buttonsText[i]}</h3>`
                        break;
                }
            }
            setClickEvent(this.buttons)
        } else {
            alert( new Error('suka yobana'))
        }
    }     
}



