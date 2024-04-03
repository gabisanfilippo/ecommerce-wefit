import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  button {
    position: absolute;
    padding: 0.5rem;
    right: 0.5rem;
    top: 0.5rem;
    width: max-content;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 1rem 32px 1rem 1rem;
  gap: 1rem;
  border-radius: 0.5rem;
  border: 2px solid white;
  &:focus {
    border-color: #009edd;
  }
  &::placeholder {
    color: #c0c0c0;
  }
`;
