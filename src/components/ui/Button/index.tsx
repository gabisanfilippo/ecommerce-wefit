import { MouseEvent, ReactNode } from "react";
import * as S from "./style";

export interface IButtonProps {
  icon?: ReactNode;
  bgcolor?: string;
  textcolor?: string;
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({
  icon,
  bgcolor = "#009EDD",
  textcolor = "white",
  text,
  onClick,
}: IButtonProps) => {
  return (
    <S.Button bgcolor={bgcolor} textcolor={textcolor} onClick={onClick}>
      {icon}
      {text}
    </S.Button>
  );
};
