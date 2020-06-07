import React from "react";
import { Button } from "antd";
import { Card, CardTitle, CardButton } from "./styles";

export const CardBag = ({
  item,
  incrementProduct,
  decrementProduct,
  deleteProduct,
}) => {
  const addCount = () => {
    incrementProduct(item);
  };

  const deleteCount = () => {
    decrementProduct(item);
  };

  const delProduct = () => {
    deleteProduct(item);
  };
  return (
    <Card>
      <CardTitle>
        <h2>{item.name}</h2>
        <div>
          Количество<span> {item.count}</span>
        </div>
      </CardTitle>
      <CardButton>
        <div>
          Сумма<span> {item.count * item.price} грн</span>
        </div>
        <Button style={{ margin: "10px 2px" }} onClick={addCount}>
          +1 шт
        </Button>
        <Button onClick={deleteCount}>-1 шт</Button>
      </CardButton>
      <Button onClick={delProduct}>DElETE</Button>
    </Card>
  );
};
