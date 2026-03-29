let display=document.getElementById('display');

function addval(val){
    if(display.innerText=='0'){
        display.innerText=val;
    }
    else{
        display.innerText+=val;
    }
}

function calculate(){
    try{
        display.innerText=eval(display.innerText);
    }
    catch(err){
        display.innerText='Error';
    }
}

function clearDisplay(){
    display.innerText="0";
}

function deleteLast(){
    var text=display.innerText;
    var newtext="";
    for(var i=0;i<text.length-1;i++){
        newtext+=text[i];
    }
    if(newtext==""){
        display.innerText="0";
    }
    else{
        display.innerText=newtext;
    }
}