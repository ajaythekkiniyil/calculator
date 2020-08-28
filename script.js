//display number to screen
function buttonClick(val) {

    document.getElementById('screen').value += val;


}

//clear full screen
function clearDisplay() {
    document.getElementById('screen').value = "";
}

//This function for backSpace
function deleteDisplay() {
    var fullNumber = document.getElementById('screen').value;
    var deleteOneNumber = parseInt(fullNumber / 10);
    document.getElementById('screen').value = deleteOneNumber;
}

//computing answer if press = symbol
function equalClick() {
    var text = document.getElementById('screen').value;
    var result = eval(text);
    document.getElementById('screen').value = result;
}
