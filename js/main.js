console.log('איציק ונעמן')

var gCanvas;
var ctx;
var gImg;

function init() {
    gCanvas = document.getElementById('canvas');
    ctx = gCanvas.getContext('2d');
    drawOnCanvas();
}

function drawOnCanvas() {
    gImg = new Image();
    gImg.src = "../img/memes/1-meme.jpg"

    gImg.onload = function () {
        ctx.drawImage(gImg, 0, 0, 568, 360);

        ctx.font = "50px 'Segoe UI'";
        ctx.fillStyle = 'white';
        ctx.fillText("Text on Canvas", 50, 300);
    };
}



// /* image extracting 
function downloadImg(elLink) {
    elLink.href = gCanvas.toDataURL();
    elLink.download = 'perfectMeme.jpg';
}