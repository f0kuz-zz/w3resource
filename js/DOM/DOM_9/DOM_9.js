var select = document.querySelector('#colorSelect'),
    btn = select.nextElementSibling,
    l = select.length,
    txt = 'Number of options: ';


// var showOptions = function() {
//     var arr = select.children,
//         count = 0;
//
//     for(var i = 0; i < arr.length; i++) {
//         count++;
//         text += arr[i].value + '\n';
//     }
//
//     alert('Number of options: ' + count + '\n ' + text);
// };

function showOptions() {
    txt = txt + l;
    for(var i = 0; i < l; i++) {
        txt = txt + '\n' + select.options[i].value;
    }

    alert(txt);
}



btn.addEventListener('click', showOptions, false);