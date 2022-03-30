import React, {useState, useEffect} from 'react';
import './ProductCard.css';

function ProductCard() {
   
    //useeffect testing
    // const [dunk, setDunk] = useState({})
    // useEffect(()=> {
    //     fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    //         .then((resp) => resp.json())
    //         .then((data) => setDunk(data.drinks))
    // },[setDunk])

    // const drink = dunk
    // console.log(drink)

    //await and asynce testing

    // const [drink, setDrink] = useState({})
    // useEffect(()=> {
    //     const fetchData = async () =>{
    //         const data = await  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    //         const json = await data.json();
    //         setDrink(json)
    //     }
    //     fetchData()
    //      .catch(console.error);;
    // },[])

    // console.log(drink.drinks);
    
    // return (
    //     <div className="ProductCard">
    //             <img src={drink.strDrinkThumb} width="100px" height="100px"/>
    //             <h1 ClassName="title">{drink.strDrink}</h1>
    //             <ul>
    //                 {drink.strIngredient4 ? <li ClassName="ingredient">{drink.strIngredient4}</li> : null }
    //                 {drink.strIngredient2 ? <li ClassName="ingredient">{drink.strIngredient2}</li> : null }
    //                 {drink.strIngredient3 ? <li ClassName="ingredient">{drink.strIngredient3}</li> : null }
    //                 {drink.strIngredient4 ? <li ClassName="ingredient">{drink.strIngredient4}</li> : null }
    //             </ul>
    //     </div>
    // );
    

    //testing with a food api

    // const [recipe, setRecipe] = useState({})
    // useEffect(()=> {
    //     fetch('https://api.spoonacular.com/recipes/complexSearch?number=10&cuisine=italian&apiKey=8d5e3199479f47578aad9fd5e212aa72')
    //         .then((resp) => resp.json())
    //         .then((data) => setRecipe(data))
    // },[])

    // const cuisine = (recipe.results)

    //     return (
    //     <div className="ProductCard">
    //         <p>hello</p>
    //             <h3 ClassName="title">{cuisine.title}</h3>
    //             <img src={cuisine.image} width="100px" height="100px"/>
    //     </div>
    // );

    // <img src={drink.strDrinkThumb} width="100px" height="100px"/>
    //             <h1 ClassName="title">{drink.strDrink}</h1>
    //             <ul>
    //                 {drink.strIngredient4 ? <li ClassName="ingredient">{drink.strIngredient4}</li> : null }
    //                 {drink.strIngredient2 ? <li ClassName="ingredient">{drink.strIngredient2}</li> : null }
    //                 {drink.strIngredient3 ? <li ClassName="ingredient">{drink.strIngredient3}</li> : null }
    //                 {drink.strIngredient4 ? <li ClassName="ingredient">{drink.strIngredient4}</li> : null }
    //             </ul>



}

export default ProductCard;
 