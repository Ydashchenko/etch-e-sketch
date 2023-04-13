const container = document.querySelector('#container')

const size = 100
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

let cells = document.querySelectorAll('.cell')
cells.forEach(cell => cell.addEventListener('mouseover', function(e) {
    this.style.backgroundColor = 'black'
}))