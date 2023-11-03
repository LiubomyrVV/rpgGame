import { textData } from "../../DataBase/textDataBD";
import { routingCache } from "../../DataBase/routingCache";
import { game } from "../game"
import { locationList } from "../init";
import { Location } from "../locations/locations";

export function initLocation(data, btn) {
    let location =  locationList.filter(el => el.name === btn)[0] !== undefined ? locationList.filter(el => el.name === btn) : locationList.filter(el => el.name === searchPreviousButtonName(routingCache))
    location = location[0]
  
    
   
    console.log(
        'locationList: ', locationList,
        'routingCache: ', routingCache,
        'textData: ', textData,
        'btn: ', btn,
        'LOCATIOOON: ', location,
        'PreviousButton: ', searchPreviousButtonName(routingCache),
        'locationList.filter(el => el.name === searchPreviousButtonName(routingCache)): ', locationList.filter(el => el.name === searchPreviousButtonName(routingCache))
    )
    
    try{
        if(btn !== 'Exit' && btn !== 'Run' ){
            location.init(data, searchButtonsText(textData, btn)) 
        } else {
            location.init(data, searchButtonsText(textData, searchPreviousButtonName(routingCache),)) 
        }
        
    } catch (err) {
        console.log(new Error('location Init Error: '), err)
        location.init(data, searchButtonsText(textData, 'Error')) 
    }

    routingCache.push(location)
    
    if(routingCache.length > 9) {
        routingCache.shift()
    }
    
    
}   


function searchPreviousButtonName(cache) {
    const found = cache.reverse().find(el => el.level < cache[0].level)
    console.log('CHECKER SUKA: ', cache, 'cache last el: ', cache[0])
    cache.reverse()
    return found ? found.name : cache[0].name   
}


export function initLocationsList() {
    let locations = [];
    textData.forEach(el => {
        locations.push(el.name)
    })
    locations = locations.map(element => {
        
        
       
        return {
            name: element,
            level: searchLevel(element),
            init: function(data, buttonsText) {
                const btn = new Location();
                btn.constructor(data, buttonsText);
                btn.init();
            }
        }
    })
    console.log('locations: ', locations)
    return locations; 
}

function searchLevel(element) {
    try {
        let obj = textData.filter(el => el.name === element)[0].level
        return obj
    } catch(err) {
        console.log(new Error('SearchLevel Error: ', err))
        return 0
    }
}

export function setClickEvent(buttons) {
    buttons.forEach(el => el.addEventListener('click', gameInit))
} 

export function searchTool(arr, name) {
    const element = arr.filter(el => el.name === name)
    return element[0].value;
   
}

export function searchButtonsText(arr, location) {
    console.log('searchButtonsText: ', [arr, location])
    if(location === 'Exit' || location === 'Run') {
        console.log('arr ', arr.filter(el => el.name === 'Home'))
        
        return arr.filter(el => el.name === 'Home')[0].value
    } 
    const element = arr.filter(el => el.name === location);
    console.log('ELEMENT ', element)
    return element[0].value;  
}


export function debounce(func, delay) {
    let timer; 
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => func.apply(this, args), delay)
    }

}
export const gameInit = debounce(game, 300)