import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
export const Title = styled.h3`
  font-size: 15px;
  color: blue;
`;
export const DishesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
