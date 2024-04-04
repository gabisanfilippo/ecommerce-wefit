"use client";

import { Button } from "@/components/ui/Button";
import * as S from "./style";
import { useRouter } from "next/navigation";
import { ImageConfirmed } from "@/assets/images/ImageConfirmed";
import { CartContext } from "@/contexts/CartContext";
import { useContext, useEffect } from "react";

export const ConfirmedPage = () => {
  const router = useRouter();
  const { setItemsCart } = useContext(CartContext);

  useEffect(() => setItemsCart([]), []);

  return (
    <S.Container>
      <h2>Compra realizada com sucesso!</h2>
      <ImageConfirmed />
      <Button text="VOLTAR" onClick={() => router.push("/")} />
    </S.Container>
  );
};
