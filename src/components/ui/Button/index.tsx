import { MouseEvent, ReactNode } from "react";
import * as S from "./style";

export interface IButtonProps {
  icon?: ReactNode;
  bgColor?: string;
  textColor?: string;
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({
  icon,
  bgColor = "#009EDD",
  textColor = "white",
  text,
  onClick,
}: IButtonProps) => {
  return (
    <S.Button bgColor={bgColor} textColor={textColor} onClick={onClick}>
      {icon}
      {text}
    </S.Button>
  );
};
