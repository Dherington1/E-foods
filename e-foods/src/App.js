import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

// page imports 
import Nav from './components/nav/Navbarmenu';
import Home from './components/pages/HomePage'

function App() {
  return (
    <>
      <Router basename='/'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' />
          <Route path='/' />
          <Route path='/' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
