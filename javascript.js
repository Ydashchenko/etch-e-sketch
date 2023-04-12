const container = document.querySelector('#container')

for (i = 0; i < 4; i++){
    const column = document.createElement('div')
    column.classList.add('column')
    container.appendChild(column)
    for (j = 0; j < 4; j++) {
        const row = document.createElement('div')
        row.classList.add('row')
        column.appendChild(row)
    }
}
