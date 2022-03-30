import React,{useState,UseEffect} from 'react';
import './ProductCard.css';

function ProductCard() {

    return (
    <div className="ProductCard">
        <img src="https://previews.123rf.com/images/sundaribardia/sundaribardia1604/sundaribardia160400052/56832824-familia-de-hippopotamidae-especie-amphibius-hipop%C3%B3tamo-agua-potable-en-la-orilla-del-r%C3%ADo.jpg" width="100px" height="100px"/>
        <h1 ClassName="title">Cocktail Title</h1>
        <ul>
            <li ClassName="ingredient">Ingredient 1</li>
            <li ClassName="ingredient">Ingredient 2</li>
            <li ClassName="ingredient">Ingredient 3</li>
            <li ClassName="ingredient">Ingredient 4</li>
            <li ClassName="ingredient">Ingredient 5</li>
        </ul>
    </div>
    );
}

export default ProductCard;
 