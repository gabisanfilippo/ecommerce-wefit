import styled from "styled-components";
import { IButtonProps } from ".";

export const Button = styled.button<Partial<IButtonProps>>`
  width: 100%;
  height: 40px;
  padding: 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16.34px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background-color: ${({ bgColor }) => bgColor && bgColor};
  color: ${({ textColor }) => textColor && textColor};
`;
