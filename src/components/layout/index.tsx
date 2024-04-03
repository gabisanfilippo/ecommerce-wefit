"use client";

import { ReactNode } from "react";
import * as S from "./style";
import { useRouter } from "next/navigation";
import { IconCart } from "@/assets/IconCart";

interface IProps {
  children: ReactNode;
}

export const Layout = ({ children }: IProps) => {
  const router = useRouter();
  return (
    <S.Main>
      <S.Header>
        <h1 onClick={() => router.push("/")}>WeMovies</h1>
        <S.CartContainer onClick={() => router.push("/cart")}>
          <div>
            <h3>Meu Carrinho</h3>
            <p>0 itens</p>
          </div>
          <IconCart />
        </S.CartContainer>
      </S.Header>
      {children}
    </S.Main>
  );
};
