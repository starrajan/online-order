import React, { useState } from "react";
import { Checkout, Navbar, PizzaItem, SelectItem } from "../../components";
import { Container, Title, ItemContainer, MenuContainer } from "./style";
const data = [
  {
    head_text: "Kadhai Panner Tikka Pizza",
    para_text: "Romanine,Shaved Permesan &Shaved MORE",
    price: "$14",
    id: 1,
  },
  {
    head_text: "Rustic Panner Tikka Pizza",
    para_text: "Romanine,Shaved Permesan &Shaved MORE",
    price: "$14",
    id: 2,
  },
  {
    head_text: "Kadhai Panner Tikka Pizza",
    para_text: "Romanine,Shaved Permesan &Shaved MORE",
    price: "$14",
    id: 3,
  },
  {
    head_text: "Kadhai Panner Tikka Pizza",
    para_text: "Romanine,Shaved Permesan &Shaved MORE",
    price: "$14",
    id: 4,
  },
  {
    head_text: "Makhani Panner Tikka Pizza",
    para_text: "Romanine,Shaved Permesan &Shaved MORE",
    price: "$14",
    id: 5,
  },
  {
    head_text: "Kadhai Panner Tikka Pizza",
    para_text: "Romanine,Shaved Permesan &Shaved MORE",
    price: "$14",
    id: 6,
  },
  {
    head_text: "Kadhai Panner Tikka Pizza",
    para_text: "Romanine,Shaved Permesan &Shaved MORE",
    price: "$14",
    id: 7,
  },
  {
    head_text: "Kadhai Panner Tikka Pizza",
    para_text: "Romanine,Shaved Permesan &Shaved MORE",
    price: "$14",
    id: 8,
  },
];
const selectData = [
  {
    item_title: "Pizza",
    item_list: [
      { name: "Non Veg Pizza" },
      { name: "Veg Pizza" },
      { name: "Mixed Pizza" },
    ],
  },
  {
    item_title: "Sandwich",
    item_list: [
      { name: "Non Veg Pizza" },
      { name: "Veg Pizza" },
      { name: "Mixed Pizza" },
    ],
  },
  {
    item_title: "Soup",
    item_list: [
      { name: "Non Veg Pizza" },
      { name: "Veg Pizza" },
      { name: "Mixed Pizza" },
    ],
  },
  {
    item_title: "Pasta",
    item_list: [
      { name: "Non Veg Pizza" },
      { name: "Veg Pizza" },
      { name: "Mixed Pizza" },
    ],
  },
  {
    item_title: "Dessert",
    item_list: [
      { name: "Non Veg Pizza" },
      { name: "Veg Pizza" },
      { name: "Mixed Pizza" },
    ],
  },
  {
    item_title: "Breakfast Item",
    item_list: [
      { name: "Non Veg Pizza" },
      { name: "Veg Pizza" },
      { name: "Mixed Pizza" },
    ],
  },
  {
    item_title: "Burger",
    item_list: [
      { name: "Non Veg Pizza" },
      { name: "Veg Pizza" },
      { name: "Mixed Pizza" },
    ],
  },
  {
    item_title: "Hot-Foods",
    item_list: [
      { name: "Non Veg Pizza" },
      { name: "Veg Pizza" },
      { name: "Mixed Pizza" },
    ],
  },
  {
    item_title: "Breakfast Items",
    item_list: [
      { name: "Non Veg Pizza" },
      { name: "Veg Pizza" },
      { name: "Mixed Pizza" },
    ],
  },
];
const Products = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <Container>
      <MenuContainer>
        {selectData.map((item, index) => (
          <SelectItem {...item} key={index} />
        ))}
      </MenuContainer>
      <div>
        <Title>Non Veg Pizza</Title>
        <ItemContainer>
          {data.map((item, index) => (
            <PizzaItem {...item} key={index} onSelectItem={setSelectedItems} />
          ))}
        </ItemContainer>
      </div>
      <Checkout selected_items={selectedItems} onRemove={setSelectedItems} />
    </Container>
  );
};
export default Products;
