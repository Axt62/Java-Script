let t = [12, 34, "coucou", false];
console.log(t)
let [prenom, nom, age] = ["sam", "mich", 40];
console.log(nom, prenom, age);
let t1 = new Array(3);


// Ajouter dans un tableau

t.push("ajout");
console.log(t);

// Suppression du dernier élément

t.pop();
console.log(t);

// Suppression du dernier élémént

t.shift();
console.log(t);

// Insertion en début de tableau 

t.unshift("Samuel");
console.log(t);

// Suppression avec un index

t.splice(2, 1);
console.log(t);

// Copie de tableau   
let t2 = [...t];
let t3 = t.slice();
console.log(t2, t3);

t.push(12, 56, 98, -34, -27, 0);
console.log(t);

/*for (let i = 0; i <t.length; i++) {
    if (typeof t [i] !== 'number') {
        t.splice(i, 1)
    }
}
console.log(t) */

// t = t.filter(value =>(typeof value === 'number'));
// console.log(t)

let t5 = t.map((value) => {
    if (typeof value === 'number') {
        return value ** 3
    }
})

console.log(t5)