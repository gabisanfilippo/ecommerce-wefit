import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  padding: 0 1rem;
`;

export const Header = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  * {
    color: white;
  }
  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 27.1.5rem;
    padding: 1rem 0;
    cursor: pointer;
  }
`;

export const CartContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h3 {
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 19.07px;
      @media (max-width: 400px) {
        display: none;
      }
    }
    p {
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 16.34px;
      color: #999999;
    }
  }
`;
