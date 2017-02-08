var btn = document.querySelector('#btn');

function createTable() {
    var table = document.createElement('table'),
        rows = window.prompt('How many rows you want?'),
        columns = window.prompt('How many columns?');

    table.appendChild(document.createElement('tbody'));
    table.style.border = '1px solid #000';


    for(var i = 1; i <= rows; i++) {

        var row = table.insertRow();
        // var row = document.createElement('tr');
        // table.appendChild(row);

        for(var j = 1; j <= columns; j++) {
            var cell = row.insertCell(j);
            cell.textContent = 'Row ' + i + ' Cell ' + j;
            // var cell = document.createElement('td');
            // cell.style.border = '1px solid #000';
            // row.appendChild(cell).textContent = 'Row ' + i + ' Cell ' + j;
        }
    }




    document.body.insertBefore(table, btn);
}

btn.onclick = createTable;