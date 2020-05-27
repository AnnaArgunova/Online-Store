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
   const [addedProduct, addProduct] = useState(null)
   const [deletedProduct, deleteProduct] = useState(null)

   
  return (
    
    <Router>
      <Switch>
        <Route path='/' exact>
          <ProductList
           addProduct ={addProduct} 
           deleteProduct ={deleteProduct}
          />
        </Route>
        <Route path = '/details'>
          <ProductDetail/>
        </Route>
        <Route path = '/bag'>
          <ProductBag 
           addedProduct = {addedProduct}
           deletedProduct ={deletedProduct}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
