const gaufrier = new Object();
gaufrier.largeur = 20;
gaufrier.longueur = 15;

gaufrier.cuire = () => {
    console.log("cuisson");
}
console.log(gaufrier);
gaufrier.cuire();


function Table(largeur, longueur, hauteur) {
    this.largeur = largeur;
    this.longueur = longueur;
    this.hauteur = hauteur;
}

this.jouer = () => {
    console.log("Je joue au ping-pong");
}

const tableJeu = new Table(183, 274, 76);
tableJeu.materiau = "verre"
tableJeu.nbPied = 4;
console.log(tableJeu);


