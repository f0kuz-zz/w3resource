var radius = document.querySelector('#radius'),
    volume = document.querySelector('#volume'),
    btn = document.querySelector('#btn');

function getSphere() {
    var rad = parseInt(radius.value),
        vol = ((4/3) * Math.PI * Math.pow(rad, 3)).toFixed(4);

    volume.value = vol;
}

btn.onclick = getSphere;