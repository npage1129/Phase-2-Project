import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return(
    <div>
      <Router>
        <Routes>
      <Route path= "/"  element = {<Home/>} />
      <Route path="/about" element = {<About/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
