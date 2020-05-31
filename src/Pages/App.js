import React from 'react';
import { ProductList } from './ProductList';
import { ProductDetail } from './ProductDetalis';
import { ProductBag } from './Bag';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <ProductList />
        </Route>
        <Route path='/details'>
          <ProductDetail />
        </Route>
        <Route path='/bag'>
          <ProductBag />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
