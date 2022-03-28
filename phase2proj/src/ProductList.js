import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList() {
    return (
        <div className="ProductList">
            <h1>Cocktail Product List</h1>
            <ProductCard />
        </div>
    );
}
  
export default ProductList;
  