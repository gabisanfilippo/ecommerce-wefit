import styled from "styled-components";

export const Container = styled.section`
  background-color: white;
  padding: 24px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CardsContainer = styled.div`
  border-bottom: 1px solid #999999;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
    gap: 16px;
    p {
      font-size: 24px;
      font-weight: 700;
      line-height: 32.68px;
      color: #2f2e41;
    }
    span {
      font-size: 14px;
      font-weight: 700;
      line-height: 19.07px;
      color: #999999;
    }
  }
`;
