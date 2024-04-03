"use client";

import { Input } from "@/components/ui/Input";
import * as S from "./style";
import { CardAddMovie } from "./CardAddMovie";

export const SearchMovies = () => {
  return (
    <>
      <Input />
      <S.CardsContainer>
        <CardAddMovie />
      </S.CardsContainer>
    </>
  );
};
