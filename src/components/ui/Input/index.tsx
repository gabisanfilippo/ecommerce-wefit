"use client";

import { IconSearch } from "@/assets/icons/IconSearch";
import * as S from "./style";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../Button";
import { maskOnlyNumbers } from "@/utils/maskOnlyNumbers";

interface IInputProps {
  defaultValue?: string | null;
  handleValue?: (value: string) => void;
  showIcon?: boolean;
  mask?: "number";
  placeholder: string;
}

export const Input = ({
  defaultValue,
  handleValue,
  showIcon = false,
  mask,
  placeholder,
}: IInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    defaultValue && setValue(defaultValue);
  }, [defaultValue]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!mask) return setValue(event.target.value);

    if (mask === "number") {
      const valueFormatted = maskOnlyNumbers(event.target.value);

      if (valueFormatted === "0") return;
      return setValue(valueFormatted);
    }
  }

  return (
    <S.Container>
      <S.Input
        type="text"
        name="search"
        id="search-input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused((prev) => !prev)}
        onBlur={(event) => {
          handleValue && handleValue(event.target.value);
          setIsFocused((prev) => !prev);
        }}
      />
      {showIcon && (
        <Button
          text=""
          bgcolor="transparent"
          icon={<IconSearch color={isFocused ? "#2F2E41" : "#CCCCCC"} />}
        />
      )}
    </S.Container>
  );
};
