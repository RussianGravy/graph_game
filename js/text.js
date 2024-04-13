var instructions = document.getElementById('instructions');

var intro = 'Click to select a circle. Click on that circle a second time to create a Vertex, ' + 
             'or click on a different circle to create a Link. ' + 
             'If the circle you selected already contains a Vertex,  a new one will not be created but you may connect existing Verteces.';

const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function printText(output, pace=50) {
  for (let i = 1; i <= output.length; i++) {
    await sleepNow(pace);
    instructions.innerText = output.substring(0, i);
  }
}

printText(intro);