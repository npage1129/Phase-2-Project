import React from 'react';
import SideBar from "./SideBar";

function SideBarList({get}){
    return(
        <ul className='randomDrink'>
            {get.map((drink)=>{
    return(
    <SideBar
        key = {drink.idDrink}
        drink = {drink}
        />
                )

            })}
        </ul>
    )
}