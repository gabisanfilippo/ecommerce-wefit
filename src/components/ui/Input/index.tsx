import { IconSearch } from "@/assets/IconSearch";
import * as S from "./style";
import { useState } from "react";
import { Button } from "../Button";
import { useRouter } from "next/navigation";

interface IInputProps {
  defaultValue?: string | null;
}

export const Input = ({ defaultValue }: IInputProps) => {
  const router = useRouter();
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
          const value = event.target.value;
          if (value) router.push(`/search?title=${event.target.value}`);
          else router.push(`/`);
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
