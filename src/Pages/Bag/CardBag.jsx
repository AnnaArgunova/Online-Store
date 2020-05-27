import React, { useState } from "react";
import { Button } from "antd";
import { Card, CardTitle, CardButton } from "./styles";

let totalSum = 0;

export const CardBag = ({ item, incrementProduct}) => {
  const [count, setCount] = useState(0);
  

  const addCount = () => {
    setCount(count + 1);
    totalSum += item.price;
    incrementProduct(item.count)
  };

  const deleteCount = () => {
    if (count > 0) {
      setCount(count - 1);
      item.totalCont = count - 1;
      totalSum -= item.price;
    }
  };
  return (
    <Card>
      <CardTitle>
        <h2>{item.title}</h2>
        <div>
          Количество<span> {count}</span>
        </div>
      </CardTitle>
      <CardButton>
        <div>
          Сумма<span> {count * item.price} грн</span>
        </div>
        <Button style={{ margin: "10px 2px" }} onClick={addCount}>
          +1 шт
        </Button>
        <Button onClick={deleteCount}>-1 шт</Button>
      </CardButton>
      <div>
        Итого:<span> {totalSum} грн</span>
      </div>
    </Card>
  );
};
