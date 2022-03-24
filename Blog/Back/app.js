// import express from 'express';
const express = require('express');
const app = express();



app.get("/", (req, res) => {
    res.send('<h1>Bienvenue sur mon serveur back</h1>');
})








app.listen(8080, () => {
	console.log("Serveur à l'écoute");
})
