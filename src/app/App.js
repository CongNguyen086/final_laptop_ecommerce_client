import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// Route Components
import CustomerLayout from '../customer/layout'
import SellerLayout from '../seller/layout'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/seller' component={SellerLayout} />
          <Route path='/' component={CustomerLayout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
