import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';


function ProductList() {
    function handleSubmitter(event) {
        event.preventDefault();
        window.location.replace("http://localhost:3000/Home")
        alert("Thank you for submitting your information!")
    }


    
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
  