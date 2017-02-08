/**
 * Created by groszkiewicz on 14.01.2017.
 */

var btn = document.querySelector('#jsstyle');

var pe = document.querySelector('#text');
btn.addEventListener('click', function () {

    // pe.style.fontSize = '22px';
    // pe.style.color = 'red';

    pe.style.cssText = 'color: red; font-size: 22px';

    // pe.style.color = '';



}, false);

console.log(window.getComputedStyle(pe).display);