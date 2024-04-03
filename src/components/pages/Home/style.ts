import styled from "styled-components";

export const CardsContainer = styled.section`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 16px;
  @media (max-width: 1080px) {
    justify-content: center;
  }
`;
