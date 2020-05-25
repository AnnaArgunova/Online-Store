import React from "react";
import { CardBag } from "../Bag/CardBag";
import Item from "antd/lib/list/Item";

export const Bag = ({item}) => {

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Корзина</h1>
  
      {item ? (
        <CardBag item={item} ></CardBag>
      ) : (
        <div>Корзина пуста</div>
      )}

    </div>
  );
};
