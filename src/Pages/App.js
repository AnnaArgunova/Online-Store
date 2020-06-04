import React, {useState, useEffect} from 'react';
import {ProductList } from './ProductList';
import {ProductDetail} from './ProductDetalis';
import {ProductBag} from './Bag';
import {getProduct} from 'Redux/Action/products'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {connect} from 'react-redux';




function App({catalog, getProduct}) {
  
  useEffect(()=>{
    !catalog.length && getProduct()
      }, [])

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

const mapStateToProps = (state) => {
  return {
   inBag:state.bag.inBag,
   catalog: state.products.catalog,
   isLoader: state.products.isLoader
  }
 }

const actions = {
getProduct
}

export default connect(mapStateToProps, actions)(App)
