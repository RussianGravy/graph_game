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
        buttons[i].style.pointerEvents = 'none';
    }
    await printText(controls); 
    await sleepNow(3000);
    instructions.innerText = '';
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.opacity = 1;
        buttons[i].style.opacity = 1;
        buttons[i].style.position = 'static';
        buttons[i].style.pointerEvents = 'auto';
    }
}

async function about(){
    var buttons = document.getElementsByTagName('button');
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.opacity = 0;
        buttons[i].style.opacity = 0;
        buttons[i].style.position = 'absolute';
        buttons[i].style.pointerEvents = 'none';
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
        buttons[i].style.pointerEvents = 'auto';
    }
}

async function level_1() {
    await printText(
        'Create a graph with 3 Verteces and 2 edges'
    );
    var gotVerts = verts.size == 3;
    var gotEdges = edges.size == 2;
    while(!gotVerts && !gotEdges){
        var gotVerts = verts.size == 3;
        var gotEdges = edges.size == 2;
        await sleepNow(250);
    }
    await printText("GOOD JOB!! All for now. Bye.");
    await sleepNow(1000);
}

async function start(){
    var buttons = document.getElementsByTagName('button');
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.opacity = 0;
        buttons[i].style.opacity = 0;
        buttons[i].style.position = 'absolute';
        buttons[i].style.pointerEvents = 'none';
    }
    await level_1();
    await printText(
        'More coming soon...'
    );
    await sleepNow(1000);
    instructions.innerText = '';
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.opacity = 1;
        buttons[i].style.opacity = 1;
        buttons[i].style.position = 'static';
        buttons[i].style.pointerEvents = 'auto';
    }
}