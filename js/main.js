console.log('2nd sprint- naamna& Itsik')

var gCanvas;
var ctx;
var gImg;
var gImgs = [{id: 0, keywords: ['happy'] },   
            { id: 1, keywords: ['sad'] }     
            ];
var gMeme = { selectedImgId: 5, txts: [{ line: 'I never eat Falafel', size: 20, align: 'left', color: 'red' }] }

function init() {
    gCanvas = document.getElementById('canvas');
    ctx = gCanvas.getContext('2d');
    renderPhotos()
}

function drawOnCanvas(imgId) {
    console.log('img', imgId)
    var elPoolImg = document.querySelector(".imgPool");
    var elCanvas= document.querySelector("#canvas");
    elPoolImg.style.display = 'none';
    elCanvas.style.display = 'flex';

    img = new Image();
    img.src = `../img/memes/${imgId}-meme.jpg`

   img.onload = function () {
        ctx.drawImage(img, 0, 0, 568, 360);
        ctx.font = "50px 'Segoe UI'";
        ctx.fillStyle = 'white';
    };
}

function renderPhotos() {
    var elImgPool = document.querySelector('.imgPool');

    var strHtmls = gImgs.map(function (img, idx) {
        return `
            <div class="singalImg" onclick="drawOnCanvas(${img.id})">
            <img src="img/memes/${img.id}-meme.jpg" alt=""></div> 
        `
    });


    elImgPool.innerHTML = strHtmls.join('')
}









// /* image extracting 
function downloadImg(elLink) {
    elLink.href = gCanvas.toDataURL();
    elLink.download = 'perfectMeme.jpg';
}