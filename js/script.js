const topLay = document.getElementById('layer_top')
const ctxTop = topLay.getContext("2d")
const botLay = document.getElementById('layer_bottom')
const ctxBot = botLay.getContext("2d")

topLay.width = topLay.offsetWidth; //500
topLay.height = topLay.offsetHeight; //400

botLay.width = botLay.offsetWidth; //500
botLay.height = botLay.offsetHeight; //400

circle_radius = topLay.width/60;
circle_spacing = topLay.width/20;

var rows = [];
var cols =[];

for (var y = (circle_radius+circle_spacing)/2; y < topLay.height; y += circle_radius+circle_spacing) {
    rows.push(y);
    for (var x = (circle_radius+circle_spacing)/2; x < topLay.width-circle_spacing/2; x += circle_radius+circle_spacing) {
        drawCircle(x, y)
        cols.push(x);
    }
}

function drawCircle(x, y, fill = false, fillColor = 'grey', stroke = 'grey'){
    var temp1 = ctxTop.strokeStyle;
    var temp2 = ctxTop.fillStyle;
    var temp3 = ctxTop.lineWidth;

    ctxTop.strokeStyle = stroke;
    ctxTop.fillStyle = fillColor;
    ctxTop.lineWidth = 1;

    ctxTop.beginPath()

    ctxTop.arc(x, y, circle_radius, 0, 2 * Math.PI);

    ctxTop.closePath()

    ctxTop.stroke();
    
    if(fill){
        ctxTop.fill();}

    ctxTop.strokeStyle = temp1;
    ctxTop.fillStyle = temp2;
    ctxTop.lineWidth = temp3;
}

function drawVert(){

}

function drawEdge(x1, y1, x2, y2){
    ctxBot.lineWidth = 4;
    ctxBot.strokeStyle = 'black';

    var rat;

    var offset = [
        Math.abs(0),
        Math.abs(0)
    ]; 

    ctxBot.beginPath();

    ctxBot.moveTo(x1, y1);

    ctxBot.lineTo(x2, y2);

    ctxBot.closePath();

    ctxBot.stroke();
}

function makeKey(x, y){
    return Math.pow(2, x)*Math.pow(3, -1*y);
}

function considerVert(x, y){
    var key = makeKey(x, y);
    if(!verts.has(key)){
        verts.set(key, verts.size+1);
        drawCircle(x, y, true, 'red');
        ctxTop.strokeStyle = 'white';
        ctxTop.strokeText(verts.size,x-4,y+4);
        return true;
    }
    else 
        return false
}

var numClicks = 0;
var lPos = [0,0];
var cPos = [0, 0];
var verts = new Map();
var edges = new Map();

topLay.addEventListener('mousedown', (event) => {
    numClicks++;
    x = rows[Math.floor((event.pageX-topLay.offsetLeft+0.5)/(circle_radius+circle_spacing))];
    y = cols[Math.floor((event.pageY-topLay.offsetTop+0.5)/(circle_radius+circle_spacing))];
    if(!verts.has( makeKey(x, y) )){
        drawCircle(x, y, true, 'grey', 'black');
    }
    if(numClicks%2==0){
        drawEdge(lPos[0], lPos[1], x, y);
        considerVert(lPos[0], lPos[1]);
        considerVert(x, y);
    }
    lPos = [x, y];
})