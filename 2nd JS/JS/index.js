const res = document.getElementById('res');

function minOuMaj(f){
    const letter =f.letter.value;
if (letter >= "a" && letter <= "z"){
    res.innerHTML = '<p>C\'est une lettre minuscule</p>'
}
else if (letter >= "A" && letter <= "Z"){
    res.innerHTML = '<p>C\'est une lettre majuscule</p>'

}
else 
    res.innerHTML = '<p>Ce n\'est pas une lettre</p>'
}
    