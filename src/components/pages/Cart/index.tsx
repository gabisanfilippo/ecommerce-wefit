"use client";

import { Empty } from "@/components/ui/Empty";
import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";
import * as S from "./style";
import { HeaderTable } from "./HeaderTable";
import { CardMovie } from "./CardMovie";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export const CartList = () => {
  const router = useRouter();
  const { itemsCart, setItemsCart } = useContext(CartContext);

  const total: number = itemsCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount * currentValue.price;
  }, 0);

  const formattedPrice = total.toFixed(2).toString().replace(".", ",");

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
          onClick={() => {
            setItemsCart([]);
            router.push("/order-confirmed");
          }}
        />
        <div>
          <span>TOTAL</span>
          <p>R$ {formattedPrice}</p>
        </div>
      </S.FooterContainer>
    </S.Container>
  );
};
