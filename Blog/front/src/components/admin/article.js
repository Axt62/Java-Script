import React, {useState, useEffect} from 'react';

const AdminArticle = () => {

    const [cat, setCat] = useState([]);
    const [user, setUser] = useState ([]);

    useEffect (() => {
        fetch('http://m2iformation.duckdns.org:5555/admin/getCatAndUser')
            .then((response) => response.json())
            .then(obj => {
                setCat(obj['cat']);
                setUser(obj['user']);
            })
    },[])
    return (
        <div className="newArticle">
            <form action="http://m2iformation.duckdns.org:5555" method='post'>
                <select name="cat" id="cat">
                    {
                        cat && 
                        cat.map(c => <option value={c.id}>{c.nom}</option>)
                    }

                </select>
                <select name="user" id="user">
                    {
                        user &&   
                        user.map(u => <option value={u.id}>{u.prenom + " " + u.nom.toUpperCase()}</option>)
                    }
                
                    
                </select>
                <input type="text" name="titre" placeholder="titre" />
                <textarea name="contenu" id="contenu" cols="30" rows="10" placeholder="contenu"></textarea>
                <button type="submit">Valider</button>
            </form>
        </div>
    )
}


export default AdminArticle;