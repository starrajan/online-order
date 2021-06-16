import React from "react";
import { Dishes, EmptyCart } from "../../components";
import dishImg from "../../assets/icons/dish.jpeg";
import { Container, Title, DishesContainer } from "./style";
const data = [
  { img_url: dishImg, dish_name: "Baked Dishes" },
  { img_url: dishImg, dish_name: "Baked Dishes" },
  { img_url: dishImg, dish_name: "Baked Dishes" },
  { img_url: dishImg, dish_name: "Baked Dishes" },
  { img_url: dishImg, dish_name: "Baked Dishes" },
  { img_url: dishImg, dish_name: "Baked Dishes" },
];

const Category = (props) => {
  console.log({ props });
  return (
    <Container>
      <div style={{ width: "min-content", margin: "auto", paddingTop: "30px" }}>
        <DishesContainer>
          <DishesContainer>
            {data.slice(0, 3).map((item, index) => (
              <Dishes
                img_url={item.img_url}
                onClick={() => props.history.push("/products")}
              />
            ))}
          </DishesContainer>
        </DishesContainer>
        <Title>Main Category</Title>
        <DishesContainer>
          {data.map((item, index) => (
            <Dishes {...item} onClick={() => props.history.push("/products")} />
          ))}
        </DishesContainer>
      </div>
      <EmptyCart />
    </Container>
  );
};
export default Category;
