window.addEventListener('load', init, false);

function init() {
    /*
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');
    */
    console.log('init');

    var body = document.getElementById('body');
    console.log(body);

    var button = document.createElement("button");
    button.innerHTML = "Do Something";
    button.style
    body.appendChild(button);

    button.addEventListener("click", function () {
        alert("did something");
    });
}