<<<<<<< HEAD
import React,{useEffect,useState} from 'react';
=======
import React, {useEffect, useState} from 'react';
>>>>>>> main
import Footer from './Base/Footer';
import Header from './Base/Header.js';
import SideBar from './SideBar';
import ProductList from './ProductList';
import './Home.css';

function Home() {
<<<<<<< HEAD
const  [get, setGet] = useState({});
useEffect(()=> {
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then((resp) => resp.json())
  .then((data) => setGet(data))
},[])
=======

>>>>>>> main
  return (
  
    <div className="Home">
    
      <>
      <Header />
      </>
      <div>

      </div>
<<<<<<< HEAD
      <SideBar get ={get}/>
=======
      <SideBar  />
>>>>>>> main
      <ProductList />
      <Footer />
    
    </div>
  );

}


export default Home;
