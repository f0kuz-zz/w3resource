/**
 * Created by groszkiewicz on 14.01.2017.
 */

var table = document.querySelector('#sampleTable tbody'),
    btn = table.parentNode.nextElementSibling,
    j = 3;


function insertRow() {
    var row = document.createElement('tr');

    table.appendChild(row);
    for(var i = 0; i < 2; i++) {
        row.appendChild(document.createElement('td')).textContent = 'Row ' + j + 'cell' + (i+1);
    }
    j++;
}

btn.onclick = insertRow;

