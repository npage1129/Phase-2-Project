import React from 'react';
import './ProductCard.css';

function ProductCard() {
    return (
      <div className="ProductCard">
          <h1>Cocktail Title</h1>
          <h3>Cocktail Ingredients</h3>
          <ul>
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
              <li>Ingredient 4</li>
              <li>Ingredient 5</li>
          </ul>
      </div>
    );
}
  
export default ProductCard;
  