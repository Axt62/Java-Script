document.writeln(localStorage.length + '<br>');
//localStorage.setItem('title', 'Test Local Storage');
const prenoms =  ["sam", "imane", "thomas", "laurent"];
localStorage.setItem('prenoms', JSON.stringify(prenoms));


let listPrenom = localStorage.getItem('prenoms');
listPrenom = JSON.parse(listPrenom);
document.write(typeof listPrenom);
//localStorage.clear();

