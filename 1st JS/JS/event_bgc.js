function changeBgc(color){
    document.body.style.backgroundColor = color;

}

function f(form){
    form.prenom.style.backgroundColor = 'red';
}

function f1(form){
    form.prenom.style.backgroundColor = 'white';
}

function texte(form){
    const val = form.prenom.value;
    form.out.innerText = val;
}

function mouseHover(){
    document.formulaire_test.prenom.style.backgroundColor = 'yellow';
}

function mouseLeave(){
    document.forms[0].prenom
    .style
    .backgroundColor = 'white';

}