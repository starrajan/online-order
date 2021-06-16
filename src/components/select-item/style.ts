import styled from "styled-components";

export const Container = styled.div<any>`
  transition: all 0.3ms;
  background: ${(props) => (props?.isOpen ? "gainsboro" : null)};
  @media (max-width: 600px) {
    display: none;
  }
`;
export const DropdownBtn = styled.button`
  background: transparent;
  border-style: none;
  font-size: 18px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
`;
export const ItemContainer = styled.div<any>`
  display: ${(props) => (props?.isOpen ? "block" : "none")};
`;
export const Item = styled.p`
  padding: 5px 30px;
  cursor: pointer;
`;
