import styled from "styled-components";

export const Container = styled.section`
  background-color: white;
  padding: 1.5rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CardsContainer = styled.div`
  border-bottom: 1px solid #999999;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    width: 173px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 32.6.5rem;
      color: #2f2e41;
    }
    span {
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 19.07px;
      color: #999999;
    }
  }
`;
