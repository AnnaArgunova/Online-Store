import React, {useState, useEffect} from 'react';
import {ProductList } from './ProductList';
import {ProductDetail} from './ProductDetalis';
import {ProductBag} from './Bag';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
//import { Layout, Row } from 'antd';
import { Menu } from './ProductList/Blocks/Menu';
 import {Layout, MenuNav, Content,Sider,Footer} from "Styles/Layout"
import {Header} from './Header/index'
//const { Header, Sider, Content, Footer } = Layout;

function App({isAuth, catalog, getProduct}) {
  const [addedProduct, addProduct] = useState(null)
   const [deletedProduct, deleteProduct] = useState(null)
 

  useEffect(()=>{
    !catalog.length && getProduct()
      }, [])
      
  return (
    
    <Router>
     {/* <Layout > */} 
      <Header/>
      <Layout >
        <MenuNav>
          <Menu />
          
        </MenuNav>
        <Content>
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
         
        </Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer>footer</Footer>
    {/* </Layout> */}

     
    </Router>
  );
}


export default App