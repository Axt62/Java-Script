/*for (let i = 0; i < 20; i++){
    if (i % 3 === 0){
        continue;
    }
    if (i === 17){
        break;
    }
    document.write(`<h5>${i}<h5>`)
    
}*/

const tab1 = ["sam", "herve", "sab", "anto"];

/*for(let i = 0; i < tab1.length; i++){
    document.writeln(tab1[i]);
};*/


/*for (const prenom of tab1){
    document.writeln(prenom);
}*/


const p1 = {
    nom: "Leconte",
    prenom: "Antoine",
    age: "20",
    hobbies: ["sport", "informatique", "voyage"],
    femme: false
};

//document.writeln(p1.prenom);

// Key = Nom , Prenom , Age , Hobbies , Femme 
// Value = Leconte , Antoine , 20 , { Sport , infomatique , voyage } , false

for (const k in p1){
    document.writeln(`Key : ${k} - Value : ${p1[k]}<br>`);
}