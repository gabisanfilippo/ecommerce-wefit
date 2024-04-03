"use client";

import { IconSearch } from "@/assets/IconSearch";
import * as S from "./style";
import { useEffect, useState } from "react";
import { Button } from "../Button";

interface IInputProps {
  defaultValue?: string | null;
  handleValue?: (value: string) => void;
  showIcon?: boolean;
}

export const Input = ({ defaultValue, handleValue, showIcon }: IInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    defaultValue && setValue(defaultValue);
  }, [defaultValue]);

  return (
    <S.Container>
      <S.Input
        type="text"
        name="search"
        id="search-input"
        placeholder="Buscar filme pelo nome"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setIsFocused((prev) => !prev)}
        onBlur={(event) => {
          handleValue && handleValue(event.target.value);
          setIsFocused((prev) => !prev);
        }}
      />
      {showIcon && (
        <Button
          text=""
          bgColor="transparent"
          icon={<IconSearch color={isFocused ? "#2F2E41" : "#CCCCCC"} />}
        />
      )}
    </S.Container>
  );
};
