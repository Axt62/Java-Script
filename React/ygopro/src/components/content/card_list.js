import React, {useEffect, useState} from 'react';
import CardOne from './card_one';
import {getAllCards} from '../../services/card_list_service';
import {toModel} from '../../models/card_model'
const CardList = () => {

    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        getAllCards()
        .then(json => {
            setCardList(toModel(json).cards);    

        })
},[])
    
    
    
    
    
    return (
    <section>
    {
        cardList && 
        cardList.map(c => <CardOne key={c.id} card={c} />)

    }
    </section>
    );
};

export default CardList;