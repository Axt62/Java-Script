function chargement(){
    document.writeln("Document chargé");
}
    function dechargement(){
        alert('Veux-tu quitter le site?')
}
function redimensionner(){
    document.writeln(document.body.offsetWidth + '' + document.body.clientHeight);
}

window.addEventListener('resize', redimensionner);