function deleteButtons(){
    var buttons = document.getElementsByTagName('button');
    for(var i = 0; i < buttons.length; i++){
        buttons[i].remove();
        i--;
    }
}

async function howToPlay(){
    var buttons = document.getElementsByTagName('button');
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.opacity = 0;
        buttons[i].style.opacity = 0;
        buttons[i].style.position = 'absolute';
    }
    await printText(controls); 
    await sleepNow(3000);
    instructions.innerText = '';
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.opacity = 1;
        buttons[i].style.opacity = 1;
        buttons[i].style.position = 'static';
    }
}

async function about(){
    var buttons = document.getElementsByTagName('button');
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.opacity = 0;
        buttons[i].style.opacity = 0;
        buttons[i].style.position = 'absolute';
    }
    await printText(
        'Just something I imagined while dozing during Discrete Math.'
    );
    await sleepNow(1250);
    instructions.innerText = '';
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.opacity = 1;
        buttons[i].style.opacity = 1;
        buttons[i].style.position = 'static';
    }
}

async function start(){
    var buttons = document.getElementsByTagName('button');
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.opacity = 0;
        buttons[i].style.opacity = 0;
        buttons[i].style.position = 'absolute';
    }
    await printText(
        'Game coming soon...'
    ); 
    await sleepNow(1000);
    instructions.innerText = '';
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.opacity = 1;
        buttons[i].style.opacity = 1;
        buttons[i].style.position = 'static';
    }
}