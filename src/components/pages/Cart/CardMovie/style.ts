import styled from "styled-components";

export const ContainerDesktop = styled.article`
  display: grid;
  grid-template-columns: 6fr 6fr 6fr 1fr;
  gap: 1rem;
  align-items: center;
  button {
    width: max-content;
    padding: 0.5rem 0;
  }
  input {
    border: 1px solid #d9d9d9;
    width: 62px;
    height: 26px;
    padding: 0 1rem;
    border-radius: 4px;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 19.07px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Title = styled.h4`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
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
  gap: 1rem;

  div {
    width: max-content;
  }
`;

export const ContainerMobile = styled.article`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  button {
    width: max-content;
    padding: 0.5rem 0;
  }
  input {
    border: 1px solid #d9d9d9;
    width: 62px;
    height: 26px;
    padding: 0 1rem;
    border-radius: 4px;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 19.07px;
  }
  span {
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 16.34px;
    text-align: left;
    color: #999999;
    margin-bottom: -1rem;
  }
  @media (min-width: 901px) {
    display: none;
  }
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
