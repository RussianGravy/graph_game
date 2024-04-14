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

function about(){
    deleteButtons();
    printText(
        'Dijstra is a math based puzzle game. Solve the prompts and earn points!'
    );
}
