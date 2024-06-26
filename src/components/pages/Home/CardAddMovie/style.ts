import styled from "styled-components";

export const Container = styled.article`
  background-color: white;
  width: 338.67px;
  height: 324px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4px;
  opacity: 0px;
  h4 {
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 16.34px;
    text-align: center;
    color: #333333;
  }
  p {
    font-weight: 700;
    line-height: 21.79px;
    text-align: center;
    color: #2f2e41;
  }
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 16.34px;
`;
