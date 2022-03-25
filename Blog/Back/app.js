// import express from 'express';
const express = require('express');

const sqlite3 = require('sqlite3').verbose();

const app = express();

const db = new sqlite3.Database('blog.db');


//Creation de la BDD
db.serialize(() => {

    //Création de l'utilisateur en BDD 
    db.run(`
    CREATE TABLE IF NOT EXISTS utilisasteur (
        id INTEGER PRIMARY_KEY NOT NULL AUTOINCREMENT,
        email VARCHAR(255) NOT NULL UNIQUE,
        nom VARCHAR(50) NOT NULL,
        prenom VARCHAR(50) NOT NULL,
        mdp VARCHAR(100) NOT NULL,
        date_creation DATE NOT NULL,
        date_maj DATE,
        date_supp DATE,)`);

    db.run(`
    CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY_KEY NOT NULL AUTOINCREMENT,
        nom VARCHAR(100) NOT NULL UNIQUE,)`);

    db.run(`
    CREATE TABLE IF NOT EXISTS article(
        id INTEGER PRIMARY_KEY NOT NULL AUTOINCREMENT,
        titre VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL,
        contenu TEXT NOT NULL,
        image VARCHAR(255),
        date_creation DATE NOT NULL,
        date_maj DATE,
        date_supp DATE,
        id_cat INTEGER,
        id_user INTEGER,
        FOREIGN KEY ("id_cat") REFERENCES "categorie" ("id")
        FOREIGN KEY ("id_user") REFERENCES "utilisateur" ("id"))`)

});

//Insertion en BDD 
db.serialize(() => {
   // db.run(`INSERT INTO categorie (nom) VALUES ('High Tech'), ('Android'), ('IPhone')`)
        /*
    db.run (`
        INSERT INTO utilisateur (email, nom, prenom, mdp, date_creation)
        VALUES
            ('samuel.michaux@gmail.com', 'michaux', 'samuel', 'samsam', DATE()),
            ('sam@sam.org', 'pasetto', 'sabrina' 'sabsabsab', DATE()),
            ('sabrina@seb.c.bien', 'pasetto', 'sabrina', 'sabsabsab', DATE()),
    `) */
});

db.run(`
    INSERT INTO article (titre, contenu, date_creation, id_cat, id_user)
    VALUES
        ('WatsApp : Il sera bientôt possible de réagit aux messages avec un émoji,
        'Une nouvelle option - et pas des moindres - va bientôt arriver sur WhatsApp. '
        DATE(),1,1
        'watsapp-il-sera-bientot-possible-de-reagit-aux-messages-avec-un-emoji')
        
        ('Android : Google utiliserait les données de vos messages et appels sans votre autorisations'
        'Google serait susceptible de collecter frauduleusement des données grâce aux applications Messages et Téléphone'
        DATE(),2,1
        android-google-utiliserait-les-donnees-de-vos-messages-et-appels-sans-votre-autorisations')

`)


db.clsoe();





const personne = {
    prenom: "samuel",
    nom: "michaux"
}



app.get("/", (req, res) => {
    res.status(200).json(personne);
})








app.listen(8080, () => {
	console.log("Serveur à l'écoute");
})
