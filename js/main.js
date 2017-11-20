console.log('2nd sprint- naamna& Itsik')

var gCanvas;
var ctx;
var gImgs = [{ id: 0, name: 'willy wonka and the chocolate factory', keywords: ['happy', 'ironic', 'hat', 'purpel'] },
{ id: 1, name: 'game of thrones', keywords: ['sad', 'winter', 'ironic'] },
{ id: 2, name: 'big lewbovski', keywords: ['sad', 'gun', 'fat', 'sunglas'] },
{ id: 3, name: 'hardi', keywords: ['sad', 'israel', 'happy'] },
{ id: 4, name: 'futurema', keywords: ['funny', 'not sure', 'ironic'] },
{ id: 5, name: 'first world problems', keywords: ['sad', 'child', ' tell me', 'first world'] },
{ id: 6, name: 'zzzz', keywords: ['sad', 'israel', 'happy', 'hat'] },
{ id: 7, name: 'dzsfadd', keywords: ['sad', 'funny'] },
{ id: 8, name: 'niga', keywords: ['sad', 'funny'] },
{ id: 9, name: 'funny cat', keywords: ['sad', 'funny'] },
{ id: 10, name: 'sponge bob', keywords: ['sad', 'funny'] },
{ id: 11, name: 'win 95', keywords: ['sad', 'funny'] },
{ id: 12, name: 'funny dog', keywords: ['sad', 'funny'] },
];
// STATE!
var gMeme = {
    selectedImgId: 5,
    src: '',
    font: 'Segoe UI',
    txts:
<<<<<<< HEAD
    [{ line: '', size: '50px', align: 'left', color: 'red', x: 50, y: 50, shadow: false },
    { line: '', size: '50px', align: 'center', color: 'blue', x: 250, y: 250, shadow: false }]
=======
        [{ line: '', size: '50px', align: 'left', color: 'red', x: 50, y: 50, shadow: false },
        { line: '', size: '50px', align: 'center', color: 'blue', x: 50, y: 250, shadow: false }]
>>>>>>> dd5cd4fb7ac367c90fc6d0979c93f64a4793b912
}

function init() {
    gCanvas = document.getElementById('canvas');
    ctx = gCanvas.getContext('2d');
    rendeGneratorPanel();
    renderPhotos(gImgs);
}
// toggle canvas
function toggleCanvas(toOpen, imgId) {
    var elImgPool = document.querySelector('.imgPool');
    var elSearch = document.querySelector('.search')
    var elCanvas = document.querySelector('.main');
    if (toOpen) {
        elImgPool.style.display = 'none';
        elSearch.style.display = 'none';
        elCanvas.style.display = 'block';
        gMeme.selectedImgId = imgId;
        gMeme.src = `../img/memes/${imgId}-meme.jpg`
        loadImg()
    } else {
        elImgPool.style.display = 'flex';
        elCanvas.style.display = 'none';
        elSearch.style.display = 'flex';
        gMeme = {
            selectedImgId: 5,
            src: '',
            font: 'Segoe UI',
            txts: [
                { line: '', size: '50px', align: 'left', color: 'red', x: 50, y: 50, shadow: false },
                { line: '', size: '50px', align: 'center', color: 'blue', x: 250, y: 250, shadow: false }
            ]
        };
        rendeGneratorPanel()
    }
}
function loadImg() {
    img = new Image();
    img.src = gMeme.src;
    img.onload = drawOnCanvas()
}
// Main Function (itsik)
function drawOnCanvas() {
    var hRatio = canvas.width / img.width    ;
    var vRatio = canvas.height / img.height  ;
    var ratio  = Math.min ( hRatio, vRatio );
    ctx.drawImage(img, 0,0, img.width, img.height, 0,0,img.width*ratio, img.height*ratio)
        gMeme.txts.forEach(function (txt, i) {
            ctx.font = `${txt.size}  ${gMeme.font}`;
            ctx.fillStyle = txt.color;
            ctx.fillText(txt.line, txt.x, txt.y);
            ctx.fillText(txt.line, txt.x, txt.y);
            if (txt.shadow) {
                ctx.shadowColor = "black";
                ctx.shadowOffsetX = 40;
                ctx.shadowOffsetY = 40;
                ctx.shadowBlur = 20;
            }
            ctx.fillText(txt.line, txt.x, txt.y);
            ctx.fillText(txt.line, txt.x, txt.y);
            console.log(gMeme)
    })
}

function renderPhotos(imgs) {
    var elImgPool = document.querySelector('.imgPool');

    var strHtmls = imgs.map(function (img, idx) {
        return `
            <div class="singalImg flex" onclick="toggleCanvas(true, ${img.id})">
            <p class="meme-name">${img.name}</p>
            <img src="img/memes/${img.id}-meme.jpg" alt="">
            </div> 
        `
    });
    elImgPool.innerHTML = strHtmls.join('')
}

function searchImg() {
    var searchTxt = document.querySelector('#mySearch').value;
    var sortedImgs = [];
    gImgs.forEach(function (img, i) {
        if (img.name.includes(searchTxt)) {
            sortedImgs.push(img)
        }
    });
    renderPhotos(sortedImgs)
}

function toggleKeyWords() {
    var elCloud = document.querySelector('.keywords-cloud');
    var elGeneratorPanel = document.querySelector('.main');
    elCloud.style.display = elCloud.style.display === 'flex' ? 'none' : 'flex';

    // genrate keywords
    var keywords = [];
    gImgs.forEach(function (img, idx) {
        img.keywords.forEach(function (keyword) {
            keywords.push(keyword);
        });
    });
    // create tag cloud
    var keywordCount = {}
    for (var i = 0; i < keywords.length; i++) {
        var word = keywords[i];
        !keywordCount[word] ? keywordCount[word] = 1 : keywordCount[word]++
    }
    // render keywords
    var strHtmls = '';
    for (word in keywordCount) {
        strHtmls += `<div class="key-word" onclick="renderByKeyword('${word}')">
       <span style="font-size:${keywordCount[word]}em"> ${word} </span> </div> `
        console.log(keywordCount[word])
    }
    // elCloud.innerHTML = strHtmls.join('');
    elCloud.innerHTML = strHtmls
}

function renderByKeyword(keyword) {
    var elCloud = document.querySelector('.keywords-cloud');
    elCloud.style.display = elCloud.style.display === 'flex' ? 'none' : 'flex';

    var sortedImgs = gImgs.filter(function (img) {
        for (var i = 0; i < img.keywords.length; i++) {
            if (img.keywords[i] === keyword) return img
        }
    });
    renderPhotos(sortedImgs)
}


// /* image extracting 
function downloadImg(elLink) {
    elLink.href = gCanvas.toDataURL();
    elLink.download = 'perfectMeme.jpg';
}

// function getUserImg(userImg) {
//     console.log(userImg)
//     gMeme.selectedImgId = 'userUpload',
//     gMeme.src = userImg;
//     //toggle img Pool
//     var elImgPool = document.querySelector(".imgPool");
//     var elCanvas = document.querySelector(".memeGenerator");
//     elImgPool.style.display = 'none';
//     elCanvas.style.display = 'flex';
//    drawOnCanvas()
// }


function uploadImage() {

    var file = event.srcElement.files[0];
    console.log('elad')
    var img = document.createElement("img");
    var reader = new FileReader();
    reader.onloadend = function () {
        console.log(reader.result)
        img.src = reader.result;
        
    }
    reader.readAsDataURL(file);
    img.onload = toggleCanvas(true, reader.result ) 
}


function togglesrc(toOpen ,img) {
    var elImgPool = document.querySelector('.imgPool');
    var elSearch = document.querySelector('.search')
    var elCanvas = document.querySelector('.main');
    if (toOpen) {
        elImgPool.style.display = 'none';
        elSearch.style.display = 'none';
        elCanvas.style.display = 'flex';
        gMeme.selectedImgId = imgId;
        gMeme.src = img.src
        loadImg()
    } else {
        elImgPool.style.display = 'flex';
        elCanvas.style.display = 'none';
        elSearch.style.display = 'flex';
        gMeme = {
            selectedImgId: 5,
            src: '',
            font: 'Segoe UI',
            txts: [
                { line: '', size: '50px', align: 'left', color: 'red', x: 50, y: 50, shadow: false },
                { line: '', size: '50px', align: 'center', color: 'blue', x: 250, y: 250, shadow: false }
            ]
        };
        rendeGneratorPanel()
    }
}

