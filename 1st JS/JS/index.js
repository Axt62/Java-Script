/* document.write ("Ce texte est écrit par une instruction JavaScript");

alert('Je suis une alerte') 

console.log('Je suis un console log'); */

/* function carre(nombre) {
    console.log (nombre * nombre);
  }; 
carre(19); */

function carre(nombre = 1) {
    console.log(typeof nombre);
    return nombre * nombre;
}
/*
console.log(carre(12));

function testparam(b, a = 2){
    console.log(a, b);
}

testparam(12);
*/
