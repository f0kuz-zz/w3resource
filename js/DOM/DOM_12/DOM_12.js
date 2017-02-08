var roll = document.querySelector('.roll'),
    effect = roll.nextElementSibling,
    strong = document.querySelectorAll('strong');

function highlight() {
    for(var i = 0; i < strong.length; i++) {
        strong[i].style.color = 'red';
    }
}

function none() {
    for(var i = 0; i < strong.length; i++) {
        strong[i].style.color = 'black';
    }
}

roll.addEventListener('mouseover', highlight, false);
roll.addEventListener('mouseleave', none, false);

// roll.removeEventListener(highlight);