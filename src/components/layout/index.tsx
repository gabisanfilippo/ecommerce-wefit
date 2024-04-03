"use client";

import { useContext } from "react";
import * as S from "./style";
import { useRouter } from "next/navigation";
import { IconCart } from "@/assets/IconCart";
import { IChildren } from "@/types/commom";
import { CartContext } from "@/contexts/CartContext";

export const Layout = ({ children }: IChildren) => {
  const router = useRouter();
  const { amountItemsCart } = useContext(CartContext);

  return (
    <S.Main>
      <S.Header>
        <h1 onClick={() => router.push("/")}>WeMovies</h1>
        <S.CartContainer onClick={() => router.push("/cart")}>
          <div>
            <h3>Meu Carrinho</h3>
            <p>{amountItemsCart} itens</p>
          </div>
          <IconCart />
        </S.CartContainer>
      </S.Header>
      {children}
    </S.Main>
  );
};
