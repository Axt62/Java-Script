import { getUsers } from "./service.js";

const weatherDiv = document.getElementById('users');

getUsers().then(users => {
    let html = users.map(u => {
        let date = new Date(u.birthday);
        return 
              
        ;
    });
    document.getElementById('users').innerHTML = html.join("")});