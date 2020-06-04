import React from 'react';
import { Layout, Row } from 'antd';
import { Card } from './Blocks';
import { Menu } from './Blocks/Menu';

const { Header, Sider, Content, Footer } = Layout;

export const ProductListComponent = ({ catalog, inBag, addProduct, deleteProduct, ...rest }) => {
  console.log(rest);


  const renderCards = (element) => (
    <Card item={element}
    addProduct={rest.addProductAction} 
    deleteProduct = {rest.deleteProductAction}
    inBag = {inBag}
    key={element.id.toString()} />

  );

  return (
    <Layout>
      <Header>header</Header>
      <Layout>
        <Sider>
          <Menu />
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