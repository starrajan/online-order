import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid gray;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100px;
`;
export const TextHead = styled.h3``;
export const TextPara = styled.p``;
