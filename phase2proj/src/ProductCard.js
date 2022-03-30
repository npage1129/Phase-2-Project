import React, {useState, useEffect} from 'react';
import './ProductCard.css';

function ProductCard(setSearchTerm) {
   

    // const [dunk, setDunk] = useState({})
    // useEffect(()=> {
    //     fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    //         .then((resp) => resp.json())
    //         .then((data) => setDunk(data.drinks))
    // },[setDunk])

    // const drink = dunk
    // console.log(drink)

    const [drink, setDrink] = useState({})
    useEffect(()=> {
        const fetchData = async () =>{
            const data = await  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
            const json = await data.json();
            setDrink(json)
        }
        fetchData()
         .catch(console.error);;
    },[])

    console.log(drink.drinks);
    

    return (
        <div className="ProductCard">
                <img src={drink.strDrinkThumb} width="100px" height="100px"/>
                <h1 ClassName="title">{drink.strDrink}</h1>
                <ul>
                    {drink.strIngredient4 ? <li ClassName="ingredient">{drink.strIngredient4}</li> : null }
                    {drink.strIngredient2 ? <li ClassName="ingredient">{drink.strIngredient2}</li> : null }
                    {drink.strIngredient3 ? <li ClassName="ingredient">{drink.strIngredient3}</li> : null }
                    {drink.strIngredient4 ? <li ClassName="ingredient">{drink.strIngredient4}</li> : null }
                </ul>
        </div>
    );
}

export default ProductCard;
 