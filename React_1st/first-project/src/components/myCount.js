import React, {useState} from 'react';

export const MyCount = () => {


    const [count, setCount] = useState(10);

    const handleClick = () => {
        setCount(count+1);
    }

    return (
        <div>
            <input type="text" value={count}/>
            <button onClick={handleClick}>Incrementer</button>
        </div>
    );
}