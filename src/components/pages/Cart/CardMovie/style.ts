import styled from "styled-components";

export const ContainerDesktop = styled.article`
  display: grid;
  grid-template-columns: 6fr 6fr 6fr 1fr;
  gap: 16px;
  align-items: center;
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
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Title = styled.h4`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 19.07px;
  color: #2f2e41;
`;

export const Paragraph = styled.p`
  color: #2f2e41;
  font-weight: 700;
  line-height: 21.79px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  div {
    width: max-content;
  }
`;

export const ContainerMobile = styled.article`
  display: flex;
  gap: 24px;
  justify-content: space-between;
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
  span {
    font-size: 12px;
    font-weight: 700;
    line-height: 16.34px;
    text-align: left;
    color: #999999;
    margin-bottom: -16px;
  }
  @media (min-width: 901px) {
    display: none;
  }
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
