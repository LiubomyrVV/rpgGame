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