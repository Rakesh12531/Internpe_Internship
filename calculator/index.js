let dis = document.getElementById("screen");

function appendToDisplay(input){
    dis.value+=input;
}

function displayClear(){
    dis.value=" ";
}

function calculate(){
    try{
        dis.value=eval(dis.value);
    }
    catch(error){
        dis.value="ERROR";
    }
}
