import React, { useState } from "react";
import { Card as CardComponent, Button } from "antd";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";

const { Meta } = CardComponent;

export const Card = (props) => {
  const { item, addProduct, deleteProduct,bag} = props;
  const [isFlipped, changeFlopped] = useState(false);
  const onChangeFlipped = () => {
    changeFlopped(!isFlipped);
  };

  let isBagsItem = false
 
   bag.bagsItem.map(el=>{
     console.log(el);
if(el.id === item.id){
  isBagsItem = true
} else{
  isBagsItem = false
}
  })
  

 
 let name = isBagsItem? "Удалить из корзины": "В корзину"



  const [isAdd, changeAddToBag] = useState(name);
  const addToBag = () => {
    if (isAdd === "В корзину" ) {
      addProduct(item);
      changeAddToBag("Удалить из корзины");
    } else if(!isBagsItem) {
      changeAddToBag("Удалить из корзины");
    }
    else if(isBagsItem){
      changeAddToBag("В корзину");
      deleteProduct(item);
    }
  };


  
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <CardComponent
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt={item.name}
              src={item.image}
              style={{ minHeight: "320px" }}
            />
          }
          onClick={onChangeFlipped}
        >
          <Meta title={item.name} />
        </CardComponent>

        <CardComponent
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt={item.name}
              src={item.image}
              style={{ minHeight: "320px" }}
            />
          }
          onClick={onChangeFlipped}
        >
          <Meta title={item.price + " грн"} />
        </CardComponent>
      </ReactCardFlip>
      <Link to="/details">
        <Button type="link">Подробнее</Button>
      </Link>

      <Button onClick={addToBag} type="link">
        {isAdd}
      </Button>
    
    </div>
  );
};
