var display = document.getElementById("display");


function getVal(a){
    
display.value += a;
}


function calculate(){
 var b = eval(display.value);

 display.value = b;
}

function clearAll(){
    display.value="";
}

