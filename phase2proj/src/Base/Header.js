import React from 'react';
import './Header.css';
import Cocktails4U from "../Images/Cocktails4U.png";

function Header() {

    function directHome(){
        window.location.replace("http://localhost:3000/Home")
    }
    return (
        <div className="Header">
            <nav className="navBar"> 
                <a className ='navLink' href="./Home" >Home<br></br></a> 
                <a className ='navLink' href="./About">About<br></br></a>
                <a className ='navLink' href="./Contact">Contact<br></br></a>
            </nav>
            <img className="headerImage" src={Cocktails4U} alt="Logo" width="130px" height="83px" onClick={directHome} ></img>
        </div>
    );
}

export default Header;     

