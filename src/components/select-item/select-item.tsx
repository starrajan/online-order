import React, { useState } from "react";
import { Container, DropdownBtn, ItemContainer, Item } from "./style";
const SelectItem = ({ item_title, item_list }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Container isOpen={isOpen}>
      <DropdownBtn onClick={() => setOpen((isOpen) => !isOpen)}>
        {item_title}
      </DropdownBtn>
      <ItemContainer isOpen={isOpen}>
        {item_list.map((item, index) => (
          <Item>{item.name}</Item>
        ))}
      </ItemContainer>
    </Container>
  );
};
export default SelectItem;
