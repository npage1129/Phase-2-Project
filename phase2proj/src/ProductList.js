import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';


function ProductList() {
    // function handleSubmitter(event) {
    //     event.preventDefault();
    //     window.location.replace("http://localhost:3000/Home")
    //     alert("Thank you for submitting your information!")
    // }
    const [searchTerm, setSearchTerm] = useState('')
    
    function handleSearch(event) {
        console.log(event.target.value)
        setSearchTerm(event.target.value)
    }

    function handleSubmitter(event) {
        event.preventDefault();
    }

    
    return (
        <div className="ProductList">
            <form onSubmit={handleSubmitter}>
                <label for="name">What Is Your Favorite Cocktail?:</label>
                <input type="text" id="cocktail" value = {searchTerm} onChange = {handleSearch} placeholder="Enter Cocktail Name Here..." />
                <input type="submit" value="Submit"/> 
            </form>
            <h1>Cocktail Product List</h1>
            <div className="cards">
                <ProductCard searchTerm={searchTerm}/>
            </div>
        </div>
    );
}
  
export default ProductList;
  