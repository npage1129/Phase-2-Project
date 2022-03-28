import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
>>>>>>> refs/remotes/origin/main
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return(
    <div>
      <Router>
<<<<<<< HEAD
      <Routes>
=======
        <Routes>
>>>>>>> refs/remotes/origin/main
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
