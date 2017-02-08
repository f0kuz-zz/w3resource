var select = document.querySelector('#colorSelect'),
    btn = select.nextElementSibling;


var removeColor = function() {

    select.remove(select.selectedIndex);
};



btn.addEventListener('click', removeColor, false);