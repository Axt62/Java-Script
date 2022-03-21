import React from 'react';
import {MyName} from "./myName";
import {MyCount} from "./myCount"


export const Container = () => {



    return (
        <main>
            <MyName first="Antoine" last="Leconte" />
            <MyCount />
        </main>
    )
}