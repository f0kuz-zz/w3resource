/**
 * Created by marcingroszkiewicz on 11.04.2016.
 */

var arr = [],
    i = 0,
    addBtn = document.querySelector('#add'),
    displayBtn = document.querySelector('#display'),
    arrWrap = document.querySelector('.array-wrapper');

addBtn.addEventListener('click', function() {
    myField = document.querySelector('#text-field').value;
    arr.push(myField);
    alert('Dodano element o indeksie ' + i + '. Jego wartość to: ' + arr[i]);
    i++;
    myField = document.querySelector('#text-field').value = '';
});

displayBtn.addEventListener('click', function() {
    elem = '<hr/>';
    for(var i = 0; i < arr.length; i++) {
        elem += "Element " + i + " = " + arr[i] + '<br>';
    }
    arrWrap.innerHTML = elem;
});