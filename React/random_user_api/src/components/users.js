import React, {useEffect, useState} from 'react';
import OneUser from './one_user';

const Users = () => {

        

        const [userList, setUserList] = useState([]);

        useEffect (() => {
                // TODO: FAIRE UN FETCH VERS MON API RANDOMUSER
                fetch ('https://randomuser.me/api/?results=5&nat=fr')
                    .then(response => response.json())
                    .then(res => {
                        const list = res['results'];
                        const usersList = list.map(u => toObject(u));
                        setUserList(list.map(u => toObject(u)));
                    });
        },[]);

        function toObject(user) {
            return {
                gender: user["gender"],
                titleName: user["name"]["title"],
                firstName: user["name"]["first"],
                lastName: user["name"]["last"],
                street: user["location"]["street"]["number"] + " " + user["location"]["street"]["name"],
                city: user["location"]["city"],
                country: user["location"]["country"],
                postCode: user["location"]["postcode"],
                email: user["email"],
                phone: user["phone"],
                cell: user["cell"],
                pictureLarge: user["picture"]["large"],
            };
        }
 
    return (
        <section className="users">
        {
            userList && 
            userList.map(u => <OneUser user={u}/>)
        }
 
        </section>
    );
}

export default Users;