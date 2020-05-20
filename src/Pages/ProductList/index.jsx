import React from 'react';
import {Layout, Row} from 'antd';
import catalog from '../../catalog';
import {Card} from './Blocks';
import {Menu} from './Blocks/Menu';

const {Header, Sider, Content, Footer} = Layout;
const bags = [ {
  id: 5,
  title: 'Улитка',
  price:60,
  image: 'images/snailYellowAmpoule1.jpg'
},];

export const ProductList = () =>{

    const renderCards = (element,bags) =>(
     <Card item = {element} bags = {bags} key={element.id.toString()} />

    );

    return (
<Layout>
  <Header>header</Header>
  <Layout>
    <Sider>
      <Menu bags={bags}/>
    </Sider>
    <Content>
    <Row justify="space-around">

  {catalog.map(item => (renderCards(item,bags)))}
  </Row>
    </Content>
    <Sider>right sidebar</Sider>
  </Layout>
  <Footer>footer</Footer>
</Layout>

    );
}