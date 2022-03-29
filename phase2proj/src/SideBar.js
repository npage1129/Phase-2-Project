import React, {useEffect} from 'react';
import SideBarCard from './SideBarCard';
import './SideBar.css';

const api = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

function SideBar() {

return(
        <div className="sidebar">
            
                <>   
            <h3>Need Ideas? Try this random cocktail!</h3>
            <SideBarCard />
            </>
            
        </div> 
    );
}


export default SideBar;
