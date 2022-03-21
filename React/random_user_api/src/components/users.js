import React, {useEffect, useState} from 'react';
import OneUser from './one_user';

const Users = () => {

        

        const [userList, setUserList] = useState([]);

        useEffect (() => {
                // TODO: FAIRE UN FETCH VERS MON API RANDOMUSER
                fetch ('https://randomuser.me/api/?results=5&nat=fr')
                    .then(response => response.json())
        },[]);


    const user = {
        gender: "",
        titleName: 'M',
        firstName: 'John',
        lastName: 'Doe',
        street: "17 chemin du moulin",
        city: "Comines",
        country: "France",
        postCode: "59560",
        email: "samuel.michaux@gmail.com",
        phone: "0320123456",
        cell: "0642958853",
        pictureLarge: "https://randomuser.me/api/portraits/women/64.jpg",
    };
    return (
        <section className="users">
            <OneUser user={user} />
        </section>
    )
}

export default Users;