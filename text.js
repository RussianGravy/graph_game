var instructions = document.getElementById('instructions');

var pace = 50;

var intro = 'Click on the circles to create a node. Every second click creates a link.';

const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function printText(output) {
  for (let i = 1; i <= output.length; i++) {
    await sleepNow(pace);
    console.log("tick")
    instructions.innerText = output.substring(0, i);
  }
}

printText(intro);