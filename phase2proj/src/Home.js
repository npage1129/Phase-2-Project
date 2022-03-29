import React,{useEffect,useState} from 'react';
import Footer from './Base/Footer';
import Header from './Base/Header.js';
import SideBar from './SideBar';
import ProductList from './ProductList';
import './Home.css';

function Home() {
const  [get, setGet] = useState({});
useEffect(()=> {
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then((resp) => resp.json())
  .then((data) => setGet(data))
},[])
  return (
    <div className="Home">
      <>
      <Header />
      </>
      <div>

      </div>
      <SideBar get ={get}/>
      <ProductList />
      <Footer />
    </div>
  );
}

export default Home;
