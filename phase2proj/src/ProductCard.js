import React, {useState, useEffect} from 'react';
import './ProductCard.css';

function ProductCard() { 
    const [dunk, setDunk] = useState({})
    useEffect(()=> {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then((resp) => resp.json())
            .then((data) => setDunk(data.drinks))
    },[])
    const rice = dunk
    console.log(rice)

    

    return (
    <div className="ProductCard">
            <img src={rice.strDrinkThumb} width="100px" height="100px"/>
            <h1 ClassName="title">{rice.strDrink}</h1>
            <ul>
                {rice.strIngredient4 ? <li ClassName="ingredient">{rice.strIngredient4}</li> : null }
                {rice.strIngredient2 ? <li ClassName="ingredient">{rice.strIngredient2}</li> : null }
                {rice.strIngredient3 ? <li ClassName="ingredient">{rice.strIngredient3}</li> : null }
                {rice.strIngredient4 ? <li ClassName="ingredient">{rice.strIngredient4}</li> : null }
            </ul>
    </div>
    );
}

export default ProductCard;
 