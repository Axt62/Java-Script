import { UserModel } from "./model.js";

async function getUsers() {
    const response = await fetch("https://randomuser.me/api/?nat=fr&results=50");
    const result = await response.json();
    console.log(result);
    return resultToUserModel(result['results']);
}

function resultToUserModel(res) {
    return res.map(js => {
        return new UserModel(
            js['name']['first'],
            js['name']['last'],
            js['picture']['large'],
            js['email'],
            js['dob']['date'],
            js['location']['city'],
            js['phone'],
            js['login']['password'],
        );
    });
};

export {getUsers};