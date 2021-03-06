/// render the panel for each text

function rendeGneratorPanel() {
    var elGeneratorPanel = document.querySelector('.generatorPanel');
    var strHtml = ''
    for (var i = 0; i < gMeme.txts.length; i++) {
        strHtml += `<div class="panel">
        <div class="remove-line"><input type="text" id="textToCanvas" name="t" placeholder="Insert meme" onkeyup="getTxt(this.value, ${i})">
        <button class ="deleteRow" onclick="removeTextLine(${i})"><i class="fa fa-trash-o" aria-hidden="true"></i></button></div>
        <div class="button-bar">
            <button onclick="txtDirection('left',${i}, 20)"><i class="fa fa-align-left" aria-hidden="true"></i></button>
            <button onclick="txtDirection('right',${i},400)"><i class="fa fa-align-right" aria-hidden="true"></i></button>
            <button onclick="txtDirection('center',${i}, 230)"><i class="fa fa-align-center" aria-hidden="true"></i></button>
            <button onclick="isTextShadow(${i})" class="shadow">shadow</button>
            <button onclick="textUp(10,${i})" ><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
            <button onclick="textDown(10,${i})"><i class="fa fa-arrow-down" aria-hidden="true"></i></button>
            <button><input type="color"  id="color-picker" onchange="getColor(this.value,${i})"></button>
            <button>  <input type="number" value="50" id="font-size" name="t" placeholder="font size" onchange="getFontSize(this.value,${i})"></button>
        </div>
        </div>`
    }
    elGeneratorPanel.innerHTML = strHtml;
}

function addTextLine() {
    var newLine = { line: '', size: '50px', align: 'left', color: 'red', x: 150, y: 150 }
    gMeme.txts.push(newLine);
    rendeGneratorPanel()
}

function removeTextLine(idx) {
    console.log(gMeme.txts[idx])
    gMeme.txts.splice(idx, 1)
    rendeGneratorPanel()
    drawOnCanvas()
}

///functions for stylish the txt on the meme photo

function getTxt(insertedTxt, i) {
    gMeme.txts[i].line = insertedTxt;
    drawOnCanvas()
}
function txtDirection(direction, idx, x) {
    gMeme.txts[idx].align = direction;
    gMeme.txts[idx].x = x;
    drawOnCanvas()
}

function textDown(y, idx) {
    gMeme.txts[idx].y += y;
    drawOnCanvas()
}

function textUp(y, idx) {
    gMeme.txts[idx].y -= y;
    drawOnCanvas()
}

function isTextShadow(idx) {
    if (gMeme.txts[idx].shadow) {
        gMeme.txts[idx].shadow = false;
    } else {
        gMeme.txts[idx].shadow = true;
    }
    drawOnCanvas()
}

function getColor(insertedColor,i) {
    gMeme.txts[i].color = insertedColor;
    drawOnCanvas()
}

function getFontSize(insertedSize, i) {
    gMeme.txts[i].size = insertedSize + 'px';
    drawOnCanvas();
}

function getFont(fontName) {
    gMeme.font = fontName;
    drawOnCanvas()
}