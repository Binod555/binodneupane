import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Redirect,Route } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';

import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <switch>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/Service" component={Service} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
      
      <Redirect to="/" />
      </switch>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
