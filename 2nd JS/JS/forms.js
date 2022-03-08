function checkbox(input){
    console.log(input.checked);
    console.log(input.defaultChecked);
    console.log(input.name);
    console.log(input.value);
}
function select(s){
    console.log(s.value);
    console.log(s.selectedIndex);
    console.log(s.innerText);
    console.log(s.options[s.selectedIndex]);
}

function inputName(event){
    console.log(event.target.value);
}


//(Type de l'event : callback)

document.forms[0].name.addEventListener('keyup', inputName);

/*test();
console.log(varTest)

function test(){
    console.log("test");
}*/


