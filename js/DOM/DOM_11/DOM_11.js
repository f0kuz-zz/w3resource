var btn = document.querySelector('.show'),
    content = document.querySelector('.content');

var theImages = [
    {
        src: 'http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg'
    },

    {
        src: 'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg'
    },

    {
        src: 'http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg'
    }
];

function getRandom() {
    return Math.round(Math.random() * (2 - 0));
}

function createRandomImages() {
    var newImg = new Image(),
        random = getRandom();

    newImg.src = theImages[random].src;

    if(content.hasChildNodes()) {
        content.removeChild(content.querySelector(':first-child'));
        content.appendChild(newImg);
    } else {
        content.appendChild(newImg);
    }

}

btn.addEventListener('click', createRandomImages, false);