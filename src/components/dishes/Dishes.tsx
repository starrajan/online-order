import React from "react";
import { Container, Img, DishName } from "./style";
const Dishes = ({ dish_name = "", img_url, onClick }) => {
  return (
    <Container onClick={() => onClick()}>
      <Img src={img_url} alt={img_url} />
      {dish_name && <DishName>{dish_name}</DishName>}
    </Container>
  );
};
export default Dishes;
