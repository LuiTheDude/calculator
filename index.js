const display = document.getElementById(`display`);

function addToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ``;
}

function calculate(){
    try{
        display.value = eval(display.value);   
    }
    catch(error){
        display.value = `Error`
    }
}

document.addEventListener('keydown', event => {
    
    console.log(event.key);
    
    if(event.key == 1  || event.key == 2 || event.key == 3 || event.key == 4 || event.key == 5 || event.key == 6 
        || event.key == 7 || event.key == 8 || event.key == 9 || event.key == 0 || event.key == '+' || event.key == '-' 
        || event.key == '/' || event.key == '*'){
            display.value += event.key;
        }
    if(event.key == 'Enter'){
        calculate();
    }
    if(event.key == 'Backspace'){
        clearDisplay();
    }
})