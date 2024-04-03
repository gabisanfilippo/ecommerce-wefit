import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  button {
    position: absolute;
    padding: 8px;
    right: 8px;
    top: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 16px 32px 16px 16px;
  gap: 16px;
  border-radius: 8px;
  border: 2px solid white;
  &:focus {
    border-color: #009edd;
  }
  &::placeholder {
    color: #c0c0c0;
  }
`;
