/**
 * Created by groszkiewicz on 14.01.2017.
 */

var form = document.querySelector('#form1');

form.addEventListener('submit', function () {

    alert(form.fname.value + '\n' + form.lname.value);
}, false);