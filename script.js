//your JS code here. If required.
function validateInput(input, pattern){
    let regex = new RegExp(pattern);

    if(regex.test(input.value)){
        input.style.backgroundColor = "lightgreen";
    }else{
        input.style.backgroundColor = "rgb(255, 192, 203)";
    }
}