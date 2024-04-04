"use client";

import { Button } from "@/components/ui/Button";
import * as S from "./style";
import { useRouter } from "next/navigation";
import { ImageConfirmed } from "@/assets/images/ImageConfirmed";

export const ConfirmedPage = () => {
  const router = useRouter();

  return (
    <S.Container>
      <h2>Compra realizada com sucesso!</h2>
      <ImageConfirmed />
      <Button text="VOLTAR" onClick={() => router.push("/")} />
    </S.Container>
  );
};
