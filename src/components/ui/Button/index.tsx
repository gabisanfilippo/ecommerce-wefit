import { ReactNode } from "react";
import * as S from "./style";

export interface IButtonProps {
  icon?: ReactNode;
  bgColor?: string;
  textColor?: string;
  text: string;
}

export const Button = ({
  icon,
  bgColor = "#009EDD",
  textColor = "white",
  text,
}: IButtonProps) => {
  return (
    <S.Button bgColor={bgColor} textColor={textColor}>
      {icon}
      {text}
    </S.Button>
  );
};
