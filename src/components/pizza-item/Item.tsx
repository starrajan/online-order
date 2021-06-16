import React from "react";
import {
  Container,
  HeadText,
  ParaText,
  Action,
  CustomizeBtn,
  AddBtn,
} from "./style";
const Item = ({ head_text, para_text, price, onSelectItem, id }) => {
  return (
    <Container>
      <HeadText>{head_text}</HeadText>
      <ParaText>{para_text}</ParaText>
      <Action>
        <CustomizeBtn>Customize</CustomizeBtn>
        <AddBtn
          onClick={() =>
            onSelectItem((item) => [
              ...item,
              { id, head_text, para_text, price },
            ])
          }
        >{`Add ${price}`}</AddBtn>
      </Action>
    </Container>
  );
};
export default Item;
