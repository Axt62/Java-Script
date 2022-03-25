import React from 'react';

const AdminArticle = () => {

    return (
        <div className="newArticle">
            <form action="http://m2iformation.duckdns.org:5555" method='post'>
                <select name="cat" id="cat">
                    <option value="bidon">bidon</option>

                </select>
                <select>
                    <option value="bidon">bidon</option>
                </select>
                <input type="text" name="titre" placeholder="titre" />
                <textarea name="contenu" id="contenu" cols="30" rows="10" placeholder="contenu"></textarea>
                <button type="submit">Valider</button>
            </form>
        </div>
    )
}


export default AdminArticle;