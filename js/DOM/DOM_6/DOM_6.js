/**
 * Created by groszkiewicz on 14.01.2017.
 */

var table = document.querySelector('#myTable tbody'),
    btn = table.parentNode.nextElementSibling;

function changeContent() {
    var myRow = window.prompt('Which row you want to change?', '0, 1 or 2'),
        myColumn = window.prompt('Which column you chose?', '0 or 1'),
        myContent = window.prompt('Type new content', 'C\'mon don\'t be shy');

    var destCell = table.rows[myRow].cells[myColumn];
    destCell.innerHTML = myContent;
}

btn.onmouseover = changeContent;