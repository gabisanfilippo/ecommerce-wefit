import styled from "styled-components";
import { IButtonProps } from ".";

export const Button = styled.button<Partial<IButtonProps>>`
  width: 100%;
  height: 40px;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 16.34px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  background-color: ${({ bgcolor }) => bgcolor && bgcolor};
  color: ${({ textcolor }) => textcolor && textcolor};
`;
