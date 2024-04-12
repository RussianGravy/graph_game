const wdow = document.getElementById('window')
const ctx = wdow.getContext("2d")

wdow.width = wdow.offsetWidth; //500
wdow.height = wdow.offsetHeight; //400

circle_radius = wdow.width/40;
circle_spacing = wdow.width/20;

var rows = [];
var cols =[];

function drawCircle(x, y, fill = false){
    ctx.beginPath()

    ctx.arc(x, y, circle_radius, 0, 2 * Math.PI);

    ctx.closePath()

    ctx.stroke();
    
    if(fill)
        ctx.fill();
}

for (var y = circle_spacing; y < wdow.height; y += circle_radius+circle_spacing) {
    rows.push(y);
    for (var x = circle_spacing; x < wdow.width-circle_spacing/2; x += circle_radius+circle_spacing) {
        drawCircle(x, y)
        cols.push(x);
    }
}

var cPos = [0, 0];

wdow.addEventListener('mousedown', (event) => {
    x = rows[Math.floor((event.pageX+0.5)/(circle_radius+circle_spacing))];
    y = cols[Math.floor((event.pageY+0.5)/(circle_radius+circle_spacing))];
    drawCircle(x, y, true);
})