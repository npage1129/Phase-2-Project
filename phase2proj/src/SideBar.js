import React, {useEffect} from 'react';
import './SideBar.css';

const api = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

function SideBar() {
    function handleData(data) {
        console.log(data);
    }

const cocktail = 
fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => response.json())
    .then(data => console.log(data));


    return (
        <div className="sidebar">
<<<<<<< HEAD
            <p>inside side bar</p>
        
=======
            <h3>Need Ideas? Try this random cocktail!</h3>
            <p>cocktail</p>
>>>>>>> main
        </div>
    )
    
}
<<<<<<< HEAD

=======
 
>>>>>>> main
export default SideBar;
