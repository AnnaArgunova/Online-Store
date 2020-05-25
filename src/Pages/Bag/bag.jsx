import React from "react";
import { CardBag } from "../Bag/CardBag";


export const Bag = ({item}) => {
  let sum = 0;
item.forEach(element => {
  return sum = sum +element.price;
});
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Корзина</h1>
  
      {item ? (
        item.map((item) => <CardBag item={item}  key = {item.id}/>)
      ) : (
        <div>Корзина пуста</div>
      )}
<div>
      Сумма <span>{sum}</span>
</div>
    </div>
  );
};
