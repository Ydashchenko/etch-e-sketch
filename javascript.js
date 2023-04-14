const DEFAULT_SIZE = 16
const DEFAULT_MODE = 'black'

let currentSize = DEFAULT_SIZE
let currentMode = DEFAULT_MODE



function newMode(mode) {
    currentMode = mode
    if (currentMode === 'black'){
        black.classList.add('activated')
        rainbow.classList.remove('activated')
        eraser.classList.remove('activated')
    } else if (currentMode === 'rainbow') {
        black.classList.remove('activated')
        rainbow.classList.add('activated')
        eraser.classList.remove('activated')
    } else if (currentMode === 'eraser') {
        black.classList.remove('activated')
        rainbow.classList.remove('activated')
        eraser.classList.add('activated')
    }
}

function activateBlack() {
    newMode('black')
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = 'black'
    }))
}

function activateRainbow() {
    newMode('rainbow')
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.addEventListener('mouseover', function(e) {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        this.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`
    }))
}

function activateEraser() {
    newMode('eraser')
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = 'white'
    }))
}

function newGrid() {
    currentSize = prompt('What size do you want the SketchBox to be? (Max value - 100)')
    if (currentSize < 1 || currentSize > 100 || isNaN(currentSize)) {
        return alert('Available size 1-100')
    }
    document.getElementById('container').innerHTML = ''
    buildGrid()
    setSize.textContent = `${currentSize} x ${currentSize}`
}
function mouseOverBtn() {
    let buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.addEventListener('mouseover', function(e) {
        this.classList.add('mouse-over-btn')
    }))

}

function mouseOutBtn() {
    let buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.addEventListener('mouseout', function(e) {
        this.classList.remove('mouse-over-btn')
    }))
}

function clearGrid() {
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.style.backgroundColor = ('white'))
}

function buildGrid() {
    for (i = 0; i < currentSize; i++){
        const column = document.createElement('div')
        column.classList.add('column')
        container.appendChild(column)
        for (j = 0; j < currentSize; j++) {
            const row = document.createElement('div')
            row.classList.add('row')
            row.classList.add('cell')
            column.appendChild(row)
        }
    }
}

const container = document.querySelector('#container')

const black = document.getElementById('black')
black.addEventListener('click', activateBlack)

const rainbow = document.getElementById('rainbow')
rainbow.addEventListener('click', activateRainbow)

const eraser = document.getElementById('eraser')
eraser.addEventListener('click', activateEraser)

const clear = document.getElementById('clear')
clear.addEventListener('click', clearGrid)

const setSize = document.getElementById('set-size')
setSize.addEventListener('click', newGrid)
setSize.textContent = `${currentSize} x ${currentSize}`


window.onload = () => {
    buildGrid()
    newMode(currentMode)
    activateBlack()
    mouseOverBtn()
    mouseOutBtn()
}

