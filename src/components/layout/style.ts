import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  padding: 0 16px;
`;

export const Header = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  * {
    color: white;
  }
  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 27.24px;
    padding: 1rem 0;
    cursor: pointer;
  }
`;

export const CartContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h3 {
      font-size: 14px;
      font-weight: 600;
      line-height: 19.07px;
    }
    p {
      font-size: 12px;
      font-weight: 600;
      line-height: 16.34px;
      color: #999999;
    }
  }
`;
