console.log('2nd sprint- naamna& Itsik')


var gCanvas;
var ctx;
// TODO add url .
// TODO function addIMG
var gImgs = [{ id: 0, name: 'ddd', keywords: ['happy'] },
    { id: 1, name: 'ddd', keywords: ['sad'] },
    { id: 2, name: 'ddd', keywords: ['sad'] },
    { id: 3, name: 'ddd', keywords: ['sad'] },
    { id: 4, name: 'ddd', keywords: ['sad'] },
    { id: 5, name: 'ddd', keywords: ['sad'] },
    { id: 6, name: 'ddd', keywords: ['sad'] },
    { id: 7, name: 'ddd', keywords: ['sad'] },
];
var gMeme = { selectedImgId: 5, txts: [{ line: 'I never eat Falafel', size: 20, align: 'left', color: 'red' }] }

function init() {
    gCanvas = document.getElementById('canvas');
    ctx = gCanvas.getContext('2d');
    renderPhotos()
}
// toggle canvas
function toggleCanvas(toOpen, imgId) {
    var elImgPool = document.querySelector(".imgPool");
    var elCanvas = document.querySelector(".memeGenerator");
    if (toOpen) {
        elImgPool.style.display = 'none';
        elCanvas.style.display = 'flex';
        drawOnCanvas(imgId)
    }   else    {
        elImgPool.style.display = 'flex';
        elCanvas.style.display = 'none';  
        // renderPhotos()
    }
}
function drawOnCanvas(imgId) {

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
            <div class="singalImg" onclick="toggleCanvas(true, ${img.id})">
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




//serch  function

function searchImg() {
   var elSearchTxt = document.querySelector("#mySearch").value;
   console.log(elSearchTxt)
}