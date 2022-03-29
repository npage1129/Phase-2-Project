import React,{useEffect, useState} from 'react';
import SideBar from './SideBar';

function SideBarCard(){
    
    const [drink, setDrink] = useState({})

    useEffect(()=> {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then((resp) => resp.json())
            .then((data) => setDrink(data.drinks[0]))
    },[])

    // const cocktailInfo = {
    //     idDrink,
    //     strDrink, 
    //     strDrinkThumb, 
    //     strIngredient1, 
    //     strIngredient2, 
    //     strIngredient3,
    //     strIngredient4,
    // }
    // const {
    //     idDrink,
    //     strDrink, 
    //     strDrinkThumb, 
    //     strIngredient1, 
    //     strIngredient2, 
    //     strIngredient3,
    //     strIngredient4,
    // } = cocktailInfo
    // console.log(drink.drinks[0].strDrink)
    // const randomDrink = drink.drinks[0]
    return(
        <div className="RandomDrink">
            <img src={drink.strDrinkThumb} width="100px" height="100px"/>
            <h1 ClassName="title">{drink.strDrink}</h1>
            <ul>
                <li ClassName="ingredient">{drink.strIngredient1}</li>
                <li ClassName="ingredient">{drink.strIngredient2}</li>
                {drink.strIngredient3 ? <li ClassName="ingredient">{drink.strIngredient3}</li> : null }
                {drink.strIngredient4 ? <li ClassName="ingredient">{drink.strIngredient4}</li> : null }
            </ul>
        </div>
    )
}
export default SideBarCard;