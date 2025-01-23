//Ensure you have a header with your Name, Student ID number, and Github name in each source file!
// Valentine Jones, 923405441, RussianGravy
// this script has all of the essential game functions

const alphabet = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

const topLay = document.getElementById("layer_top");
const ctxTop = topLay.getContext("2d");
const botLay = document.getElementById("layer_bottom");
const ctxBot = botLay.getContext("2d");

topLay.width = topLay.offsetWidth; //500
topLay.height = topLay.offsetHeight; //400

botLay.width = botLay.offsetWidth; //500
botLay.height = botLay.offsetHeight; //400

circle_radius = topLay.width / 60;
circle_spacing = topLay.width / 20;

var rows = [];
var cols = [];

//draws initial gameboard
for (
  var y = (circle_radius + circle_spacing) / 2;
  y < topLay.height;
  y += circle_radius + circle_spacing
) {
  rows.push(y);
  for (
    var x = (circle_radius + circle_spacing) / 2;
    x < topLay.width - circle_spacing / 2;
    x += circle_radius + circle_spacing
  ) {
    drawCircle(x, y);
    cols.push(x);
  }
}

//resets gameboard for next level (see logic.js )
async function reset() {
  rows = [];
  cols = [];
  numClicks = 0;
  lPos = [0, 0];
  cPos = [0, 0];
  verts = new Map();
  edges = new Map();
  ctxBot.clearRect(0, 0, topLay.offsetWidth, topLay.offsetHeight);
  ctxTop.clearRect(0, 0, topLay.offsetWidth, topLay.offsetHeight);
  for (
    var y = (circle_radius + circle_spacing) / 2;
    y < topLay.height;
    y += circle_radius + circle_spacing
  ) {
    rows.push(y);
    for (
      var x = (circle_radius + circle_spacing) / 2;
      x < topLay.width - circle_spacing / 2;
      x += circle_radius + circle_spacing
    ) {
      drawCircle(x, y);
      cols.push(x);
    }
  }
}

//draws a circle to show selection, before drawing vert
function drawCircle(x, y, fill = false, fillColor = "grey", stroke = "grey") {
  var temp1 = ctxTop.strokeStyle;
  var temp2 = ctxTop.fillStyle;
  var temp3 = ctxTop.lineWidth;

  ctxTop.strokeStyle = stroke;
  ctxTop.fillStyle = fillColor;
  ctxTop.lineWidth = 1;

  ctxTop.beginPath();

  ctxTop.arc(x, y, circle_radius, 0, 2 * Math.PI);

  ctxTop.closePath();

  ctxTop.stroke();

  if (fill) {
    ctxTop.fill();
  }

  ctxTop.strokeStyle = temp1;
  ctxTop.fillStyle = temp2;
  ctxTop.lineWidth = temp3;
}

//draws an edge using the coordinates
function drawEdge(x1, y1, x2, y2) {
  if (x1 == x2 && y1 == y2) {
    return;
  } //skips if using same pos
  ctxBot.lineWidth = 4;
  ctxBot.strokeStyle = "black";

  ctxBot.beginPath();

  ctxBot.moveTo(x1, y1);

  ctxBot.lineTo(x2, y2);

  ctxBot.closePath();

  ctxBot.stroke();

  //makes unique key for the edges map
  var key = makeKey(x1, y1, x2, y2);
  if (!edges.has(key)) {
    var letter = alphabet.substring(edges.size, edges.size + 1);
    edges.set(key, [
      letter,
      verts.get(makeKey(x1, y1)),
      verts.get(makeKey(x2, y2)),
    ]);
    console.log(edges.get(key));
    ctxBot.lineWidth = 4; //reset
    ctxBot.strokeStyle = "black"; //reset
  }
}

//overloads makekey for vertices map
function makeKey(x, y, x2 = null, y2 = null) {
  var key = Math.pow(2, x) * Math.pow(3, y / 15);
  if (x2 != null && y2 != null) {
    key =
      Math.pow(2, x / 15) -
      Math.pow(3, y / 15) -
      Math.pow(2, x2 / 15) -
      Math.pow(3, y2 / 15);
  }
  return key;
}

function considerVert(x, y) {
  var key = makeKey(x, y);
  console.log(x + ", " + y + " => " + key);
  if (!verts.has(key)) {
    verts.set(key, [verts.size + 1, x, y]);
    drawCircle(x, y, true, "red");
    ctxTop.strokeStyle = "white";
    ctxTop.strokeText(verts.size, x - 4, y + 4);
    return true;
  } else return false;
}

var numClicks = 0;
var lPos = [0, 0];
var cPos = [0, 0];
var verts = new Map();
var edges = new Map();

topLay.addEventListener("mousedown", (event) => {
  numClicks++;
  x =
    rows[
      Math.floor(
        (event.pageX - topLay.offsetLeft + 0.5) /
          (circle_radius + circle_spacing)
      )
    ];
  y =
    cols[
      Math.floor(
        (event.pageY - topLay.offsetTop + 0.5) /
          (circle_radius + circle_spacing)
      )
    ];
  if (!verts.has(makeKey(x, y))) {
    drawCircle(x, y, true, "grey", "black");
  }
  if (numClicks % 2 == 0) {
    considerVert(lPos[0], lPos[1]);
    considerVert(x, y);
    drawEdge(lPos[0], lPos[1], x, y);
  }
  lPos = [x, y];
});
