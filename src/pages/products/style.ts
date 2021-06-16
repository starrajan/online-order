import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  gap: 40px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
export const Title = styled.h3`
  color: blue;
  font-size: 30px;
`;
export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const MenuContainer = styled.div``;
