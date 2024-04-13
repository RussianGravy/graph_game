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

function drawEdge(x1, y1, x2, y2){
    var temp1 = ctx.strokeStyle;
    var temp2 = ctx.fillStyle;

    ctx.lineWidth = 4;

    ctx.beginPath()

    ctx.moveTo(x1, y1);

    ctx.lineTo(x2, y2);

    ctx.closePath();

    ctx.stroke();

    drawCircle(x1, y1, true, 'red');
    ctx.strokeStyle = 'white';
    ctx.strokeText(String(verts.length-2),x1-4,y1+4);
    ctx.strokeStyle = temp1;
    drawCircle(x2, y2, true, 'red');
    ctx.strokeStyle = 'white';
    ctx.strokeText(String(verts.length-1),x2-4,y2+4);

    ctx.strokeStyle = temp1;
    ctx.fillStyle = temp2;
}

function considerVert(x, y){
    //check if there is a vertex at this position. 
    //if not, add this vertex and draw it.\
    //only call on this method on second click.
}

var numClicks = 0;
var cPos = [0, 0];
var verts = new Map();
var edges = new Map();

wdow.addEventListener('mousedown', (event) => {
    numClicks++;
    x = rows[Math.floor((event.pageX-wdow.offsetLeft+0.5)/(circle_radius+circle_spacing))];
    y = cols[Math.floor((event.pageY-wdow.offsetTop+0.5)/(circle_radius+circle_spacing))];
    drawCircle(x, y, true, 'grey', 'black');

    // cPos = [x, y];
    // verts.push(cPos);
    // if(verts.length%2==0){
    //     var start = verts[verts.length-2];
    //     var end = verts[verts.length-1];
    //     drawEdge(start[0], start[1], end[0], end[1]);
    // }
})