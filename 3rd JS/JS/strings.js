let texte = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quisquam amet eos vero totam dolores aut placeat, ipsam sapiente blanditiis quasi saepe alias, minima enim, quia modi tenetur inventore dicta.';

document.writeln(texte.length.toString() + "<br>");
document.writeln(texte.substring(6,11) + '<br>');
document.writeln(texte.charAt(6) + '<br>');
// document.writeln(texte.toUpperCase() + '<br>');
// document.writeln(texte.toLowerCase() + '<br>');

const sp = texte.split(" ");
for (let i = 0; i < sp.length; i++){
    sp[i] = sp[i].charAt(0).toUpperCase() + sp[i].substring(1);
}
texte = sp.join(" ");
document.writeln(texte + '<br>');