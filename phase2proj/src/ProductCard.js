import React, {useState, useEffect} from 'react';
import './ProductCard.css';

function ProductCard({searchTerm}) {

    //useeffect testing
    const [drink, setDrink] = useState([])
    useEffect(()=> {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then((resp) => resp.json())
            .then((data) => setDrink(data.drinks))
    },[])

    
    return (
        
        <div className="ProductCard">
            {drink.map((drink)=>(
            <div className = "cards">
                
                    <img src={drink.strDrinkThumb} width="100px" height="100px"/>
                <h1 ClassName="title">{drink.strDrink}</h1> 
                <ul>
                    {drink.strIngredient1 ? <li ClassName="ingredient">{drink.strMeasure1}{drink.strIngredient1}</li> : null }
                    {drink.strIngredient2 ? <li ClassName="ingredient">{drink.strMeasure2}{drink.strIngredient2}</li> : null }
                    {drink.strIngredient3 ? <li ClassName="ingredient">{drink.strMeasure3}{drink.strIngredient3}</li> : null }
                    {drink.strIngredient4 ? <li ClassName="ingredient">{drink.strMeasure4}{drink.strIngredient4}</li> : null }
                </ul> 
                <p>{drink.strInstructions}</p>
            </div>
            ))}
                
        </div>
        
    );
    
}
export default ProductCard;
