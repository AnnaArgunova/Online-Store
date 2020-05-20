import React, {useState} from "react";
import { CardBag } from "../Bag/CardBag";
import catalog from "../../catalog";

export const Bag = () => {

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Корзина</h1>
  
      {catalog ? (
        catalog.map((item) => <CardBag item={item}  key = {item.id}/>)
      ) : (
        <div>Корзина пуста</div>
      )}

    </div>
  );
};
