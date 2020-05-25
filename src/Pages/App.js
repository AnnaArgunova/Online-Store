import React, {useState} from 'react';
import {ProductList } from './ProductList';
import {ProductDetail} from './ProductDetalis';
import {ProductBag} from './Bag';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';



function App() {
  const [selectedProduct, selectProduct] = useState(null)
  return (
    
    <Router>
      <Switch>
        <Route path='/' exact>
          <ProductList selectProduct = {selectProduct}/>
        </Route>
        <Route path = '/details'>
          <ProductDetail/>
        </Route>
        <Route path = '/bag'>
          <ProductBag selectedProduct={selectedProduct}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
