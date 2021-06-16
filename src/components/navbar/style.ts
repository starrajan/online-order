import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  box-shadow: 0px 0px 19px rgb(0 0 0 / 10%);
`;
export const Logo = styled.img`
  width: 90px;
`;
export const Address = styled.p``;
export const PickUpContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`;
