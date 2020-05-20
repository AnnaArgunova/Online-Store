import React from 'react';
import { ProductList } from './ProductList/index';
import {ProductDetail} from './ProductDetalis';
import {Bag} from './Bag';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';



function App() {
  return (
    
    <Router>
      <Switch>
        <Route path='/' component = {ProductList} exact/>
        <Route path = '/details' component = {ProductDetail}/>
        <Route path = '/bag' component = {Bag}/>
      </Switch>
    </Router>
  );
}

export default App;
