var instructions = document.getElementById('instructions');

var intro = 'Click to select a circle. Click on that circle a second time to create a Vertex, ' + 
             'or click on a different circle to create a Link. \n' + 
             "If the circle you selected already contains a Vertex,  a new one won't be created but you may link existing Verteces.";

const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function printText(output, pace=30) {
  for (let i = 1; i <= output.length; i++) {
    await sleepNow(pace);
    instructions.innerText = output.substring(0, i);
  }
}