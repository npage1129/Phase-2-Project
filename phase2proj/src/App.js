import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return(
    <div>
      <Home />
      {/* <Router>
      <Route path="/About" component={About}/>
      </Router> */}
    </div>
  );
}

export default App;
