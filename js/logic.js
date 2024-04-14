function deleteButtons(){
    var buttons = document.getElementsByTagName('button');
    for(var i = 0; i < buttons.length; i++){
        buttons[i].remove();
        i--;
    }
}

function start(){
    deleteButtons();
    printText(intro); 
}

async function about(){
    var buttons = document.getElementsByTagName('button');
    var temp = [];
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.opacity = 0;
        buttons[i].style.opacity = 0;
        buttons[i].style.position = 'absolute';
    }
    printText(
        'Dijstra is a math based puzzle game. Solve the prompts and earn points!'
    );
    await sleepNow(4000);
    instructions.innerText = '';
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.opacity = 1;
        buttons[i].style.opacity = 1;
        buttons[i].style.position = 'static';
    }
}
