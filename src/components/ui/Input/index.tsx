import { IconSearch } from "@/assets/IconSearch";
import * as S from "./style";
import { useState } from "react";
import { Button } from "../Button";

interface IInputProps {
  defaultValue?: string | null;
  onSearch?: (value: string) => void;
}

export const Input = ({ defaultValue, onSearch }: IInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.Container>
      <S.Input
        type="text"
        name="search"
        id="search-input"
        placeholder="Buscar filme pelo nome"
        defaultValue={defaultValue ? defaultValue : ""}
        onFocus={() => setIsFocused((prev) => !prev)}
        onBlur={(event) => {
          onSearch && onSearch(event.target.value);
          setIsFocused((prev) => !prev);
        }}
      />
      <Button
        text=""
        bgColor="transparent"
        icon={<IconSearch color={isFocused ? "#2F2E41" : "#CCCCCC"} />}
      />
    </S.Container>
  );
};
