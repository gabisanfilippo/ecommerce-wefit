"use client";

import { Empty } from "@/components/ui/Empty";
import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";
import * as S from "./style";
import { HeaderTable } from "./HeaderTable";
import { CardMovie } from "./CardMovie";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/utils/formatPrice";

export const CartPage = () => {
  const router = useRouter();
  const { itemsCart } = useContext(CartContext);

  const total: number = itemsCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount * currentValue.price;
  }, 0);

  if (itemsCart.length === 0) return <Empty mode="back" />;

  return (
    <S.Container>
      <HeaderTable />
      <S.CardsContainer>
        {itemsCart.map((movie) => {
          return <CardMovie key={"cartCard" + movie.id} movieData={movie} />;
        })}
      </S.CardsContainer>
      <S.FooterContainer>
        <Button
          text="FINALIZAR PEDIDO"
          onClick={() => router.push("/order-confirmed")}
        />
        <div>
          <span>TOTAL</span>
          <p>R$ {formatPrice(total)}</p>
        </div>
      </S.FooterContainer>
    </S.Container>
  );
};
