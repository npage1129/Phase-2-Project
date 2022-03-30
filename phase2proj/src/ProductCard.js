import React, {useState, useEffect} from 'react';
import './ProductCard.css';

function ProductCard() {

    //useeffect testing
    const [drink, setDunk] = useState([])
    useEffect(()=> {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
            .then((resp) => resp.json())
            .then((data) => setDunk(data.drinks))
    },[])

    // const drink = dunk
    // console.log(drink)

    
    return (
        
        <div className="ProductCard">
            {drink.map((drink)=>(
            <div className = "cards">
                
                    <img src={drink.strDrinkThumb} width="100px" height="100px"/>
                <h1 ClassName="title">{drink.strDrink}</h1> 
                    {console.log(drink.strIngredient4)}
                <ul>
                    {drink.strIngredient4 ? <li ClassName="ingredient">{drink.strIngredient4}</li> : null }
                    {drink.strIngredient2 ? <li ClassName="ingredient">{drink.strIngredient2}</li> : null }
                    {drink.strIngredient3 ? <li ClassName="ingredient">{drink.strIngredient3}</li> : null }
                    {drink.strIngredient4 ? <li ClassName="ingredient">{drink.strIngredient4}</li> : null }
                </ul> 
            </div>
            ))}
                
        </div>
        
    );
    
}
export default ProductCard;
