import React from "react";
import { CardBag } from "../Bag/CardBag";
import {TotalSum } from "Styles/Bag";

export const Bag = ({
  item,
  totalSum,
  incrementProduct,
  decrementProduct,
  deleteProduct,
  ...rest
}) => {
  const renderCardBag = (element) => (
    <CardBag
      item={element}
      incrementProduct={rest.incrementProductAction}
      decrementProduct={rest.decrementProductAction}
      deleteProduct={rest.deleteProductAction}
      key={element.id}
    />
  );
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Корзина</h1>

      {item.length ? (
        item.map((item) => renderCardBag(item))
      ) : (
        <h2>Корзина пуста</h2>
      )}
      <TotalSum>
        Сумма:<span> {totalSum} грн</span>
      </TotalSum>
    </div>
  );
};
