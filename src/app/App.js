import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// Route Components
import CustomerLayout from '../customer/layout'
import SellerLayout from '../seller/layout'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            key='customer'
            path=''
            render={(props) => {
              window.scrollTo(0, 0);
              return <CustomerLayout {...props} />;
            }}
          />
          <Route
            key='admin'
            path='/admin'
            render={(props) => {
              window.scrollTo(0, 0);
              return <SellerLayout {...props} />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
