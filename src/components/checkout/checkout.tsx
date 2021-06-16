import React from "react";
import {
  Container,
  CheckoutItemContainer,
  CheckoutItem,
  Select,
  RemoveBtn,
  EditBtn,
  CheckoutInfo,
  SpecialInsInput,
  PriceTotal,
  CheckoutBtn,
} from "./style";

const prices = [
  { label: "Subtotal", price: "$55.95" },
  { label: "Taxes(10%)", price: "$2.95" },
  { label: "Delivery Charge", price: "$2.95" },
  { label: "Order Total", price: "$60.95" },
];
const Checkout = ({ selected_items, onRemove }) => {
  return (
    <Container>
      <CheckoutItemContainer>
        {selected_items &&
          selected_items.map((item, index) => (
            <CheckoutItem key={index}>
              <div>
                <Select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Select>
              </div>
              <div>
                <p style={{ margin: 0 }}>{item.head_text}</p>
                <RemoveBtn
                  onClick={() => {
                    const filteredItem = selected_items.filter(
                      (v) => v.id != item.id
                    );
                    onRemove(filteredItem);
                  }}
                >
                  REMOVE
                </RemoveBtn>
              </div>
              <div>
                <p style={{ margin: 0 }}>{item.price}</p>
                <EditBtn>EDIT</EditBtn>
              </div>
            </CheckoutItem>
          ))}
      </CheckoutItemContainer>
      <CheckoutInfo>
        <SpecialInsInput placeholder="Add Special Instruction" />
        {prices.map((item, index) => (
          <PriceTotal>
            <p>{item.label}</p>
            <p>{item.price}</p>
          </PriceTotal>
        ))}
        <CheckoutBtn>
          <p>CHECKOUT</p>
          <div>
            <p>ORDER TOTAL</p>
            <h4>$60.95</h4>
          </div>
        </CheckoutBtn>
      </CheckoutInfo>
    </Container>
  );
};

export default Checkout;
