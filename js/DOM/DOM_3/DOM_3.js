/**
 * Created by groszkiewicz on 14.01.2017.
 */

var para = document.querySelector('p'),
    btn = document.querySelector('#btn');

btn.onclick = function () {
    para.style.backgroundColor = document.body.firstElementChild.nextElementSibling.value;
    var someChild = document.createElement('p');
    someChild.textContent = 'example';

    para.after(someChild);
};