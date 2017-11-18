console.log('2nd sprint- naamna& Itsik')

var gCanvas;
var ctx;
// TODO add url .
// TODO function addIMG
var gImgs = [{ id: 0, name: 'ddd', keywords: ['happy, ironic, hat, purpel'] },
{ id: 1, name: 'ddd', keywords: ['sad, winter, ironic'] },
{ id: 2, name: 'aaa', keywords: ['sad, gun, fat, sunglas'] },
{ id: 3, name: 'ddd', keywords: ['sad, israel, happy'] },
{ id: 4, name: 'aaa', keywords: ['funny, not sure, ironic'] },
{ id: 5, name: 'ddd', keywords: ['sad, child, tell me, first world'] },
{ id: 6, name: 'ddd', keywords: ['sad, israel, happy, hat'] },
{ id: 7, name: 'ddd', keywords: ['sad, funny'] },
];
// STATE!
var gMeme = {
    selectedImgId: 5, src: '',
    txts:
    [{ line1: 'I never eat Falafel', size1: 20, align1: 'left', color1: 'red' },
    { line2: 'say one more time', size2: 10, align1: 'center', color2: 'blue' }]
}

function init() {
    gCanvas = document.getElementById('canvas');
    ctx = gCanvas.getContext('2d');
    renderPhotos(gImgs)
}
// toggle canvas
function toggleCanvas(toOpen, imgId) {
    var elImgPool = document.querySelector(".imgPool");
    var elCanvas = document.querySelector(".memeGenerator");
    if (toOpen) {
        elImgPool.style.display = 'none';
        elCanvas.style.display = 'flex';
        gMeme.selectedImgId = imgId;
        gMeme.src = `../img/memes/${imgId}-meme.jpg`
        drawOnCanvas()
    } else {
        elImgPool.style.display = 'flex';
        elCanvas.style.display = 'none';
        // renderPhotos()
    }
}
function drawOnCanvas() {
    // update the state (globle var)
    img = new Image();
    img.src = gMeme.src

    img.onload = function () {
        ctx.drawImage(img, 0, 0, 568, 360);
        ctx.font = "50px 'Segoe UI'";
        ctx.fillStyle = 'white';
    };
}

function renderPhotos(imgs) {
    var elImgPool = document.querySelector('.imgPool');

    var strHtmls = imgs.map(function (img, idx) {
        return `
            <div class="singalImg" onclick="toggleCanvas(true, ${img.id})">
            <img src="img/memes/${img.id}-meme.jpg" alt=""></div> 
        `
    });


    elImgPool.innerHTML = strHtmls.join('')
}

//serch  function

function searchImg() {
    var elSearchTxt = document.querySelector('#mySearch').value;
    var sortedImgs = [];
    gImgs.forEach(function (sortt, idx) {
        if (elSearchTxt === gImgs[idx].name) {
            sortedImgs.push(gImgs[idx])
        }
        console.log(sortedImgs)
    });
    renderPhotos(sortedImgs)
  
}    

    // keyword sort
    function toggleKeyWords() {
        var elCloud = document.querySelector('.keywords-cloud')
        elCloud.style.display =  elCloud.style.display === 'none' ? 'block' : 'none'
        // rennder keyword
        var keywords = gImgs.filter(function (img,idx) {
            return img.keywords
        })
        elCloud.innerHTML = keywords
    }
    

// /* image extracting 
function downloadImg(elLink) {
    elLink.href = gCanvas.toDataURL();
    elLink.download = 'perfectMeme.jpg';
}




