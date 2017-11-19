console.log('2nd sprint- naamna& Itsik')

var gCanvas;
var ctx;
// TODO add url .
// TODO function addIMG
var gImgs = [{ id: 0, name: 'ddd', keywords: ['happy', 'ironic', 'hat', 'purpel'] },
{ id: 1, name: 'ddd', keywords: ['sad', 'winter', 'ironic'] },
{ id: 2, name: 'aaa', keywords: ['sad', 'gun', 'fat', 'sunglas'] },
{ id: 3, name: 'ddd', keywords: ['sad', 'israel', 'happy'] },
{ id: 4, name: 'aaa', keywords: ['funny', 'not sure', 'ironic'] },
{ id: 5, name: 'ddd', keywords: ['sad', 'child', ' tell me', 'first world'] },
{ id: 6, name: 'ddd', keywords: ['sad', 'israel', 'happy', 'hat'] },
{ id: 7, name: 'ddd', keywords: ['sad', 'funny'] },
];
// STATE!
var gMeme = {
    selectedImgId: 5, src: '',
    font: 'Segoe UI',
    txts:
    [{ line: '', size: '50px', align: 'left', color: 'red', x: 50, y: 50, shadow: false },
    { line: '', size: '50px', align: 'center', color: 'blue', x: 250, y: 250, shadow: false }]
}

function init() {
    gCanvas = document.getElementById('canvas');
    ctx = gCanvas.getContext('2d');
    rendeGneratorPanel();
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

// updating gMeme form generatorPanel (itsik)

function getTxt(insertedTxt, i) {
    // var insertedTxt = document.querySelector("#textToCanvas").value;
    gMeme.txts[i].line = insertedTxt;
    drawOnCanvas()
}
function txtDirection(direction, x, idx) {
    gMeme.txts[idx].align = direction + "";
    gMeme.txts[idx].x = x;
    drawOnCanvas()
    console.log(gImgs)
}

function textDown(y, idx) {
    gMeme.txts[idx].y += y;
    drawOnCanvas()
}

function textUp(y, idx) {
    gMeme.txts[idx].y -= y;
    drawOnCanvas()

}

function isTextShadow() {
   if( gMeme.txts[idx].shadow) {
      gMeme.txts[idx].shadow = false 
   } else {
       gMeme.txts[idx].shadow = true 
   }
    drawOnCanvas()
}


function getColor(insertedColor) {
    console.log(insertedColor)
    gMeme.txts[1].color = insertedColor;
    drawOnCanvas()
}
//TODO function render gmeme to  canvas

function getFontSize(insertedSize, i) {
    console.log(insertedSize, i);
    gMeme.txts[i].size = insertedSize + 'px';
    drawOnCanvas();
}
function drawOnCanvas() {
    img = new Image();
    img.src = gMeme.src

    img.onload = function () {
        ctx.drawImage(img, 0, 0, 568, 360);
        gMeme.txts.forEach(function (txt, i) {
            ctx.font = `${txt.size}  ${gMeme.font}`;
            ctx.fillStyle = txt.color;
            ctx.shadowColor = "black";
            if (txt.shadow) {
                ctx.shadowColor = "black";
                ctx.shadowOffsetX = 40;
                ctx.shadowOffsetY = 40;
                ctx.shadowBlur = 20;
            }
            ctx.fillText(txt.line, txt.x, txt.y);
            ctx.fillText(txt.line, txt.x, txt.y);
        })
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
    });
    renderPhotos(sortedImgs)

}

// keyword sort
function toggleKeyWords() {
    var elCloud = document.querySelector('.keywords-cloud');
    elCloud.style.display = elCloud.style.display === 'flex' ? 'none' : 'flex';
    // genrate keywords
    var keywords = [];
    gImgs.forEach(function (img, idx) {
        img.keywords.forEach(function (keyword) {
            keywords.push(keyword);
        });
    });
    // render keywords
    var strHtmls = keywords.map(function (keyword, idx) {
        return `
            <div class="key-word" onclick="renderByKeyword('${keyword}')">
             ${keyword} </div> 
        `
    });
    elCloud.innerHTML = strHtmls.join('');
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

function getFont(fontName) {
    console.log(fontName)
    gMeme.font = fontName;
    drawOnCanvas()
}

function rendeGneratorPanel() {
    console.log('11')
    var elGeneratorPanel = document.querySelector('.generatorPanel');
    var strHtml =''
    for (var i = 0; i < gMeme.txts.length; i++) {
        strHtml += `<input type="text" id="textToCanvas" name="t" placeholder="Insert meme" onkeyup="getTxt(this.value, ${i})">
        <input type="number" value="50" id="font-size" name="t" placeholder="font size" onchange="getFontSize(this.value,${i})">
        <input type="color"  id="color-picker" onchange="getColor(this.value,${i})">
        <div class="button-bar">
            <button onclick="txtDirection('center',150)">align left</button>
            <button>align right</button>
            <button>center</button>
            <button>text shadow</button>
            <button>text color</button>
        </div>`
    }
    elGeneratorPanel.innerHTML = strHtml;
}

function addTextLine() {
    var newLine = {line: '', size: '50px', align: 'left', color: 'red', x: 150, y: 150 }
    gMeme.txts.push(newLine);
    rendeGneratorPanel()
}