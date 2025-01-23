//Ensure you have a header with your Name, Student ID number, and Github name in each source file!
// Valentine Jones, 923405441, RussianGravy
//this script has all of the essential logic for the game

//removes the control buttons when needed
function deleteButtons() {
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].remove();
    i--;
  }
}

//shows 'how to play' text
async function howToPlay() {
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.opacity = 0;
    buttons[i].style.opacity = 0;
    buttons[i].style.position = "absolute";
    buttons[i].style.pointerEvents = "none";
  }
  await printText(controls);
  await sleepNow(3000);
  instructions.innerText = "";
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.opacity = 1;
    buttons[i].style.opacity = 1;
    buttons[i].style.position = "static";
    buttons[i].style.pointerEvents = "auto";
  }
}

//shows 'about' text
async function about() {
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.opacity = 0;
    buttons[i].style.opacity = 0;
    buttons[i].style.position = "absolute";
    buttons[i].style.pointerEvents = "none";
  }
  await printText(
    "Just something I imagined while dozing during Discrete Math."
  );
  await sleepNow(1250);
  instructions.innerText = "";
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.opacity = 1;
    buttons[i].style.opacity = 1;
    buttons[i].style.position = "static";
    buttons[i].style.pointerEvents = "auto";
  }
}

//start level one conditions
async function level_1() {
  await printText("Create a graph with \n - 3 Verteces \n - 2 edges.");
  var gotVerts = verts.size == 3;
  var gotEdges = edges.size == 2;
  while (!gotVerts || !gotEdges) {
    console.log(edges.size, verts.size);
    var gotVerts = verts.size == 3;
    var gotEdges = edges.size == 2;
    await sleepNow(250);
  }
  await printText("GOOD JOB!!");
  await sleepNow(1000);
}

//start level two conditions
async function level_2() {
  await printText("Create a graph with \n - 5 Verteces \n - 3 edges.");
  var gotVerts = verts.size == 5;
  var gotEdges = edges.size == 3;
  while (!gotVerts || !gotEdges) {
    console.log(edges.size, verts.size);
    var gotVerts = verts.size == 5;
    var gotEdges = edges.size == 3;
    await sleepNow(250);
  }
  await printText("GOOD JOB!!");
  await sleepNow(1000);
}

//start game
async function start() {
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.opacity = 0;
    buttons[i].style.opacity = 0;
    buttons[i].style.position = "absolute";
    buttons[i].style.pointerEvents = "none";
  }
  await level_1();
  await reset();
  await level_2();
  await reset();
  await printText("More coming soon...");
  await sleepNow(1000);
  instructions.innerText = "";
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.opacity = 1;
    buttons[i].style.opacity = 1;
    buttons[i].style.position = "static";
    buttons[i].style.pointerEvents = "auto";
  }
}
