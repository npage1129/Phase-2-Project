import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList() {
    return (
        // <form>
        //     <label for="alchol">First name:</label>
        //     <input type="text" id="alcohol" name="alcohol"><br>
        //     <input type="submit" value="Submit">
        // </form>
        <div className="ProductList">
            <h1>Cocktail Product List</h1>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}
  
export default ProductList;
  