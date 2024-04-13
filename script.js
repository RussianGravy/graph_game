const wdow = document.getElementById('window')
const ctx = wdow.getContext("2d")

wdow.width = wdow.offsetWidth; //500
wdow.height = wdow.offsetHeight; //400

circle_radius = wdow.width/60;
circle_spacing = wdow.width/20;

var rows = [];
var cols =[];

function drawCircle(x, y, fill = false, fillColor = 'grey', stroke = 'grey'){
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fillColor;
    ctx.lineWidth = 1;

    ctx.beginPath()

    ctx.arc(x, y, circle_radius, 0, 2 * Math.PI);

    ctx.closePath()

    ctx.stroke();
    
    if(fill)
        ctx.fill();
}

function drawEdge(x1, y1, x2, y2){
    ctx.lineWidth = 7.5;

    ctx.beginPath()

    ctx.moveTo(x1, y1);

    ctx.lineTo(x2, y2);

    ctx.closePath();

    ctx.stroke();

    drawCircle(x1, y1, true, 'red');
    drawCircle(x2, y2, true, 'red');
}

for (var y = (circle_radius+circle_spacing)/2; y < wdow.height; y += circle_radius+circle_spacing) {
    rows.push(y);
    for (var x = (circle_radius+circle_spacing)/2; x < wdow.width-circle_spacing/2; x += circle_radius+circle_spacing) {
        drawCircle(x, y)
        cols.push(x);
    }
}

var cPos = [0, 0];
verts = [];
edges = [];

wdow.addEventListener('mousedown', (event) => {
    x = rows[Math.floor((event.pageX-wdow.offsetLeft+0.5)/(circle_radius+circle_spacing))];
    y = cols[Math.floor((event.pageY-wdow.offsetTop+0.5)/(circle_radius+circle_spacing))];
    drawCircle(x, y, true, 'grey', 'black');
    cPos = [x, y];
    verts.push(cPos);
    if(verts.length%2==0){
        var start = verts[verts.length-2];
            console.log(start);
        var end = verts[verts.length-1];
            console.log(end);
        drawEdge(start[0], start[1], end[0], end[1]);
    }
})