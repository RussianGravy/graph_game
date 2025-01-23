//Ensure you have a header with your Name, Student ID number, and Github name in each source file!
// Valentine Jones, 923405441, RussianGravy
//this is a short script to create animated text

var instructions = document.getElementById("instructions");

var controls =
  "Click a circle to select it. Click it again to create a Vertex, " +
  "or click on a different circle to create a Link. \n" +
  "If the circle you selected already contains a Vertex,  a new Vertex won't be created but you may link existing Verteces.";

// i got this function from stack overflow
const sleepNow = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

async function printText(output, pace = 30) {
  for (let i = 1; i <= output.length; i++) {
    await sleepNow(pace);
    instructions.innerText = output.substring(0, i);
  }
}
