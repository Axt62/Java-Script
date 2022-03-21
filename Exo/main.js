import { getUsers } from "./service.js";

getUsers().then(users => {
    let html = users.map(u => {
        let date = new Date(u.birthday);
        return/*html*/ `

        
    <divid="users">        
        <div class='col-lg-4' style='cursor: pointer; padding-bottom: 15px;'>
            <div class="card" style="width: 18rem;">
                <img src="${u.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title display-6">${u.firstname} ${u.lastname}</h5>
                        <h6 class="card-text"><h6>${u.birthday}</h6>
                            <h6>${u.email}</h6>
                            <h6>${u.adress}</h6>
                            <h4>${u.tel}</h4></h6>
                          
            </div>
          </div>
        </div>       
    </div>
            `
        ;
    });
    document.getElementById('users').innerHTML = html.join("")});


    

