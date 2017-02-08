/**
 * Created by groszkiewicz on 14.01.2017.
 */

var w3r = document.querySelector('#w3r'),
    btn = document.querySelector('.btn');

function getAttributes() {
    var currAttrs = w3r.attributes,
        myAttr = [];

    Array.prototype.forEach.call(currAttrs, function (elem) {
            myAttr.push(elem);
    });


    for(var i = 0; i < myAttr.length; i++) {
        if(myAttr[i].name !== 'id') {
            console.log(myAttr[i].value);
        }
    }
}

btn.addEventListener('click', getAttributes, false);