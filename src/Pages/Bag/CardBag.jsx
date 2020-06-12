import React from "react";
//import { Button } from "antd";
import {H2, ButtonDel,Button, Card, CardTitle, CardButton, CardImg } from "./styles";

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
      <CardImg>
        <img alt = {item.name} src = {item.image} width = '50%'></img>
      </CardImg>
      <CardTitle>
        <H2>{item.name}</H2>
        <div>
          Количество<span> {item.count}</span>
        </div>
      </CardTitle>
      <CardButton>
        <div>
          Сумма<span> {item.count * item.price} грн</span>
        </div>
        <Button onClick={addCount}>
          +1 шт
        </Button>
        <Button onClick={deleteCount}>-1 шт</Button>
      </CardButton>
      <ButtonDel onClick={delProduct}>&#10060;</ButtonDel>
    </Card>
  );
};
