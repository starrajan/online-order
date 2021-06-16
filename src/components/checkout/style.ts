import styled from "styled-components";

export const Container = styled.div`
  padding-top: 30px;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const CheckoutItemContainer = styled.div``;
export const CheckoutItem = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid gray;
`;
export const Select = styled.select``;
export const RemoveBtn = styled.button`
  border-style: none;
  background: transparent;
  color: red;
  cursor: pointer;
`;
export const EditBtn = styled.button`
  border-style: none;
  background: transparent;
  color: green;
  cursor: pointer;
`;
export const CheckoutInfo = styled.div`
  margin-top: 54px;
`;
export const SpecialInsInput = styled.input`
  background: gainsboro;
  border: 1px solid;
  padding: 10px 20px;
  border-radius: 3px;
`;
export const PriceTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CheckoutBtn = styled.button`
  width: 100%;
  background: green;
  border-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-top: 50px;
`;
