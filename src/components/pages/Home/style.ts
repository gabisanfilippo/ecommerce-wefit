import styled from "styled-components";

export const CardsContainer = styled.section`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 1rem;
  @media (max-width: 1080px) {
    justify-content: center;
  }
`;
