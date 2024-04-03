import { IconSearch } from "@/assets/IconSearch";
import * as S from "./style";
import { useState } from "react";
import { Button } from "../Button";

export const Input = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.Container>
      <S.Input
        type="text"
        name="search"
        id="search-input"
        placeholder="Buscar filme pelo nome"
        onFocus={() => setIsFocused((prev) => !prev)}
        onBlur={() => setIsFocused((prev) => !prev)}
      />
      <Button
        text=""
        bgColor="transparent"
        icon={<IconSearch color={isFocused ? "#2F2E41" : "#CCCCCC"} />}
      />
    </S.Container>
  );
};
