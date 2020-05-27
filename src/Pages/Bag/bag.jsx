import React from "react";
import { CardBag } from "../Bag/CardBag";
import {ProductBag} from './index'
import { incrementProductAction } from "../../Redux/Action/products";


export const Bag = ({item, incrementProduct, ...rest}) => {
  const renderCardBag = (element) =>(
<CardBag item={element} 
incrementProduct = {incrementProductAction}
        key = {element.id}/>
  
);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Корзина</h1>
  
      {item ? (
        item.map((item) => (renderCardBag(item)))
      ) : (
        <div>Корзина пуста</div>
      )}
<div></div>
    </div>
  );
};
