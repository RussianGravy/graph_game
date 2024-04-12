const wdow = document.getElementById('window')
const ctx = wdow.getContext("2d")

wdow.width = 500;
wdow.height = 400;

console.log(wdow.width)

circle_radius = 5;

circle_spacing = 20;

var circles = [];

function drawCircle(x, y) {
    ctx.beginPath()

    ctx.arc(x, y, circle_radius, 0, 2 * Math.PI);

    ctx.closePath()

    ctx.stroke();
}

for (var y = circle_spacing; y < wdow.height; y += circle_spacing) {
    for (var x = 3*circle_spacing/5; x < wdow.width-circle_spacing/2; x += circle_radius+circle_spacing) {
        drawCircle(x, y)
    }
}