import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

// function App() {
//   return(
//     <div>
//       <Home />
//       {/* <Router>
//       <Route path="/About" component={About}/>
//       </Router> */}
//     </div>
//   );
// }

export default App;
