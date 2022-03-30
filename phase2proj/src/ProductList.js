import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';


function ProductList() {
    function handleSubmitter(event) {
        event.preventDefault();
        window.location.replace("http://localhost:3000/Home")
        alert("Thank you for submitting your information!")
    }

    //variables for api
    const entry = e.target.value;
    const url = `www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita` +entry

    //state for search
    
    changehandler=(e)=>{
        const entry = e.target.value;
        const url = `www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita` +entry
        }
        const [cocktail, setCocktail] = useState({})
        useEffect(()=> {
            fetch(url)
                .then((resp) => resp.json())
                .then((data) => setCocktail(data.drinks[0]))
        },[])

    //states for the cocktails

    //fetch request


    //map out the states
    
    return (
        <div className="ProductList">
            <form onSubmit={handleSubmitter}>
                <label for="name">What Is Your Favorite Cocktail?:</label>
                <input type="text" id="name" name="name" placeholder="Enter Cocktail Name Here..." />
                <input type="submit" value="Submit"/> 
            </form>
            <h1>Cocktail Product List</h1>
            <div className="cards">
                <ProductCard />
            </div>
        </div>
    );
}

export default ProductList;
