import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';


function ProductList({drink}) {
    // function handleSubmitter(event) {
    //     event.preventDefault();
    //     window.location.replace("http://localhost:3000/Home")
    //     alert("Thank you for submitting your information!")
    // }
    const [searchTerm, setSearchTerm] = useState("")
    function handleSubmit(event) {
        event.preventDefault();
    }
    console.log(searchTerm)
    function handleSearch(e) {
        setSearchTerm(e.target.value)
    }


    
    return (
        <div className="ProductList">
            <form onSubmit={handleSubmit}>
                <label for="name">What Is Your Favorite Cocktail?:</label>
                <input type="text"  id="cocktail"  placeholder="Enter Cocktail Name Here..." value = {searchTerm} onChange={handleSearch} />
                <input key ="id" type="submit" value="Submit" />
            </form>
            <h1>Cocktail Product List</h1>
            <div className="cards">
                <ProductCard searchTerm={searchTerm} handleSubmit={handleSubmit}/>
            </div>
        </div>
    );
}

export default ProductList