import React from 'react';
import { Layout, Row } from 'antd';
import { Card } from './Blocks';
import { Menu } from './Blocks/Menu';
import { useAuth0 } from "Pages/Blocks/Auth0";

const { Header, Sider, Content, Footer } = Layout;

export const ProductListComponent = ({ isAuth, catalog,bag, addProduct, deleteProduct, ...rest }) => {

  const renderCards = (element) => (
    <Card item={element}
    addProduct={rest.addProductAction} 
    deleteProduct = {rest.deleteProductAction}
    bag = {bag}
    key={element.id.toString()} />

  );
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <Layout>
      <Header>header</Header>
      <Layout>
        <Sider>
          <Menu />
          <div>
      {!isAuth && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuth && <button onClick={() => logout()}>Log out</button>}
    </div>
        </Sider>
        <Content>
          <Row justify="space-around">

            {catalog.map(item => (renderCards(item)))}
          </Row>
        </Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>

  );
}
