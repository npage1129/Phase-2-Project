import React from 'react';
import Footer from './Base/Footer';
import Header from './Base/Header.js';
import SideBar from './SideBar';
import ProductList from './ProductList';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <p>this is home page</p>
      <Header />
      <SideBar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default Home;
