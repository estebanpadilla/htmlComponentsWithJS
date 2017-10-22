window.addEventListener('load', init, false);

function init() {
    /*
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');
    */

    var body = document.getElementById('body');
    console.log(body);

    var button = document.createElement("button");
    button.innerHTML = "Do Something";
    button.style.width = '130px';
    button.style.height = '50px';
    button.style.borderRadius = '5px';
    button.style.color = 'white';
    button.style.border = '2px';
    button.style.borderColor = '#789200';
    button.style.borderStyle = 'solid';
    button.style.fontSize = '15px';
    button.style.fontFamily = 'Impact, Charcoal, sans-serif';
    button.style.backgroundColor = '#7892c2';
    button.style.position = 'absolute';
    var ypos = (window.innerHeight / 2) - 25;
    var xpos = (window.innerWidth / 2) - 65;
    button.style.top = ypos + 'px';
    button.style.left = xpos + 'px';
    body.appendChild(button);
    button.addEventListener("click", buttonClick, false);

    window.onresize = function onresize(e) {
        var ypos = (window.innerHeight / 2) - 25;
        var xpos = (window.innerWidth / 2) - 65;
        button.style.top = ypos + 'px';
        button.style.left = xpos + 'px';
    }
}

function buttonClick(e) {
    console.log(e);
}