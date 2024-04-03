import styled from "styled-components";

export const Container = styled.article`
  display: grid;
  grid-template-columns: 6fr 6fr 6fr 1fr;
  gap: 16px;
  align-items: center;
  h4 {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    color: #2f2e41;
  }
  p {
    color: #2f2e41;
    font-weight: 700;
    line-height: 21.79px;
  }
  button {
    width: max-content;
    padding: 8px 0;
  }
  input {
    border: 1px solid #d9d9d9;
    width: 62px;
    height: 26px;
    padding: 0 16px;
    border-radius: 4px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.07px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  div {
    width: max-content;
  }
`;
