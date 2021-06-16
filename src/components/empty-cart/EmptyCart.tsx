import React from "react";
import { Container, Img, TextHead, TextPara } from "./style";
import EmptyCartImg from "../../assets/icons/cart.png";
const EmptyCart = () => {
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <Img src={EmptyCartImg} />
        <TextHead>Cart is Empty</TextHead>
        <TextPara>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta!
        </TextPara>
      </div>
    </Container>
  );
};
export default EmptyCart;
