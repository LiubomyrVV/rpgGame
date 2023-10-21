import '../scss/global.scss';
import { game } from './game';

const [body, div] = [
    document.querySelector('body'),
    document.createElement('div'),
]





const containerDiv = div.cloneNode()
    containerDiv.className = 'game-window'

const gameInfoDiv = div.cloneNode()
    gameInfoDiv.innerHTML = `<h2 class="game-info__text">What road will you choose?</h2>`
    gameInfoDiv.className = `game-info`

const buttonsDiv = div.cloneNode()
    buttonsDiv.className = 'buttons'

const villageBtn = div.cloneNode()
    villageBtn.innerHTML = `<h3 class="village-button__text">Village</h3>`
    villageBtn.className = `village-button btn`

const forestBtn = div.cloneNode()
    forestBtn.innerHTML = `<h3 class="forest-button__text">Forest</h3>`
    forestBtn.className = `forest-button btn`

const caveBtn = div.cloneNode()
    caveBtn.innerHTML = `<h3 class="cave-button__text">Cave</h3>`
    caveBtn.className = `cave-button btn`

const dragonCaveBtn = div.cloneNode()
    dragonCaveBtn.innerHTML = `<h3 class="cave-button__text">Dragon Cave</h3>`
    dragonCaveBtn.className = `dragon-cave-button btn`



containerDiv.append(gameInfoDiv, buttonsDiv)
buttonsDiv.append(villageBtn, forestBtn, caveBtn, dragonCaveBtn)
body.append(containerDiv)

setTimeout(document.querySelectorAll('.btn').forEach(el => el.addEventListener('click', game)))


