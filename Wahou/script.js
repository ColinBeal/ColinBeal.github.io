function changeImage() {
    var image = document.getElementById('mute');
    if (image.src.match("sound")) {
        image.src = "images/mute.png";
    }
    else {
        image.src = "images/sound.png";
    }
}
var audio = document.getElementById('audio');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();

}, false);
function overlay() {
    el = document.getElementById("overlay");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

function fwdimage(){
    document.getElementById('hero').style.backgroundImage = "url('images/church1.jpg')";
}
function rwdimage(){
    document.getElementById('hero').style.backgroundImage = "url('images/forest2.jpg')";
}
