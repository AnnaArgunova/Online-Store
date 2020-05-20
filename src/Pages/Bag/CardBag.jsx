import React, { useState } from "react";
import {Button} from 'antd';
import {Card, CardTitle, CardButton} from './styles';
import catalog from '../../catalog';


catalog.totalSum = 0;


export const CardBag = ({ item }) => {
  const [count, setCount] = useState(0);
  const addCount = () => {
      setCount(count+1);
      
catalog.totalSum += item.price;
console.log(catalog, count);

}
      
  const deleteCount = () =>{
    if(count >0){
    setCount(count-1);
    item.totalCont = count-1;
    catalog.totalSum -= item.price;

    console.log(catalog);
    }
}
  return (
      
    <Card>
        <CardTitle>
      <h2>{item.title}</h2>
      <div>
        Количество<span> {count}</span>
      </div>
      </CardTitle>
      <CardButton>
  <div>Сумма<span> {count * item.price} грн</span></div>
      <Button style = {{margin:'10px 2px'}} onClick={addCount}>+1 шт</Button>
      <Button onClick={deleteCount}>-1 шт</Button>
      </CardButton>
      <div>Итого:<span> {catalog.totalSum} грн</span></div>
    </Card>
  );
};
