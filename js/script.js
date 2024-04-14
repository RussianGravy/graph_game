const wdow = document.getElementById('window')
const ctx = wdow.getContext("2d")

wdow.width = wdow.offsetWidth; //500
wdow.height = wdow.offsetHeight; //400

circle_radius = wdow.width/60;
circle_spacing = wdow.width/20;

var rows = [];
var cols =[];

for (var y = (circle_radius+circle_spacing)/2; y < wdow.height; y += circle_radius+circle_spacing) {
    rows.push(y);
    for (var x = (circle_radius+circle_spacing)/2; x < wdow.width-circle_spacing/2; x += circle_radius+circle_spacing) {
        drawCircle(x, y)
        cols.push(x);
    }
}

function drawCircle(x, y, fill = false, fillColor = 'grey', stroke = 'grey'){
    var temp1 = ctx.strokeStyle;
    var temp2 = ctx.fillStyle;
    var temp3 = ctx.lineWidth;

    ctx.strokeStyle = stroke;
    ctx.fillStyle = fillColor;
    ctx.lineWidth = 1;

    ctx.beginPath()

    ctx.arc(x, y, circle_radius, 0, 2 * Math.PI);

    ctx.closePath()

    ctx.stroke();
    
    if(fill){
        ctx.fill();}

    ctx.strokeStyle = temp1;
    ctx.fillStyle = temp2;
    ctx.lineWidth = temp3;
}

function drawVert(){

}

function drawEdge(x1, y1, x2, y2){
    var temp1 = ctx.strokeStyle;
    var temp2 = ctx.fillStyle;
    var temp3 = ctx.lineWidth;

    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';

    var rat;

    var offset = [
        Math.abs(0),
        Math.abs(0)
    ]; 

    ctx.beginPath();

    ctx.moveTo(x1, y1);

    ctx.lineTo(x2, y2);

    ctx.closePath();

    ctx.stroke();

    ctx.strokeStyle = temp1;
    ctx.fillStyle = temp2;
    ctx.lineWidth = temp3;
}

function considerVert(x, y){
    //check if there is a vertex at this position. 
    //if not, add this vertex and draw it.
    //only call on this method on second click.
    var key = Math.pow(2, x)*Math.pow(3, -1*y);
    if(!verts.has(key)){
        verts.set(key, verts.size+1);
        drawCircle(x, y, true, 'red');
        ctx.strokeStyle = 'white';
        ctx.strokeText(verts.size,x-4,y+4);
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

wdow.addEventListener('mousedown', (event) => {
    numClicks++;
    x = rows[Math.floor((event.pageX-wdow.offsetLeft+0.5)/(circle_radius+circle_spacing))];
    y = cols[Math.floor((event.pageY-wdow.offsetTop+0.5)/(circle_radius+circle_spacing))];
    if(!verts.has(Math.pow(2, x)*Math.pow(3, -1*y))){
        drawCircle(x, y, true, 'grey', 'black');
    }
    if(numClicks%2==0){
        drawEdge(lPos[0], lPos[1], x, y);
        considerVert(lPos[0], lPos[1]);
        considerVert(x, y);
    }
    lPos = [x, y];
    //drawCircle(x, y, true, 'grey', 'black');
})