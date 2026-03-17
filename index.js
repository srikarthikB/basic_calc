const display = document.getElementById("display");

function appendToDisplay(input){
    if (display.value != "Syntax Error"){
        display.value += input;
    }
    else{
        display.value = "";
        display.value += input;
    }
    
}

function ClearAll(){
    display.value = "";
}

function Delete(){
    if (display.value != "Syntax Error"){
        display.value = display.value.slice(0, -1);
    }
    else{
        display.value = "";
    }
        
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Syntax Error";
    }
}