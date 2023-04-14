const DEFAULT_MODE = 'black'
const DEFAULT_SIZE = 16

let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE


function hoverGridBlack() {
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = 'black'
    }))
}

function hoverGridErase() {
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
    hoverGridBlack()
    sizeLabel.textContent = `${currentSize} x ${currentSize}`
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

const container = document.querySelector('#container')


const sizeLabel = document.getElementById('sizeLabel')
sizeLabel.textContent = `${currentSize} x ${currentSize}`

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
hoverGridBlack()
mouseOverBtn()
mouseOutBtn()

const black = document.getElementById('black')
black.addEventListener('click', hoverGridBlack)

const eraser = document.getElementById('eraser')
eraser.addEventListener('click', hoverGridErase)

const clear = document.getElementById('clear')
clear.addEventListener('click', clearGrid)

const setSize = document.getElementById('set-size')
setSize.addEventListener('click', newGrid)