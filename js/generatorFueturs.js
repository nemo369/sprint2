/// render the panel for each text

function rendeGneratorPanel() {
    var elGeneratorPanel = document.querySelector('.generatorPanel');
    var strHtml = ''
    for (var i = 0; i < gMeme.txts.length; i++) {
        strHtml += `<input type="text" id="textToCanvas" name="t" placeholder="Insert meme" onkeyup="getTxt(this.value, ${i})">
        <input type="number" value="50" id="font-size" name="t" placeholder="font size" onchange="getFontSize(this.value,${i})">
        <input type="color"  id="color-picker" onchange="getColor(this.value,${i})">
        <div class="button-bar">
            <button onclick="txtDirection('left',${i}, 20)">align left</button>
            <button onclick="txtDirection('right',${i},400)">align right</button>
            <button onclick="txtDirection('center',${i}, 230)">align center</button>
            <button class="isTextShadow()">text shadow</button>
            <button onclick="textUp(10,0)" >text up</button>
            <button onclick="textDown(10,0)">text down</button>
        </div>`
    }
    elGeneratorPanel.innerHTML = strHtml;
}

function addTextLine() {
    var newLine = { line: '', size: '50px', align: 'left', color: 'red', x: 150, y: 150 }
    gMeme.txts.push(newLine);
    rendeGneratorPanel()
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

function isTextShadow() {
    if (gMeme.txts[idx].shadow) {
        gMeme.txts[idx].shadow = false;
    } else {
        gMeme.txts[idx].shadow = true;
    }
    drawOnCanvas()
}

function getColor(insertedColor) {
    console.log(insertedColor)
    gMeme.txts[1].color = insertedColor;
    drawOnCanvas()
}

function getFontSize(insertedSize, i) {
    console.log(insertedSize, i);
    gMeme.txts[i].size = insertedSize + 'px';
    drawOnCanvas();
}

function getFont(fontName) {
    gMeme.font = fontName;
    drawOnCanvas()
}