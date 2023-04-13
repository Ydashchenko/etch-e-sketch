function hoverGrid() {
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = 'black'
    }))
}

function newGrid() {
    size = prompt('What size do you want the SketchBox to be? (Max value - 100)')
    if (size < 1 || size > 100 || isNaN(size)) {
        return alert('Available size 1-100')
    }
    document.getElementById('container').innerHTML = ''
    for (i = 0; i < size; i++){
        const column = document.createElement('div')
        column.classList.add('column')
        container.appendChild(column)
        for (j = 0; j < size; j++) {
            const row = document.createElement('div')
            row.classList.add('row')
            row.classList.add('cell')
            column.appendChild(row)
        }
    }
    hoverGrid()
    sizeLabel.textContent = `${size} x ${size}`
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

let size = 16
const sizeLabel = document.getElementById('sizeLabel')
sizeLabel.textContent = `${size} x ${size}`

for (i = 0; i < size; i++){
    const column = document.createElement('div')
    column.classList.add('column')
    container.appendChild(column)
    for (j = 0; j < size; j++) {
        const row = document.createElement('div')
        row.classList.add('row')
        row.classList.add('cell')
        column.appendChild(row)
    }
}
hoverGrid()
mouseOverBtn()
mouseOutBtn()

const clear = document.getElementById('clear')
clear.addEventListener('click', clearGrid)

const setSize = document.getElementById('set-size')
setSize.addEventListener('click', newGrid)